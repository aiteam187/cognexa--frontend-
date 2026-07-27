const SERVER_URL = import.meta.env.VITE_SERVER_URL ?? '';
const API_URL = import.meta.env.VITE_API_URL ?? '/api';

export const API_BASE_URL = `${SERVER_URL}${API_URL}`;

export async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`API error ${res.status}: ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}
