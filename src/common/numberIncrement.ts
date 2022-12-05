export function increaseNumber(
 startNumber: number,
 endNumber: number,
 element: HTMLElement,
 speed: number
) {
 if (startNumber < endNumber) {
  startNumber++;
  element.innerHTML = startNumber.toString();
  setTimeout(() => {
   increaseNumber(startNumber, endNumber, element, speed);
  }, speed);
 }
}
