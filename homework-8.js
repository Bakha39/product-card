//3. Создание объекта из большого числа пар свойство-значение
const userDate = {
    name: "Бахруз",
    lastName: "Рамазанов",
    email: "rbaxruz05@gmail.com",
    job: "frondend developer",
    age: 31,
    country: "Россия",
    city: "Калининград",
    status: "single"
}

console.log(userDate)

//4. Создание нового объекта с парами свойство-значение и добавление одного свойства отдельной строкой со ссылкой на объект из предыдущего задания.
const carDate = {
    brand: "Mercedes",
    model: "G-class",
    yearOfProduction: 2026,
    color: "black",
    typeOfGearbox: "auto",
}

carDate.owner = userDate;
console.log(carDate)

//5. Написать функцию которая аргументом будет принимать объект, описанный в пункте №4. Она проверяет, есть ли в объекте свойство "максимальная скорость", если нет - добавляет его и задает значение, если есть - прекращает выполнение (ничего не делает)
function checkMaxSpeed(speed) {
    if (carDate["maximum speed"]) {
        return;
    } else {
        carDate["maximum speed"] = 500;
    }
}

checkMaxSpeed(carDate);
console.log(carDate)

//6.Написать функцию, которая получает первым аргументом — объект, а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение.
const user = {
    name: 'Бахруз', 
    age: 31, 
    city: 'Калининград'
}

function getValueOfObject(obj, propName) {
    return obj[propName];
}

console.log(getValueOfObject(user, 'name'))


//7. Создать массив с названием продуктов
const products = ['яблоко', 'арбуз', 'виноград']
console.log(products)

//8. Применение метода push к массиву
const books = [
    {title: 'Catch me if you can', author: 'Frank W. Abagnale', dateOfPublication: 1980, coverColor: 'gray'},
    {title: 'Atomic Habits', author: 'James Clear', dateOfPublication: 2018, coverColor: 'yellow'},
    {title: 'Миссия выполнима. Технология счастливой жизни', author: 'Маргулан Калиевич Сейсембай', dateOfPublication: 2023, coverColor: 'серый'}
]

books.push({
    title: 'Головы профессора Уайта', 
    author: 'Брэнди Скиллаче', 
    dateOfPublication: 2022, 
    coverColor: 'серый'
})

console.log(books)

//9.Создать еще один массив, относящийся к определенной сущности. С помощью известного нам метода массива или оператора, объединить эти два массива в один
const definedGenreBooks = [
    {title: 'Atomic Habits', author: 'James Clear', dateOfPublication: 2018, coverColor: 'yellow', genre: 'personal development'},
    {title: 'Миссия выполнима. Технология счастливой жизни', author: 'Маргулан Калиевич Сейсембай', dateOfPublication: 2023, coverColor: 'серый', genre: 'personal development'}
]

const allBooks = [...books, ...definedGenreBooks]
console.log(allBooks)

//10. Использовать метод map для создания нового масива, вызвав функцию для каждой сущности (элемента) исходного массива из задания №9, добавить свойство isRare и использовать логику
const updatedBooks = definedGenreBooks.map(function(book) {
    if (book.genre === 'personal development') {
        return {...book, isRare: true}
    } else {
        return {...book, isRare: false}
    }
})

console.log(updatedBooks)




