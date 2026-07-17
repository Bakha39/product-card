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
  productCardClone.querySelector('.product-card__image').src = productCard.image;
  productCardClone.querySelector('.product-card__image').alt = productCard.alt;
  productCardClone.querySelector('.product-card__selection-skin').textContent = productCard.comment;
  productCardClone.querySelector('.product-card__title').textContent = productCard.title;
  productCardClone.querySelector('.product-card__desc').textContent = productCard.description;
  productCardClone.querySelector('.product-card__composition').textContent = productCard.composition;

  const compositionItems = productCardClone.querySelectorAll(".product-card__composition-item");

  compositionItems.forEach((item, index) => {
      item.textContent = productCard.compositionList[index];
  });

  productCardClone.querySelector('.price-wrapper__text').textContent = productCard.textPrice;
  productCardClone.querySelector('.price-wrapper__value').innerHTML = `${productCard.valuePrice} &#8381`;

  productCardList.appendChild(productCardClone)
  })
}


// Получаем количество карточек

console.log(renderCards(productCards.slice(0, count)));


//4
const reducedProductCards = productCards.reduce((acc, product) => {
  acc.push({
      [product.title]: product.description
  })
  return acc
}, [])
console.log(reducedProductCards)