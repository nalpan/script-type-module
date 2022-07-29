`グローバルscript` から `モジュール化script` は参照できない

```html
<script src="./module-draw.js" type="module"></script> <!-- モジュール -->
<script src="./global-main.js" defer></script> <!-- グローバル -->
```

module-draw.js
```js
/**
 * 指定されたセレクタに円を描く
 * @param {string} selector
 */
function draw (selector) {
  const canvas = document.querySelector(selector)
  const ctx = canvas.getContext('2d')

  ctx.beginPath()
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true)
  ctx.stroke()
}
```

global-main.js
```js
function main () {
  draw('#canvas') // 呼べない
}

main()
```
