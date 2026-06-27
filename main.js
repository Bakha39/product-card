const toggleBtnCard = document.querySelector('#toggle-color-card')
const productCard = document.querySelector('.product-card')

toggleBtnCard.addEventListener('click', () => {
    productCard.classList.toggle('is-product-card');
    console.log('Кнопка нажата');
})

const colors = [
    'rgba(200, 100, 255, 0.3)',
    'rgba(150, 200, 255, 0.3)',
    'rgba(240, 230, 140, 0.3)',
    'rgba(100, 255, 255, 0.3)',
    'rgba(150, 150, 255, 0.3)'
]

const btnCards = document.querySelector('#change-color-cards')
const productCards = document.querySelectorAll('.product-card')

btnCards.addEventListener('click', () => {
    productCards.forEach((cards, index) => {
        cards.style.backgroundColor = colors[index]; 
    })
})


const googlePages = document.querySelectorAll('.product-card__button')
googlePages.forEach((elements) => {
elements.addEventListener('click', () => {
    alert('Внимание: вы переходите по внешней ссылке');
    window.open('https://google.com', '_blank');      
})})

const titleName = document.querySelector('.title__name')
titleName.addEventListener('mouseover', () => {
    console.log(titleName);
})

const ToggleBtnColor = document.querySelector('#toggle-color-button')
ToggleBtnColor.addEventListener('click', () => {
    ToggleBtnColor.classList.toggle('title__button--color3');
})