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
        html +=
            `
        <div class="task">
					<div class="content">
                        ${element.text}
                        <div class = 'txt'>${new Date().toDateString()}</div> 
					</div>
					<div class="actions">
						<button class="delPlus" data-id = '${element.id}'>OK</button>
						<button class="delMinus" data-id = '${element.id}'>NG</button>
					</div>
				</div>
            
        `
    })
    div.innerHTML = html
}

export { addToDo, dellTodo, render, toDoList }
