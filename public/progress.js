import { divShow } from "./root.js";
import { count } from "./script.js";

// функция отрисовки результата
function renderResult() {
    if (count <= 6) {
        divShow.innerHTML = `полное дно --- всего баллов ${count}`
        divShow.style.color = '#FFFFFF'
    }
    else if (count > 6 && count <= 13) {
        divShow.innerHTML = `раздолбай --- всего баллов ${count}`
        divShow.style.color = '#F5F5DC'
    }
    else if (count > 13 && count <= 20) {
        divShow.innerHTML = `бродяга --- всего баллов ${count}`
        divShow.style.color = '#FFE4E1'
    }
    else if (count > 20 && count <= 27) {
        divShow.innerHTML = `прокрастинатор --- всего баллов ${count}`
        divShow.style.color = '#DDA0DD'
    }
    else if (count > 27 && count <= 34) {
        divShow.innerHTML = `человек --- всего баллов ${count}`
        divShow.style.color = '#00FFFF'
    }
    else if (count > 34 && count <= 41) {
        divShow.innerHTML = `рабочий --- всего баллов ${count}`
        divShow.style.color = '#7FFFD4'
    }
    else if (count > 41 && count <= 48) {
        divShow.innerHTML = `трудяга --- всего баллов ${count}`
        divShow.style.color = '#00FF7F'
    }
    else if (count > 48 && count <= 55) {
        divShow.innerHTML = `руководитель --- всего баллов ${count}`
        divShow.style.color = '#87CEFA'
    }
    else if (count > 55 && count <= 62) {
        divShow.innerHTML = `менеджер --- всего баллов ${count}`
        divShow.style.color = '#FF1493'
    }
    else if (count > 62 && count <= 69) {
        divShow.innerHTML = `бизнесмен --- всего баллов ${count}`
        divShow.style.color = '#FFA07A'
    }
    else if (count > 69 && count <= 76) {
        divShow.innerHTML = `лидер --- всего баллов ${count}`
        divShow.style.color = '#FF7F50'
    }
    else if (count > 76 && count <= 83) {
        divShow.innerHTML = `гуру --- всего баллов ${count}`
        divShow.style.color = '#FF6347'
    }
    else if (count > 83 && count <= 90) {
        divShow.innerHTML = `диктатор --- всего баллов ${count}`
        divShow.style.color = '#FF4500'
    }
    else if (count > 90 && count <= 97) {
        divShow.innerHTML = `Илон Маск --- всего баллов ${count}`
        divShow.style.color = '#FF4500'
    }
    else if (count > 97) {
        divShow.innerHTML = `сочлинитель --- всего баллов ${count}`
        divShow.style.color = '#DAA520'
    }
}

export { renderResult }