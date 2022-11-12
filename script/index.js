'use strict'

class Card {
  constructor(image, chapter, title, text, link, parentSelector) {
    this.image = image
    this.chapter = chapter
    this.title = title
    this.text = text
    this.link = link
    this.parent = document.querySelector(parentSelector)
  }

  render() {
    const element = document.createElement("div");
    element.className = "card"
    element.innerHTML = `
      <img class="card__image" src="${this.image}"></img>
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
};

new Card(
  './images/Rajgad-Fort.png',
  'KING OF FORT',
  'Rajgad Fort',
  'Rajgad is a hill fort in Pune. It was initially called Murumbdev and was later renamed to Rajgad by Shivaji Maharaj. It is located south-west to Pune City. The base village Gunjavane is around 60km from Pune. This fort was initially the capital of Shivaji Maharaj\'s Hindavi Swarajya.The capital was later shifted to Raigad.The area of the fort base is 24 square miles.',
  '#',
  '.main'
).render();