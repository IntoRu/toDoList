import { div } from './root.js'
import { addStor, dellStor } from './locStor.js'

let toDoList = JSON.parse(localStorage.getItem('list')) || [] // массив где будут храниться дела

// функция добавления дела
function addToDo(text) {
    let todo = {
        text,
        done: false,
        id: `${Math.random()}`
    }
    toDoList.push(todo)
    addStor() //вызываем функцию добавления списка в локальное хранилище
}

// функция удаления дела через изменения булевого значения
function dellTodo(id) {
    toDoList.forEach(el => {
        if (el.id === id) {
            el.done = true
            // удаляем из локалки
            if (el.done) { // если дело выполненно
                dellStor() // удаляем его из хранилища
            }

        }
    })
}

// функция отрисовки дел
function render() {
    let html = ``
    toDoList.forEach(element => {
        if (element.done) { // если дело выполненно
            return// то не отрисовываем
        }
        html += `<div>${element.text}
        <button class = 'addBtn' data-id = '${element.id}'>Complited</button>
        <button class = 'dellBtn'  data-id = '${element.id}'>No Complited</button>
        </div>`
    })
    div.innerHTML = html
}

export { addToDo, dellTodo, render, toDoList }