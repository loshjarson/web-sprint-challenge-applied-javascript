
const Card = (article, topic) => {
  const card = document.createElement("div");
  card.className = "card";
  card.classList.add(topic);
  const headline = document.createElement("headline");
  headline.className = "headline";
  headline.textContent = article.headline;
  card.appendChild(headline);
  const author = document.createElement("div");
  author.className = "author";
  card.appendChild(author);
  const imgContainer = document.createElement("div");
  imgContainer.className = "img-container";
  author.appendChild(imgContainer);
  const authorImg = document.createElement("img");
  authorImg.src = article.authorPhoto;
  imgContainer.appendChild(authorImg);
  const authorName = document.createElement("span");
  authorName.textContent = `By ${article.authorName}`;
  author.appendChild(authorName);
  return card
}
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

import axios from "axios"

const cardAppender = (selector) => {
  const topicsArray = [];
  const cardContainer = document.querySelector(selector);
  const request = axios.get('https://lambda-times-api.herokuapp.com/articles')
      .then (response => {
        const object = response.data.articles;
        for (const property in object){
          object[property].forEach(article => {
          cardContainer.appendChild(Card(article, property));
          topicsArray.push(property)
          });
        }
        })
      }

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
export { Card, cardAppender}
