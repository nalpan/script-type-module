`window` オブジェクトを使えば `グローバルscript` を明示的に指定できる


```html
<script src="./global-draw.js"></script> <!-- グローバル -->
<script src="./module-draw.js" type="module"></script> <!-- モジュール -->
<script src="./module-main.js" type="module"></script> <!-- モジュール -->
```


global-draw.js
```js
/**
 * 指定されたセレクタに正方形を描く
 * @param {string} selector
 */
function draw (selector) {
  const canvas = document.querySelector(selector)
  const ctx = canvas.getContext('2d')

  ctx.beginPath()
  ctx.strokeRect(75, 75, 50, 50)
}
```


module-draw.js
```js
/**
 * 指定されたセレクタに円を描く
 * @param {string} selector
 */
export function draw (selector) {
  const canvas = document.querySelector(selector)
  const ctx = canvas.getContext('2d')

  ctx.beginPath()
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true)
  ctx.stroke()
}
```


module-main.js
```js
function main () {
  window.draw('#canvas')
}

main()
```
