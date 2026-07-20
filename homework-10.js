import { productCards } from './cards.js'
function getCardsCount() {
  while (true) {
    const count = Number(prompt("Сколько карточек отобразить? От 1 до 5"));

    if (count >= 1 && count <= 5) {
      return count;
    }

    alert("Введите число от 1 до 5");
  }
}

const count = getCardsCount();
console.log(count);
console.log(productCards.slice(0, count))

// Выводим их
function renderCards(productCards) {
  const productCardList = document.querySelector('#catalog');
  const productCardTemplate = document.querySelector('#productCard-template');

  productCards.forEach(productCard => {
  const productCardClone = productCardTemplate.content.cloneNode(true);
  productCardClone.querySelector('.product-card__image').src = `images/${productCard.image}.png`;
  productCardClone.querySelector('.product-card__image').alt = productCard.alt;
  productCardClone.querySelector('.product-card__selection-skin').textContent = productCard.comment;
  productCardClone.querySelector('.product-card__title').textContent = productCard.title;
  productCardClone.querySelector('.product-card__desc').textContent = productCard.description;
  productCardClone.querySelector('.product-card__composition').textContent = productCard.composition;

  const composeList = productCardClone.querySelector('.product-card__composition-list');
    productCard.compositionList.forEach(ingredient => {
      const li = document.createElement('li');
      li.className = 'product-card__composition-item';
      li.textContent = ingredient;
      composeList.appendChild(li);
    });

  productCardClone.querySelector('.price-wrapper__value').innerHTML = `${productCard.valuePrice} &#8381`;

  productCardList.appendChild(productCardClone)
  })
}

renderCards(productCards.slice(0, count));


//4
const reducedProductCards = productCards.reduce((acc, product) => {
  acc.push({
      [product.title]: product.description
  })
  return acc
}, [])
console.log(reducedProductCards)