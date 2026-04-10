/** Absolute URL for a file in /public; respects Vite `base` (e.g. GitHub Pages project URL). */
export function publicUrl(path: string): string {
  const trimmed = path.replace(/^\/+/, "");
  const base = import.meta.env.BASE_URL;
  const prefix = base.endsWith("/") ? base : `${base}/`;
  return `${prefix}${trimmed}`;
}
