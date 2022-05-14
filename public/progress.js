import { divShow } from "./root.js";
import { count } from "./script.js";

// функция отрисовки результата
function renderResult() {
    if (count <= 3) {
        divShow.innerHTML = `ты лошара --- всего баллов ${count}`
        divShow.style.color = 'red'
    }
    else if (count > 3 && count <= 6) {
        divShow.innerHTML = `ты так себе --- всего баллов ${count}`
        divShow.style.color = '#ef83c3'
    }
    else if (count > 6 && count <= 9) {
        divShow.innerHTML = `уже лучше --- всего баллов ${count}`
        divShow.style.color = 'yellow'
    }
    else if (count > 9) {
        divShow.innerHTML = `ты крут --- всего баллов ${count}`
        divShow.style.color = '#3beb3b'
    }
}

export { renderResult }