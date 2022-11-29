export function increaseNumber(
 i: number,
 endNumber: number,
 element: HTMLElement,
 speed: number
) {
 if (i < endNumber) {
  i++;
  element.innerHTML = i.toString();
  setTimeout(() => {
   increaseNumber(i, endNumber, element, speed);
  }, speed);
 }
}
