import { addToDo, dellTodo, render } from './function.js'
import { div, inp, btn } from './root.js'
import { renderResult } from './progress.js'

let count = localStorage.getItem('count') || 0 // счётчик

// cсчётчик сделанных и не сделанных дел
let dealPlus = localStorage.getItem('dealPlus') || 0
let dealMinus = localStorage.getItem('dealMinus') || 0

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
        localStorage.setItem('dealMinus', ++dealMinus) // прибавляем не сделанное дело
        // я не знаю как по другому поэтому так (уменьшаем на 3)
        localStorage.setItem('count', --count) // уменьшаем счётчик
        localStorage.setItem('count', --count) // уменьшаем счётчик
        localStorage.setItem('count', --count) // уменьшаем счётчик
        renderResult()
    }
    else if (e.target.classList == 'delPlus') { // если нажата кнопка --выполненно--
        dellTodo(id)
        render()
        localStorage.setItem('dealPlus', ++dealPlus) // прибавляем сделанное дело
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

export { count, dealMinus, dealPlus }

