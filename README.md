勉強会で `type="module"` について話すやつの資料です

# 対象者

- JSで関数を定義するコードを書けること
- ESModulesの構文を使って関数のエクスポート、インポートができること


# 話すこと

- import/exportを使った関数をブラウザで動作させる方法
-  (できれば) webpack / Viteでの取り扱い


# 話さないこと

- 空オブジェクト利用などのテクニックについて
- 動的importについて
- scriptタグの属性 `defer`, `async` について
- CommonJSなどの他モジュールシステムや `.mjs`, `.cjs` について
- Node.jsでの実行について


# 章立て

## 以前の書き方

1. 分割したJSファイルを読み込み
   1. 読み込み順の指定
      1. 読み込まれた順に実行されるため、関数定義のあるファイルを先に書かないといけない
   1. 関数名の衝突
      1. 理由の解説: グローバルに定義されるため


## ESModulesの登場

1. import/exportの簡単な説明と書き方
1. import/exportを使って書いてみる: 失敗する
1. ブラウザ上での取り扱いを確認
   1. https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Modules#applying_the_module_to_your_html
1. `type="module"` で読み込む: 成功する
   1. 便宜上 `type="module"` で読み込まれたスクリプトを `モジュール化script` 、そうでないものを `グローバルscript` と呼ぶ、正式名称ではない


## モジュール化scriptの性質

https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Modules#other_differences_between_modules_and_standard_scripts

1. `モジュール化script` はstrictモードで動作する
1. `モジュール化script` から `グローバルscript` は参照できる -> 実コード
1. `グローバルscript` とimportした関数が被っているときは、**importした関数**が優先 -> 実コード
   1. `globalThis` を使えば `グローバルscript` を明示的に指定できる -> 実コード
1. `グローバルscript` から `モジュール化script` は参照できない -> 実コード
   1. `モジュール化script` ごとにスコープが区切られ、グローバルからは見えないため -> イメージ
   1. html上のonclickなどからも実行不可能
      1. 回避方法1: `モジュール化script` 上で `addEventListener` を使いイベントと処理を紐づける -> 実コード
         1. イベントの管理が難しそう
      1. 回避方法2: `window` オブジェクトに格納する -> 実コード
         1. 後から上書きできるため、以前の問題が発生する可能性あり
1. **別の** `モジュール化script` で定義されたものは利用できない -> 実コード
   1. 上記と同じく `モジュール化script` ごとにスコープが異なるため -> イメージ
1. CORS不可
   1. セキュリティ要件によるもの


## 中田が思う使い所

1. ビルドツールなど使えないプロダクトでも既存は今までの `グローバルスクリプト`、新しい部分は `モジュール化スクリプト` で既存資産も活かしつつ開発が行える
   1. 特に新しい部分を実装するときに既存コードとの名前被りが回避できるのは大きい
   1. もちろんグローバルで読み込まれているjQueryや他ライブラリも `モジュール化スクリプト` で利用できる
1. b
1. c



## バンドルツール上での取り扱い (extra)

1. webpackではどう扱っているか
   1. https://github.com/jantimon/html-webpack-plugin#readme
1. Viteではどう扱っているか
