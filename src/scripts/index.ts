import gsap, { Power4 } from "gsap";
import generateInspireNumbers from "./inspireNumbers";

import { SlidesBuilder } from "./embla";
import { reviews } from "./mocks";
import { ReviewsCarousel } from "./reviews";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Anime from "animejs";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
 const h1p1Content = "Oras_Giải pháp toàn diện";

 h1p1Content
  .split(/(\s+)/)
  .map((letter) => (letter === " " ? "\u00A0" : letter))
  .forEach((letter, index) => {
   const span = document.createElement("span");
   span.classList.add("letter", "inline-block");
   span.textContent = letter;
   span.style.setProperty("--index", index.toString());
   document.querySelector("#heading-p-1")?.appendChild(span);
  });

 const h2p2Content = "Đột phá";

 h2p2Content
  .split(/(\s+)/)
  .map((letter) => (letter === " " ? "\u00A0" : letter))
  .forEach((letter, index) => {
   const span = document.createElement("span");
   span.classList.add("letter", "inline-block", "rotate-90");
   span.textContent = letter;
   span.style.setProperty("--index", index.toString());
   document.querySelector("#heading-p-2")?.appendChild(span);
  });

 Anime.timeline({ loop: false })
  .add({
   targets: ".anime-sunny .letter",
   scale: [4, 1],
   opacity: [0, 1],
   translateZ: 0,
   easing: "easeOutExpo",
   duration: 950,
   delay: (el, i) => 70 * i,
  })
  .add({
   targets: "#heading-p-3",
   opacity: [0, 1],
   translateX: [50, 0],
   easing: "easeOutExpo",
   duration: 950,
   delay: 0,
  })
  .add({
   targets: "#heading-p-4",
   opacity: [0, 1],
   translateY: [50, 0],
   easing: "easeOutExpo",
   duration: 950,
   delay: 0,
  });

 generateInspireNumbers();

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

 const nhanDien = document.querySelector("#nhan-dien") as HTMLElement;
 const thuongHieu = document.querySelector("#thuong-hieu") as HTMLElement;
 const dichVuCua1 = document.querySelector("#dich-vu-cua-1") as HTMLElement;
 const chungToi1 = document.querySelector("#chung-toi-1") as HTMLElement;
 const chupAnhSanPham = document.querySelector(
  "#chup-anh-san-pham"
 ) as HTMLElement;
 const dichVuCua2 = document.querySelector("#dich-vu-cua-2") as HTMLElement;
 const chungToi2 = document.querySelector("#chung-toi-2") as HTMLElement;
 const choThue = document.querySelector("#cho-thue") as HTMLElement;
 const nhanSu = document.querySelector("#nhan-su") as HTMLElement;
 const dichVuCua3 = document.querySelector("#dich-vu-cua-3") as HTMLElement;
 const chungToi3 = document.querySelector("#chung-toi-3") as HTMLElement;
 const setup = document.querySelector("#set-up") as HTMLElement;
 const livestream = document.querySelector("#livestream") as HTMLElement;
 const lineTvc = document.querySelector("#line-tvc") as HTMLElement;
 const tvc = document.querySelector("#tvc") as HTMLElement;

 let scrollTween = gsap.to("#services", {
  xPercent: -300,
  ease: "none",
  duration: 30,
  scrollTrigger: {
   trigger: "#services",
   pin: true,
   scrub: 1,
   start: "top top",
   end: "bottom -150%",
  },
 });

 gsap.set("#text-services path, #text-services line", { opacity: 0 });
 gsap.set("#nhan-dien", {
  transform: `translateX(-${nhanDien.getBoundingClientRect().width + 25}px`,
 });
 gsap.set("#thuong-hieu", {
  transform: `translateY(${thuongHieu.getBoundingClientRect().height + 50}px)`,
 });
 gsap.set("#dich-vu-cua-1", {
  transform: `translateY(${dichVuCua1.getBoundingClientRect().height + 50}px)`,
 });

 gsap.set("#chung-toi-1", {
  transform: `translateX(${chungToi1.getBoundingClientRect().width}px)`,
 });

 gsap.set("#chup-anh-san-pham", {
  transform: `translateY(-${chupAnhSanPham.getBoundingClientRect().height}px)`,
 });

 gsap.set("#dich-vu-cua-2", {
  transform: `translateX(-${dichVuCua2.getBoundingClientRect().width}px)`,
 });

 gsap.set("#chung-toi-2", {
  transform: `translateY(${chungToi2.getBoundingClientRect().height}px)`,
 });

 gsap.set("#cho-thue", {
  transform: `translateY(${choThue.getBoundingClientRect().height}px)`,
 });

 gsap.set("#nhan-su", {
  transform: `translateX(${nhanSu.getBoundingClientRect().width}px)`,
 });

 gsap.set("#dich-vu-cua-3", {
  transform: `translateX(-${dichVuCua3.getBoundingClientRect().width}px)`,
 });

 gsap.set("#chung-toi-3", {
  transform: `translateY(-${chungToi3.getBoundingClientRect().height}px)`,
 });

 gsap.set("#set-up", {
  transform: `translateY(-${setup.getBoundingClientRect().height}px)`,
 });

 gsap.set("#livestream", {
  transform: `translateX(-${livestream.getBoundingClientRect().width}px)`,
 });

 gsap.set("#tvc", {
  transform: `translateY(${tvc.getBoundingClientRect().height}px)`,
 });

 gsap.set("#line-tvc", {
  transform: `translateY(-${lineTvc.getBoundingClientRect().height}px)`,
 });

 gsap.set("#service-1-img img", {
  opacity: 0,
  width: 0,
  height: "280px",
  scale: 4,
  transformOrigin: "100% 50%",
 });

 gsap.set("#service-2-img img", {
  opacity: 0,
  width: 0,
  height: "276px",
  scale: 4,
  transformOrigin: "100% 50%",
 });

 gsap.set("#service-3-img img", {
  opacity: 0,
  width: 0,
  height: "345px",
  scale: 4,
  transformOrigin: "100% 50%",
 });

 gsap.set("#service-4-img img", {
  opacity: 0,
  width: 0,
  height: "394px",
  scale: 4,
  transformOrigin: "100% 50%",
 });

 gsap.set("#service-5-img img", {
  opacity: 0,
  width: 0,
  height: "276px",
  scale: 4,
  transformOrigin: "100% 50%",
 });

 gsap.set(
  "#service-1-title, #service-2-title, #service-3-title, #service-4-title, #service-5-title",
  {
   opacity: 0,
  }
 );

 (async function () {
  const timeline = gsap.timeline();

  timeline.to(
   "#nhan-dien",
   {
    opacity: 1,
    transform: "translateX(0)",
    ease: Power4.easeInOut as unknown as gsap.EaseFunction,
    duration: 1,
    scrollTrigger: {
     containerAnimation: scrollTween,
     trigger: "#nhan-dien",
     start: "top center",
     end: "bottom 20%",
     scrub: true,
    },
   },
   0
  );

  timeline.to(
   "#thuong-hieu",
   {
    opacity: 1,
    transform: "translateY(0)",
    ease: Power4.easeInOut as unknown as gsap.EaseFunction,
    duration: 1,
    scrollTrigger: {
     containerAnimation: scrollTween,
     trigger: "#thuong-hieu",
     start: "top center",
     end: "bottom 30%",
     scrub: true,
    },
   },
   1
  );

  timeline.to(
   "#dich-vu-cua-1",
   {
    opacity: 1,
    transform: "translateY(0)",
    ease: Power4.easeInOut as unknown as gsap.EaseFunction,
    duration: 20,
    scrollTrigger: {
     containerAnimation: scrollTween,
     trigger: "#dich-vu-cua-1",
     start: "top center",
     end: "bottom 20%",
     scrub: true,
    },
   },
   2
  );

  timeline.to(
   "#chung-toi-1",
   {
    opacity: 1,
    transform: "translateX(0)",
    ease: Power4.easeInOut as unknown as gsap.EaseFunction,
    duration: 20,
    scrollTrigger: {
     containerAnimation: scrollTween,
     trigger: "#chung-toi-1",
     start: "top 40%",
     end: "bottom 20%",
     scrub: true,
    },
   },
   3
  );

  timeline.to(
   "#chup-anh-san-pham",
   {
    opacity: 1,
    transform: "translateY(0)",
    ease: Power4.easeInOut as unknown as gsap.EaseFunction,
    duration: 20,
    scrollTrigger: {
     containerAnimation: scrollTween,
     trigger: "#chup-anh-san-pham",
     start: "top 25%",
     end: "bottom 100%",
     scrub: 4,
    },
   },
   4
  );

  timeline.to(
   "#dich-vu-cua-2",
   {
    opacity: 1,
    transform: "translateX(0)",
    ease: Power4.easeInOut as unknown as gsap.EaseFunction,
    duration: 1,
    scrollTrigger: {
     containerAnimation: scrollTween,
     trigger: "#dich-vu-cua-2",
     start: "top center",
     end: "bottom 20%",
     scrub: true,
    },
   },
   5
  );

  timeline.to(
   "#chung-toi-2",
   {
    opacity: 1,
    transform: "translateY(0)",
    ease: Power4.easeInOut as unknown as gsap.EaseFunction,
    duration: 1,
    scrollTrigger: {
     containerAnimation: scrollTween,
     trigger: "#chung-toi-2",
     start: "top center",
     end: "bottom 40%",
     scrub: 6,
    },
   },
   6
  );

  timeline.to(
   "#cho-thue",
   {
    opacity: 1,
    transform: "translateY(0)",
    ease: Power4.easeInOut as unknown as gsap.EaseFunction,
    duration: 1,
    scrollTrigger: {
     containerAnimation: scrollTween,
     trigger: "#cho-thue",
     start: "top center",
     end: "bottom 40%",
     scrub: true,
    },
   },
   7
  );

  timeline.to(
   "#nhan-su",
   {
    opacity: 1,
    transform: "translateX(0)",
    ease: Power4.easeInOut as unknown as gsap.EaseFunction,
    duration: 1,
    scrollTrigger: {
     containerAnimation: scrollTween,
     trigger: "#nhan-su",
     start: "top center",
     end: "bottom 30%",
     scrub: true,
    },
   },
   8
  );

  timeline.to(
   "#dich-vu-cua-3",
   {
    opacity: 1,
    transform: "translateX(0)",
    ease: Power4.easeInOut as unknown as gsap.EaseFunction,
    duration: 1,
    scrollTrigger: {
     containerAnimation: scrollTween,
     trigger: "#dich-vu-cua-3",
     start: "top 50%",
     end: "bottom 0%",
     scrub: true,
    },
   },
   9
  );

  timeline.to(
   "#chung-toi-3",
   {
    opacity: 1,
    transform: "translateY(0)",
    ease: Power4.easeInOut as unknown as gsap.EaseFunction,
    duration: 1,
    scrollTrigger: {
     containerAnimation: scrollTween,
     trigger: "#chung-toi-3",
     start: "top center",
     end: "bottom 40%",
     scrub: true,
    },
   },
   10
  );

  timeline.to(
   "#set-up",
   {
    opacity: 1,
    transform: "translateY(0)",
    ease: Power4.easeInOut as unknown as gsap.EaseFunction,
    duration: 1,
    scrollTrigger: {
     containerAnimation: scrollTween,
     trigger: "#set-up",
     start: "top center",
     end: "bottom 40%",
     scrub: true,
    },
   },
   11
  );

  timeline.to(
   "#livestream",
   {
    opacity: 1,
    transform: "translateX(0)",
    ease: Power4.easeInOut as unknown as gsap.EaseFunction,
    duration: 1,
    scrollTrigger: {
     containerAnimation: scrollTween,
     trigger: "#livestream",
     start: "top center",
     end: "bottom 40%",
     scrub: true,
    },
   },
   12
  );

  timeline.to(
   "#tvc",
   {
    opacity: 1,
    transform: "translateY(0)",
    ease: Power4.easeInOut as unknown as gsap.EaseFunction,
    duration: 1,
    scrollTrigger: {
     containerAnimation: scrollTween,
     trigger: "#tvc",
     start: "top center",
     end: "bottom 50%",
     scrub: true,
    },
   },
   13
  );

  timeline.to(
   "#line-tvc",
   {
    opacity: 1,
    transform: "translateY(0)",
    ease: Power4.easeInOut as unknown as gsap.EaseFunction,
    duration: 1,
    scrollTrigger: {
     containerAnimation: scrollTween,
     trigger: "#line-tvc",
     start: "top center",
     end: "bottom 50%",
     scrub: true,
    },
   },
   13
  );

  timeline.to(
   "#service-1-img img",
   {
    width: "716px",
    opacity: 1,
    scale: 1,
    ease: Power4.easeInOut as unknown as gsap.EaseFunction,
    duration: 1,
    scrollTrigger: {
     containerAnimation: scrollTween,
     trigger: "#service-1-img img",
     start: "top center",
     scrub: true,
    },
   },
   14
  );

  timeline.to(
   "#service-1-title",
   {
    opacity: 1,
    duration: 0.2,
    scrollTrigger: {
     containerAnimation: scrollTween,
     trigger: "#service-1-title",
     start: "top center",
     scrub: true,
    },
   },
   15
  );

  timeline.to(
   "#service-2-img img",
   {
    width: "538px",
    opacity: 1,
    scale: 1,
    ease: Power4.easeInOut as unknown as gsap.EaseFunction,
    duration: 1,
    scrollTrigger: {
     containerAnimation: scrollTween,
     trigger: "#service-2-img img",
     start: "top center",
     scrub: true,
    },
   },
   16
  );

  timeline.to(
   "#service-2-title",
   {
    opacity: 1,
    duration: 0.2,
    scrollTrigger: {
     containerAnimation: scrollTween,
     trigger: "#service-2-title",
     start: "top center",
     scrub: true,
    },
   },
   17
  );

  timeline.to(
   "#service-3-title",
   {
    opacity: 1,
    duration: 0.2,
    scrollTrigger: {
     containerAnimation: scrollTween,
     trigger: "#service-3-title",
     start: "top center",
     scrub: true,
    },
   },
   18
  );

  timeline.to(
   "#service-3-img img",
   {
    width: "421px",
    opacity: 1,
    scale: 1,
    ease: Power4.easeInOut as unknown as gsap.EaseFunction,
    duration: 1,
    scrollTrigger: {
     containerAnimation: scrollTween,
     trigger: "#service-3-img img",
     start: "top center",
     scrub: true,
    },
   },
   19
  );

  timeline.to(
   "#service-4-img img",
   {
    width: "594px",
    opacity: 1,
    scale: 1,
    ease: Power4.easeInOut as unknown as gsap.EaseFunction,
    duration: 1,
    scrollTrigger: {
     containerAnimation: scrollTween,
     trigger: "#service-4-img img",
     start: "top center",
     scrub: true,
    },
   },
   20
  );

  timeline.to(
   "#service-4-title",
   {
    opacity: 1,
    duration: 0.2,
    scrollTrigger: {
     containerAnimation: scrollTween,
     trigger: "#service-3-title",
     start: "top center",
     scrub: true,
    },
   },
   21
  );

  timeline.to(
   "#service-5-img img",
   {
    width: "491px",
    opacity: 1,
    scale: 1,
    ease: Power4.easeInOut as unknown as gsap.EaseFunction,
    duration: 1,
    scrollTrigger: {
     containerAnimation: scrollTween,
     trigger: "#service-5-img img",
     start: "top center",
     scrub: true,
    },
   },
   22
  );

  timeline.to(
   "#service-5-title",
   {
    opacity: 1,
    duration: 0.2,
    scrollTrigger: {
     containerAnimation: scrollTween,
     trigger: "#service-5-title",
     start: "top center",
     scrub: true,
    },
   },
   23
  );
 })();

 const slides = document.querySelectorAll(".embla__slide") || [];

 const duration = Array.from(slides).reduce((acc, slide) => {
  const height = slide.clientHeight;
  return acc + height;
 }, 0);

 const reviewsEl = document.querySelector("#reviews") as HTMLElement;

 const circlePerimeter =
  2 * Math.PI * Number(reasonsSlidesProgressBar.getAttribute("r"));

 reasonsSlidesProgressBar.setAttribute(
  "stroke-dashoffset",
  `${circlePerimeter}`
 );
 reasonsSlidesProgressBar.setAttribute(
  "stroke-dasharray",
  `${circlePerimeter}`
 );
 reasonsSlidesProgressBar.setAttribute(
  "style",
  `transform: rotate(-90deg) translate(0px, -12px); transform-origin: 42% 41%;`
 );

 ScrollTrigger.create({
  trigger: "#choose-reason",
  pin: "#choose-reason-circle",
  pinSpacing: false,
  start: "top top",
  end: "bottom bottom",
  onUpdate: (self) => {
   console.log(self);

   const { progress } = self;
   let slideIndex = Math.floor(progress * slides.length);

   if (slideIndex >= slides.length - 1) {
    slideIndex = slides.length - 1;
   }

   slides.forEach((slide, idx) => {
    slide.classList.remove("active");
    if (idx === slideIndex) {
     slide.classList.add("active");
    }
   });

   reasonsSlidesControls.forEach((control) => {
    const index = Number(control.getAttribute("data-index"));

    if (index === slideIndex) {
     control.setAttribute("r", "34");
     control.setAttribute("fill", "url(#linear)");
     control.setAttribute("stroke", "url(#linear)");

     const progress =
      (1 - index / reasonsSlidesControls.length) * circlePerimeter;
     reasonsSlidesProgressBar.setAttribute("stroke-dashoffset", `${progress}`);
    } else {
     control.setAttribute("r", "12");
     control.setAttribute("fill", "white");
     control.setAttribute("stroke", "white");
    }
   });

   reasonsSlidesLabels.forEach((label) => {
    const index = Number(label.getAttribute("data-index"));

    if (index === slideIndex) {
     label.classList.remove("opacity-0");
     label.classList.add("opacity-1");
    } else {
     label.classList.remove("opacity-1");
     label.classList.add("opacity-0");
    }
   });
  },
 });

 new ReviewsCarousel({ containerEl: reviewsEl, reviews });
});
