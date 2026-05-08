export function apiUrl(path = '/') {
  const base = import.meta.env.VITE_API_URL || 'http://localhost:5050'
  return base.replace(/\/$/, '') + (path.startsWith('/') ? path : `/${path}`)
}
const apiBaseUrl = import.meta.env.VITE_API_URL || "http://localhost:5050";

export const apiUrl = (path) => `${apiBaseUrl}${path}`;