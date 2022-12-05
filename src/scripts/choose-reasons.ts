import { chooseReasons } from "./mocks";
export class SlidesBuilder {
 private container: HTMLElement;

 constructor(container: HTMLElement) {
  this.container = container;
 }

 public build() {
  chooseReasons.forEach((reason, idx) => {
   const reasonEl = document.createElement("div");
   const titleEl = document.createElement("p");
   const subtitleEl = document.createElement("p");

   titleEl.innerText = `${idx + 1}. ${reason.title}`;
   subtitleEl.innerText = reason.subtitle;

   titleEl.classList.add("m-0", "text-3xl", "font-semibold");
   subtitleEl.classList.add("m-0", "text-xl", "text-gray-400");

   if (idx === 0) {
    reasonEl.classList.add("active");
   }

   reasonEl.classList.add("embla__slide");
   reasonEl.appendChild(titleEl);
   reasonEl.appendChild(subtitleEl);

   this.container.appendChild(reasonEl);
  });

  return this;
 }
}
