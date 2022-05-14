import { addToDo, dellTodo, render, renderResult } from './function.js'
import { div, inp, btn } from './root.js'

let count = localStorage.getItem('count') || 0 // счётчик

// кнопка добавлени
btn.addEventListener('click', (e) => {
    e.preventDefault() // что бы страница не дёргалась
    let txt = inp.value
    if (inp.value) {
        addToDo(txt)
        render()
        inp.value = ''
    }
})

//слушаем весь див
div.addEventListener('click', (e) => {
    const id = e.target.dataset.id
    if (e.target.classList == 'delMinus') { //если нажата кнопка --не выполненно--
        dellTodo(id)
        render()
        localStorage.setItem('count', --count) // уменьшаем счётчик
        renderResult()
    }
    else if (e.target.classList == 'delPlus') { // если нажата кнопка --выполненно--
        dellTodo(id)
        render()
        localStorage.setItem('count', ++count) // увеличиваем счётчик
        renderResult()
    }
    else {
        return
    }
})

// рендерим актуальный список
render()
renderResult()

export { count }

