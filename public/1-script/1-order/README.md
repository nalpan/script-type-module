# 動作がscriptタグの順番に依存する

NG
```html
<script src="./main.js"></script>
<script src="./draw.js"></script>
```

OK
```html
<script src="./draw.js"></script>
<script src="./main.js"></script>
```
