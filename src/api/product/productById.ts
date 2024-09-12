// src/api/products/[id].ts
import type { APIRoute } from 'astro';

export const get: APIRoute = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`http://localhost:1337/api/products/${id}`);
  const data = await response.json();
  
  return new Response(JSON.stringify(data), { status: 200 });
};
