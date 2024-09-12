// src/api/register.ts
import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  const body = await request.json();
  
  const response = await fetch('http://localhost:1337/api/auth/local/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: body.username,
      email: body.email,
      password: body.password,
    }),
  });

  const data = await response.json();
  
  return new Response(JSON.stringify(data), { status: response.status });
};
