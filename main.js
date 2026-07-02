const toggleColorCardBtn = document.querySelector('#toggle-color-card')
const productCard = document.querySelector('.product-card')

toggleColorCardBtn.addEventListener('click', () => {
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

const changeColorsCardsBtns = document.querySelector('#change-colors-cards')
const productCards = document.querySelectorAll('.product-card')

changeColorsCardsBtns.addEventListener('click', () => {
    productCards.forEach((cards, index) => {
        cards.style.backgroundColor = colors[index]; 
    })
})


const openGooglePages = document.querySelectorAll('.product-card__button')
openGooglePages.forEach((elements) => {
elements.addEventListener('click', () => {
    alert('Внимание: вы переходите по внешней ссылке');
    window.open('https://google.com', '_blank');      
})})

const titleName = document.querySelector('.title__name')
titleName.addEventListener('mouseover', () => {
    console.log(titleName);
})

const toggleColorBtn = document.querySelector('#toggle-color-button')
toggleColorBtn.addEventListener('click', () => {
    toggleColorBtn.classList.toggle('title__button--color3');
})

