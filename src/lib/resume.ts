import type { MouseEvent } from "react";

/** File in /public */
export const RESUME_PUBLIC_PATH = "/afrasiab_resume.pdf";

export const RESUME_DOWNLOAD_FILENAME = "Afrasiab_Ahmad_Resume.pdf";

function bufferLooksLikePdf(buf: ArrayBuffer): boolean {
  const head = new Uint8Array(buf.slice(0, 5));
  if (head.length < 4) return false;
  return String.fromCharCode(head[0], head[1], head[2], head[3]) === "%PDF";
}

export async function downloadResume(event?: MouseEvent<HTMLAnchorElement>): Promise<void> {
  event?.preventDefault();

  try {
    const res = await fetch(RESUME_PUBLIC_PATH, { cache: "no-store", method: "GET" });
    const buf = await res.arrayBuffer();
    const ct = (res.headers.get("content-type") ?? "").toLowerCase();
    const looksPdf = res.ok && (ct.includes("pdf") || bufferLooksLikePdf(buf));

    if (!looksPdf) {
      window.open(RESUME_PUBLIC_PATH, "_blank", "noopener,noreferrer");
      return;
    }

    const blob = new Blob([buf], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = RESUME_DOWNLOAD_FILENAME;
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2500);
  } catch {
    window.open(RESUME_PUBLIC_PATH, "_blank", "noopener,noreferrer");
  }
}
