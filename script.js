import { addToDo, dellTodo, render } from './function.js'
import { div, inp, btn, divShow } from './root.js'

let count = localStorage.getItem('count')

// кнопка добавлени
btn.addEventListener('click', () => {
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
    if (e.target.classList == 'dellBtn') { //если нажата кнопка --не выполненно--
        dellTodo(id)
        render()
        localStorage.setItem('count', --count) // уменьшаем счётчик
    }
    else if (e.target.classList == 'addBtn') { // если нажата кнопка --выполненно--
        dellTodo(id)
        render()
        localStorage.setItem('count', ++count) // увеличиваем счётчик
    }
    else {
        return
    }
    localStorage.setItem('count', count)

    // усовия счётчика
    // if (count <= 3) {
    //     divShow.innerHTML = 'ты лох'
    // }
    // else if (count > 3 && count <= 6) {
    //     divShow.innerHTML = 'ты так себе'
    // }
    // else if (count > 6 && count <= 9) {
    //     divShow.innerHTML = 'уже лучше'
    // }
    // else if (count > 9) {
    //     divShow.innerHTML = 'ты крут'
    // }
})

// рендерим актуальный список
render()


