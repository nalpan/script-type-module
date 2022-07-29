# import/exportは `type="module"` が必要

```html
<script src="./main.js" type="module"></script>
```

```js
import { draw } from './draw'
function main () {
  draw('#canvas')
}

main()
```
