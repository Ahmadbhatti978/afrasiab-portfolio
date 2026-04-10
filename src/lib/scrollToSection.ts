/** Same-page navigation compatible with HashRouter (avoids hijacking the `#` route). */
export function scrollToSection(elementId: string): void {
  document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
