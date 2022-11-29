import EmblaCarousel from "embla-carousel";

export default function initEmbla() {
 const wrap = document.querySelector(".embla");
 const viewPort = wrap?.querySelector(".embla__viewport");
 const prevBtn = wrap?.querySelector(".embla__button--prev");
 const nextBtn = wrap?.querySelector(".embla__button--next");

 console.log(wrap);
 if (viewPort) {
  const embla = EmblaCarousel(viewPort as HTMLElement, { axis: "y" });
 }
}
