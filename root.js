// основной div где будут отображатся дела
let div = document.createElement('div')
document.body.appendChild(div)

// элементы ввода
const inp = document.createElement('input')
const btn = document.createElement('button')
btn.innerText = "ADD"
document.body.appendChild(inp)
document.body.appendChild(btn)

// див для сётчика
let divShow = document.createElement('div')
divShow.classList.add('show')
btn.insertAdjacentElement('afterend', divShow)

export { div, inp, btn, divShow }