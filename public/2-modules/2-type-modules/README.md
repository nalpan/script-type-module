`type="module"` をつけるとimport/exportが使える

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
