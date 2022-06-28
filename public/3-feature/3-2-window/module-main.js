import { draw } from './module-draw.js'

function main () {
  draw('#canvas')
}

window.main = main // windowオブジェクト＝グローバルに関数を定義
