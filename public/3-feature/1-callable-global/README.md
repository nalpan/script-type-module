`モジュール化script` から `グローバルscript` は参照できる

```html
<script src="./draw.js"></script> <!-- グローバル -->
<script src="./main.js" type="module"></script> <!-- モジュール -->
```

draw.js
```js
function draw (selector) { // グローバルに定義
  const canvas = document.querySelector(selector)
  const ctx = canvas.getContext('2d')

  ctx.beginPath()
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true)
  ctx.stroke()
}
```

main.js
```js
function main () {
  draw('#canvas') // グローバル定義の関数を使える
}

main()
```