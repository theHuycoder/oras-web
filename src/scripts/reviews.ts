import { fadeOut, fadeIn } from "./utils";

type Review = {
 author: string;
 title: string;
 comment: string;
 avatarUrl?: string;
};

type ReviewsCarouselOptions = {
 reviews: Review[];
 containerEl: HTMLElement;
};

export class ReviewsCarousel {
 private reviews: Review[];
 private containerEl: HTMLElement;
 private prevEl?: HTMLElement;
 private nextEl?: HTMLElement;
 private totalReviewEl?: HTMLElement;
 private activeReviewEl?: HTMLElement;
 private reviewAuthorEl?: HTMLElement;
 private reviewTitleEl?: HTMLElement;
 private reviewCommentEl?: HTMLElement;
 private reviewAvatarContainer?: HTMLElement;

 private _activeReviewIndex: number = 0;
 private isInitDone = false;

 constructor(options: ReviewsCarouselOptions) {
  this.reviews = options.reviews;
  this.containerEl = options.containerEl;

  this.onInit();
 }

 set activeReviewIndex(value: number) {
  if (this._activeReviewIndex === value && this.isInitDone) return;

  this._activeReviewIndex = value;

  const review = this.reviews[this._activeReviewIndex];

  if (!review) return;
  const { author, title, comment, avatarUrl } = review;

  if (this.reviewAuthorEl) {
   fadeOut(this.reviewAuthorEl, 900, (e) => {
    e.innerText = author;
   });
  }
  if (this.reviewTitleEl) {
   fadeOut(this.reviewTitleEl, 1000, (e) => {
    e.innerText = title;
   });
  }

  if (this.reviewCommentEl) {
   fadeOut(this.reviewCommentEl, 800, (e) => {
    e.innerText = comment;
   });
  }

  if (this.totalReviewEl) {
   this.totalReviewEl.textContent = this.reviews.length.toString();
  }

  if (this.activeReviewEl) {
   const actualIndex =
    this._activeReviewIndex + 1 < 10
     ? `0${this._activeReviewIndex + 1}`
     : this._activeReviewIndex + 1;
   this.activeReviewEl.textContent = actualIndex.toString();
  }

  if (this.reviewAvatarContainer) {
   let imgEl = this.reviewAvatarContainer.querySelector(
    "img"
   ) as HTMLImageElement;

   if (!imgEl) {
    imgEl = document.createElement("img");
    this.reviewAvatarContainer.appendChild(imgEl);
   }

   fadeOut(this.reviewAvatarContainer, 1100, (e) => {
    imgEl.setAttribute(
     "src",
     avatarUrl || "https://via.placeholder.com/508x391.jpg"
    );
    imgEl.setAttribute("alt", author);
    imgEl.classList.add("object-cover");
   });
  }
 }

 private onInit() {
  this.prevEl = this.containerEl.querySelector("#prev-review") as HTMLElement;
  this.nextEl = this.containerEl.querySelector("#next-review") as HTMLElement;
  this.totalReviewEl = this.containerEl.querySelector(
   "#total-review"
  ) as HTMLElement;
  this.activeReviewEl = this.containerEl.querySelector(
   "#active-review"
  ) as HTMLElement;
  this.reviewAuthorEl = this.containerEl.querySelector(
   "#review-author"
  ) as HTMLElement;
  this.reviewTitleEl = this.containerEl.querySelector(
   "#review-title"
  ) as HTMLElement;
  this.reviewCommentEl = this.containerEl.querySelector(
   "#review-comment"
  ) as HTMLElement;

  this.reviewAvatarContainer = this.containerEl.querySelector(
   "#review-avatar-container"
  ) as HTMLElement;

  if (this.prevEl) {
   this.prevEl.addEventListener("click", () => this.onChangeReview(-1));
  }

  if (this.nextEl) {
   this.nextEl.addEventListener("click", () => this.onChangeReview(1));
  }

  this.activeReviewIndex = 0;
  this.isInitDone = true;
 }

 private onChangeReview(step: number) {
  const nextReviewIndex = this._activeReviewIndex + step;

  if (nextReviewIndex < 0) {
   this.activeReviewIndex = 0;
  } else if (nextReviewIndex > this.reviews.length - 1) {
   this.activeReviewIndex = this.reviews.length - 1;
  } else this.activeReviewIndex = nextReviewIndex;
 }
}
