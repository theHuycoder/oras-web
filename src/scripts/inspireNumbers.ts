import { increaseNumber } from "../common/numberIncrement";
import { inspireNumbers } from "./mocks";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function generateInspireNumbers() {
 const container = document.getElementById("inspire-numbers-container");

 inspireNumbers.forEach(({ number, label, speed, color, startNumber }) => {
  const item = document.createElement("div");
  const itemNumberWrapper = document.createElement("div");
  const itemNumber = document.createElement("span");
  const itemLabel = document.createElement("p");

  itemNumberWrapper.classList.add("text-6xl", "font-bold", color);
  itemNumberWrapper.append(itemNumber, "+");

  itemLabel.classList.add("text-4xl", "font-medium", "text-gray-200");

  item.classList.add(
   "flex",
   "flex-col",
   "items-center",
   "justify-center",
   "text-center",
   "gap-1"
  );
  item.appendChild(itemNumberWrapper);
  item.appendChild(itemLabel);

  itemLabel.innerText = label;
  itemNumber.innerText = "0";

  ScrollTrigger.create({
   trigger: container,
   scrub: 1,
   once: true,
   onEnter: () => {
    increaseNumber(startNumber, number, itemNumber, speed);
   },
  });
  container?.appendChild(item);
 });
}
