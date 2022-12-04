export function fadeIn(
 element: HTMLElement,
 duration: number = 700,
 betweenFade?: (e: HTMLElement) => void
) {
 element.classList.add("fade-in");
 setTimeout(() => {
  element.classList.remove("fade-in");
  betweenFade && betweenFade(element);
 }, duration);
}

export function fadeOut(
 element: HTMLElement,
 duration: number = 700,
 betweenFade?: (e: HTMLElement) => void
) {
 element.classList.add("fade-out");
 setTimeout(() => {
  element.classList.remove("fade-out");
  betweenFade && betweenFade(element);
 }, duration);
}
