import { toDoList } from "./function.js";

// функция добавление списка в локальное хранилище
function addStor() {
    return localStorage.setItem('list', JSON.stringify(toDoList))
}

// функция удаления из локального хранилища
function dellStor() {
    let find = toDoList.findIndex(el => el.done) // находим индекс сделанного дела
    toDoList.splice(find, 1) // удаляем элемент по индексу
    localStorage.setItem('list', JSON.stringify(toDoList)) // пересохраняем массив в хранилище 
}


export { addStor, dellStor }