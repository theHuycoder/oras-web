import EmblaCarousel, {
 EmblaCarouselType,
 EmblaOptionsType,
 EmblaPluginType,
} from "embla-carousel";
import { chooseReasons } from "./mocks";
abstract class EmblaCarouselControl {
 protected viewport!: HTMLElement;
 protected container!: HTMLElement;
 public embla!: EmblaCarouselType;
 protected controls: NodeListOf<HTMLElement> | HTMLElement[];
 protected labels: HTMLElement[] | NodeListOf<HTMLElement>;

 constructor({
  viewport,
  options,
  controls,
  labels,
  plugins,
 }: {
  viewport: HTMLElement;
  options: EmblaOptionsType;
  controls: HTMLElement[] | NodeListOf<HTMLElement>;
  labels: HTMLElement[] | NodeListOf<HTMLElement>;
  plugins: EmblaPluginType[];
 }) {
  this.viewport = viewport;
  this.embla = this.initEmbla(options, plugins);
  this.controls = controls;
  this.labels = labels;

  this.initEmbla(options, plugins);
  this.onInit();
  this.onSelect();
  this.onInitControls();

  window.addEventListener("unload", () => {
   this.embla.destroy();
  });
 }

 abstract initEmbla(
  options: EmblaOptionsType,
  plugins: EmblaPluginType[]
 ): EmblaCarouselType;

 abstract onInit(): void;
 abstract onSelect(): void;
 abstract onInitControls(): void;
}

export class EmblaCarouselCircleControl extends EmblaCarouselControl {
 private progressBar: HTMLElement;
 private circlePerimeter: number;

 constructor({
  viewport,
  progressBar,
  controls = [],
  labels = [],
  options = {},
  plugins = [],
 }: {
  viewport: HTMLElement;
  progressBar: HTMLElement;
  controls: HTMLElement[] | NodeListOf<HTMLElement>;
  labels: HTMLElement[] | NodeListOf<HTMLElement>;
  options?: EmblaOptionsType;
  plugins?: EmblaPluginType[];
 }) {
  super({ viewport, options, labels, controls, plugins });

  this.progressBar = progressBar;
  this.circlePerimeter =
   2 * Math.PI * Number(this.progressBar.getAttribute("r"));

  this.onInitProgressBar();
 }

 override initEmbla(options: EmblaOptionsType, plugins: EmblaPluginType[]) {
  return EmblaCarousel(this.viewport, options, plugins);
 }

 override onInit() {
  this.embla.on("init", () => {
   this.handleCircleAnimation();
   this.showSlideLabel();
  });
 }

 override onSelect() {
  this.embla.on("select", () => {
   this.handleCircleAnimation();
   this.showSlideLabel();
  });
 }

 override onInitControls() {
  this.controls.forEach((btn) => {
   const slideIndex = btn.getAttribute("data-index");

   btn.addEventListener("click", () => {
    // this.embla.scrollTo(Number(slideIndex));
   });
  });

  this.labels.forEach((label) => {
   const slideIndex = label.getAttribute("data-index");

   label.addEventListener("click", () => {
    // this.embla.scrollTo(Number(slideIndex));
   });
  });
 }

 private onInitProgressBar() {
  this.progressBar.setAttribute("stroke-dashoffset", `${this.circlePerimeter}`);
  this.progressBar.setAttribute("stroke-dasharray", `${this.circlePerimeter}`);
  this.progressBar.setAttribute("transform-origin", "49% 50%");
  this.progressBar.setAttribute("transform", `rotate(-90)`);
 }

 private handleCircleAnimation() {
  this.controls.forEach((control) => {
   const slideIndex = Number(control.getAttribute("data-index"));
   const [activeIndex] = this.embla.slidesInView(true);

   if (slideIndex === activeIndex) {
    control.setAttribute("r", "34");
    control.setAttribute("fill", "url(#linear)");
    control.setAttribute("stroke", "url(#linear)");

    const progress =
     (1 - slideIndex / this.controls.length) * this.circlePerimeter;
    this.progressBar.setAttribute("stroke-dashoffset", `${progress}`);
   } else {
    control.setAttribute("r", "12");
    control.setAttribute("fill", "white");
    control.setAttribute("stroke", "white");
   }
  });
 }

 private showSlideLabel() {
  const [activeIndex] = this.embla.slidesInView(true);

  this.labels.forEach((label) => {
   const slideIndex = Number(label.getAttribute("data-index"));

   if (activeIndex === slideIndex) {
    label.classList.remove("opacity-0");
    label.classList.add("opacity-1");
   } else {
    label.classList.remove("opacity-1");
    label.classList.add("opacity-0");
   }
  });
 }
}

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
   subtitleEl.classList.add("m-0", "text-xl", "font-medium");

   reasonEl.classList.add("embla__slide");
   reasonEl.appendChild(titleEl);
   reasonEl.appendChild(subtitleEl);

   this.container.appendChild(reasonEl);
  });

  return this;
 }
}
