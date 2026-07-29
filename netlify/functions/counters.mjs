// Global blog view / like counters, persisted in Netlify Blobs.
//
// GET  /.netlify/functions/counters              -> { views:{id:n}, likes:{id:n} }
// POST /.netlify/functions/counters              -> body { action:"view"|"like"|"unlike", id:"post-1" }
//                                                   returns { views:n, likes:n }
//
// Netlify Blobs is free on all plans and needs no external service or API key.

import { getStore } from '@netlify/blobs';

const KEY = 'blog-counters';

const JSON_HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Cache-Control': 'no-store',
};

// Seeded starting values so a brand-new deployment does not show zeroes.
// Deterministic, so every visitor sees the same baseline.
// NOTE: must stay byte-identical in behaviour to seedFor() in index.html,
// otherwise the local fallback and the server disagree and numbers jump.
function seed(id) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < id.length; i++) { h ^= id.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
  h ^= h >>> 16; h = Math.imul(h, 2246822507) >>> 0;
  h ^= h >>> 13; h = Math.imul(h, 3266489909) >>> 0;
  h = (h ^ (h >>> 16)) >>> 0;
  const views = 5000 + (h % 5000);
  const likes = Math.max(500, Math.min(2000, Math.round(views * (0.08 + ((h >>> 7) % 12) / 100))));
  return { views, likes };
}

async function readAll(store) {
  const raw = await store.get(KEY, { type: 'json' });
  return raw && typeof raw === 'object' ? raw : {};
}

export default async (request) => {
  if (request.method === 'OPTIONS') {
    return new Response('', { status: 204, headers: JSON_HEADERS });
  }

  let store;
  try {
    store = getStore('blog-counters');
  } catch (err) {
    return new Response(JSON.stringify({ error: 'blob-store-unavailable' }), {
      status: 503,
      headers: JSON_HEADERS,
    });
  }

  try {
    if (request.method === 'GET') {
      const data = await readAll(store);
      const views = {};
      const likes = {};
      for (const [id, rec] of Object.entries(data)) {
        views[id] = rec.views;
        likes[id] = rec.likes;
      }
      return new Response(JSON.stringify({ views, likes }), { status: 200, headers: JSON_HEADERS });
    }

    if (request.method === 'POST') {
      const { action, id } = await request.json();
      if (!id || typeof id !== 'string' || !/^post-\d+$/.test(id)) {
        return new Response(JSON.stringify({ error: 'bad-id' }), { status: 400, headers: JSON_HEADERS });
      }

      const data = await readAll(store);
      if (!data[id]) data[id] = seed(id);

      if (action === 'view') data[id].views += 1;
      else if (action === 'like') data[id].likes += 1;
      else if (action === 'unlike') data[id].likes = Math.max(0, data[id].likes - 1);
      else {
        return new Response(JSON.stringify({ error: 'bad-action' }), { status: 400, headers: JSON_HEADERS });
      }

      await store.setJSON(KEY, data);
      return new Response(JSON.stringify({ views: data[id].views, likes: data[id].likes }), {
        status: 200,
        headers: JSON_HEADERS,
      });
    }

    return new Response(JSON.stringify({ error: 'method-not-allowed' }), { status: 405, headers: JSON_HEADERS });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'counter-failure', detail: String(err) }), {
      status: 500,
      headers: JSON_HEADERS,
    });
  }
};
