"use strict";

class Card {
  constructor(image, chapter, title, text, link, parentSelector) {
    this.image = image;
    this.chapter = chapter;
    this.title = title;
    this.text = text;
    this.link = link;
    this.parent = document.querySelector(parentSelector);
  }

  render() {
    const element = document.createElement("div");
    element.className = "card";
    element.innerHTML = `
      <div class="card__image">
        <img src="${this.image}"></img>
      </div>
      <div class="card__description">
        <div class="chapter">
          <span class="chapter__span"></span>
          <p class="chapter__name">${this.chapter}</p>
        </div>
        <h2 class="card__title">${this.title}</h2>
        <p class="card__text">${this.text}</p>
        <a href="${this.link}" class="card__link">read more &#8594;</a>
      </div>
    `;
    this.parent.append(element);
  }
}

new Card(
  "./images/Rajgad-Fort.png",
  "KING OF FORT",
  "Rajgad Fort",
  "Rajgad is a hill fort in Pune. It was initially called Murumbdev and was later renamed to Rajgad by Shivaji Maharaj. It is located south-west to Pune City. The base village Gunjavane is around 60km from Pune. This fort was initially the capital of Shivaji Maharaj's Hindavi Swarajya.The capital was later shifted to Raigad.The area of the fort base is 24 square miles.",
  "#",
  ".cards-top"
).render();

class Slide {
  constructor(image, chapter, title, text, link, parent) {
    this.image = image;
    this.chapter = chapter;
    this.title = title;
    this.text = text;
    this.link = link;
    this.parent = document.querySelector(parent);
  }

  render() {
    const element = document.createElement("div");
    element.classList = "slide";
    element.innerHTML = `
    <img class="slide__image" src="${this.image}"></img>
      <div class="slide__description">
        <div class="chapter chapter_place_slide">
          <span class="chapter__span"></span>
          <p class="chapter__name">${this.chapter}</p>
          <span class="chapter__span"></span>
        </div>
        <h2 class="slide__title">${this.title}</h2>
        <p class="slide__text">${this.text}</p>
        <a href="${this.link}" class="slide__link">read more &#8594;</a>
      </div>
    `;
    this.parent.append(element);
  }
}

new Slide(
  "./images/Shreemant-Dagdusheth.png",
  "Bromo",
  "Shreemant Dagdusheth Halwai Ganpati Mandir",
  "The Dagadusheth Halwai Ganapati temple in Pune is dedicated to the Hindu god Ganesh. The temple is visited by over hundred thousand pilgrims every year. Devotees of the temple include celebrities and chief ministers of Maharashtra who visit during the annual ten-day Ganeshotsav festival.",
  "#",
  ".slider"
).render();

new Slide(
  "./images/Shirdi.png",
  "Bromo",
  "Shirdi, Maharashtra",
  "Devoted to Saint Sai Baba, “Shirdi Temple” is the third richest temples in India. The whole religious town Shirdi is identified through Sai Baba. “Sai Baba”, the saint who is known and admired for his miracles and teaching give importance to “Shraddha” means trust and “Saburi” means tender feeling.",
  "#",
  ".slider"
).render();

new Card(
  "./images/Our-Culture.png",
  "f.c. road pune",
  "Our Culture Here Is Very Friendly To People",
  "Pune is a sprawling city in the western Indian state of Maharashtra. It was once the base of the Peshwas (prime ministers) of the Maratha Empire, which lasted from 1674 to 1818.",
  "#",
  ".cards-bottom"
).render();

const slides = document.querySelectorAll(".slide"),
  next = document.querySelector(".slider-wrapper__button_position_right"),
  prev = document.querySelector(".slider-wrapper__button_position_left"),
  slidesWrapper = document.querySelector(".slider-wrapper"),
  slidesInner = document.querySelector(".slider"),
  width = window.getComputedStyle(slidesWrapper).width;

let offset = 0;

slidesInner.style.width = 100 * slides.length + "%";

slides.forEach((slide) => {
  slide.style.width = width;
});

next.addEventListener("click", () => {
  if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
    offset = 0;
  } else {
    offset += +width.slice(0, width.length - 2);
  }

  slidesInner.style.transform = `translateX(-${offset}px)`;
});

prev.addEventListener("click", () => {
  if (offset == 0) {
    offset = +width.slice(0, width.length - 2) * (slides.length - 1);
  } else {
    offset -= +width.slice(0, width.length - 2);
  }

  slidesInner.style.transform = `translateX(-${offset}px)`;
});
