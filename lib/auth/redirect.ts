/** Keep auth return links on this site, even when a caller supplies `next`. */
export function safeAuthNextPath(value: string | null, fallback: string): string {
  if (!value || !value.startsWith("/") || value.startsWith("//") ||
      value.includes("\\") || /[\u0000-\u001f\u007f]/.test(value)) {
    return fallback;
  }

  try {
    const url = new URL(value, "https://savannamind.invalid");
    if (url.origin !== "https://savannamind.invalid") return fallback;
    if (!/^\/(en|sw)(\/|$)/.test(url.pathname)) return fallback;
    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return fallback;
  }
}
