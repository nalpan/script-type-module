import { draw } from './module-draw.js'

function main () {
  draw('#canvas')
}

window.addEventListener('load', main) // loadイベントに関数を紐付け
