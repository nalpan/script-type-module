# 別ファイルで関数が上書きされる

```html
<script src="./draw.js"></script> <!-- 呼び出したいdraw関数 -->
<script src="./main.js"></script>
```

↓

```html
<script src="./draw.js"></script> <!-- 呼び出したいdraw関数 -->
<script src="./common.js"></script> <!-- draw関数が定義されている -->
<script src="./main.js"></script>
```
