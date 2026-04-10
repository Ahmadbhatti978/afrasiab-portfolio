/** URL for a file in /public; respects Vite `base` (subpath or relative `./` builds). */
export function publicUrl(path: string): string {
  const trimmed = path.replace(/^\/+/, "");
  const raw = import.meta.env.BASE_URL;
  const base = typeof raw === "string" && raw.length > 0 ? raw : "/";
  if (base === "/") {
    return `/${trimmed}`;
  }
  const prefix = base.endsWith("/") ? base : `${base}/`;
  return `${prefix}${trimmed}`;
}
