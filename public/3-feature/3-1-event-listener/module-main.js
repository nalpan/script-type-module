import { draw } from './module-draw.js'

function main () {
  draw('#canvas')
}

const element = document.querySelector('button')
element.addEventListener('click', main) // イベントに関数を紐付け