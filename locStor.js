import { toDoList } from "./function.js";

// функция добавление списка в локальное хранилище
function addStor() {
    return localStorage.setItem('list', JSON.stringify(toDoList))
}

export { addStor }