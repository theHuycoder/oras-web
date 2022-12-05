import dayjs from "dayjs";

interface New {
 title: string;
 tag?: string;
 tagColor?: string;
 createdAt?: string;
 link?: string;
 imgUrl?: string;
}

export class NewsCardsBuilder {
 private container: HTMLElement;
 private news: New[];

 constructor(container: HTMLElement, news: New[]) {
  this.container = container;
  this.news = news;
 }

 build() {
  this.news.forEach((news) => {
   const card = document.createElement("div");
   const cardImg = document.createElement("div");
   const cardContent = document.createElement("div");
   const img = document.createElement("img");
   const tag = document.createElement("span");
   const title = document.createElement("p");
   const dateTimeContainer = document.createElement("div");
   const time = document.createElement("p");
   const date = document.createElement("p");

   card.classList.add("bg-white");
   cardImg.classList.add("fit-content");

   img.classList.add("w-[400px]", "h-[244px]", "object-cover");
   img.setAttribute("src", news.imgUrl || "");

   cardImg.appendChild(img);

   tag.classList.add(
    `bg-${news.tagColor}`,
    "text-black",
    "p-2",
    "text-xs",
    "font-bold",
    "mb-2",
    "inline-block"
   );
   tag.innerText = news.tag || "";
   tag.style.backgroundColor = news.tagColor || "";

   title.classList.add("text-2xl", "font-bold", "text-black", "mb-5");
   title.textContent = news.title;

   time.classList.add("text-sm", "font-bold", "text-gray-400");
   date.classList.add("text-sm", "font-bold", "text-gray-400");

   time.innerHTML = `
	<span>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 8V12L15 15M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
	</span>
	<span>
		${dayjs(news.createdAt).format("h:mm A")}
	</span>
	`;

   time.classList.add("flex", "items-center", "gap-2.5");
   date.classList.add("flex", "items-center", "gap-2.5");

   dateTimeContainer.append(time, date);
   dateTimeContainer.classList.add("flex", "items-center", "gap-4");

   date.innerHTML = `
		<span>
			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M6 5V1M14 5V1M5 9H15M3 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H3C2.46957 3 1.96086 3.21071 1.58579 3.58579C1.21071 3.96086 1 4.46957 1 5V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19Z" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</span>
		<span>
		${dayjs(news.createdAt).format("DD/MM/YYYY")}
		</span>
	`;

   cardContent.append(tag, title, dateTimeContainer);
   cardContent.classList.add("px-6", "py-8");

   card.append(cardImg, cardContent);
   card.classList.add("flex-shrink-0", "max-w-[400px]");

   this.container.append(card);
  });
 }
}
