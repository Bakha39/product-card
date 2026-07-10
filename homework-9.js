import { userComments } from './comments.js'
//2.Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получили массив чисел, начиная с 5.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const filteredNumbers = numbers.filter(num => num >= 5)

console.log(filteredNumbers)

//3. Поиск в массиве (методы indexOf/lastIndexOf и includes)
// Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность.

const kitchenUtensils = ['knife', 'fork', 'spoon', 'plate', 'glass']
console.log(kitchenUtensils.includes('fork'))

//4.Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть.

function reverseArrays(array1, array2) {
    array1.reverse();
    array2.reverse()
}

reverseArrays(numbers, kitchenUtensils);
console.log(numbers, kitchenUtensils)


//7.Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"
const commentsWithComDomain = userComments.filter(post => post.email.includes('.com'))

console.log(commentsWithComDomain)

//8.Перебрать массив таким образом, чтобы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1
userComments.forEach(item => item.id <= 5 ? item.postId = 2 : item.postId = 1)

console.log(userComments)

//9.Перебрать массив, что бы объекты состояли только из айди (id) и имени (name)
const mappedByIdsAndNames = userComments.map(post => ({ id: post.id, name: post.name }))             

console.log(mappedByIdsAndNames)

//10.Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.
const mappedComments = userComments.map(post => post.body.length > 180 ? {...post, isInvalid: true} : {...post, isInvalid: false})

console.log(mappedComments)

//11.Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

const mappedCommentsByEmail = userComments.map(post => post.email)

console.log(mappedCommentsByEmail);

const reducedCommentsByEmail = userComments.reduce((acc, post) => [...acc, post.email], [])

console.log(reducedCommentsByEmail)

//12.Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

const inlineCommentsByEmail1 = mappedCommentsByEmail.toString()
const inlineCommentsByEmail2 = reducedCommentsByEmail.join()

console.log(inlineCommentsByEmail1)
console.log(inlineCommentsByEmail2)