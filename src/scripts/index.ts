import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import generateInspireNumbers from "./inspireNumbers";
import initEmbla from "./embla";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
 generateInspireNumbers();
 initEmbla();
});
