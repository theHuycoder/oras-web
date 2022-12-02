import gsap, { TimelineLite, TweenLite } from "gsap";
import generateInspireNumbers from "./inspireNumbers";
import { SlidesBuilder, EmblaCarouselCircleControl } from "./embla";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenLite, TimelineLite);

window.addEventListener("load", () => {
 generateInspireNumbers();

 const reasonSlidesViewport = document.querySelector(
  ".embla__viewport"
 ) as HTMLElement;
 const reasonSlidesContainer = document.querySelector(
  ".embla__container"
 ) as HTMLElement;

 const reasonsSlidesProgressBar = document.querySelector(
  "#circle-control #bar"
 ) as HTMLElement;

 const reasonsSlidesControls = document.querySelectorAll(
  "#circle-control .point"
 ) as NodeListOf<HTMLElement>;

 const reasonsSlidesLabels = document.querySelectorAll(
  "#circle-control .label"
 ) as NodeListOf<HTMLElement>;

 const slidesBuilder = new SlidesBuilder(reasonSlidesContainer);
 slidesBuilder.build();

 const { embla } = new EmblaCarouselCircleControl({
  viewport: reasonSlidesViewport,
  progressBar: reasonsSlidesProgressBar,
  controls: reasonsSlidesControls,
  labels: reasonsSlidesLabels,
  options: {
   axis: "y",
   loop: false,
   draggable: false,
   skipSnaps: false,
   speed: 2.5,
  },
  plugins: [],
 });

 const slides = document.querySelectorAll(".embla__slide") || [];

 const duration = Array.from(slides).reduce((acc, slide) => {
  const height = slide.clientHeight;
  return acc + height;
 }, 1);

 const controller = new ScrollMagic.Controller();

 const textServices = document.querySelector("#text-services") as HTMLElement;

 const tween = gsap
  .timeline()
  .to("#services", { x: -textServices.scrollWidth + 800 }, 0);
 new ScrollMagic.Scene({
  triggerElement: "#services",
  triggerHook: "onLeave",
  duration: textServices.scrollWidth - 800,
 })
  .setPin("#services")
  .setTween(tween)
  .addTo(controller);

 new ScrollMagic.Scene({
  triggerElement: "#choose-reason",
  triggerHook: "onLeave",
  duration,
 })
  .setPin("#choose-reason")
  .addTo(controller)
  .on("progress", (e) => {
   const { currentTarget } = e || {};

   const progress = currentTarget.progress();

   const slideIndex = Math.round(progress * (slides.length - 1));
   embla.scrollTo(slideIndex);
  });
});
