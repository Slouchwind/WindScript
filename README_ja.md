[![](https://shields.io/badge/Slouchwind-WindScript-719fe3?logo=github&style=flat)](https://github.com/Slouchwind/WindScript "github") [![](https://shields.io/badge/slouchwind-wind--script-719fe3?logo=npm&style=flat)](https://www.npmjs.com/package/wind-script "npm")

---

# WindScript

WindScriptは、WSと呼ばれる解釈言語(速度を保証せず、エンターテインメントのみ)です

---

本書のより多くの言語：[中文简体](./README.md) | [English](./README_en.md) | 日本語  

- [WindScript](#windscript)
    - [インストール](#インストール)
    - [構文](#構文)
        - [変数の定義](#変数の定義)
        - [コンソール出力](#コンソール出力)
    - [実行](#実行)
        - [ws.js](#wsjs)
            - [WSファイルを実行](#wsファイルを実行)
            - [WS RLrunインタラクションモード](#ws-rlrunインタラクションモード)
        - [wind-script.js](#wind-scriptjs)
            - [クイックスタート](#クイックスタート)
            - [パス実行](#パス実行)
            - [コード実行](#コード実行)

---

## インストール

`clone` この倉庫  
`clone` 倉庫に入るフォルダ  
`npm i wind-script` を使用してモジュールをインストールします

---

## 構文

WindScriptはnode.jsに基づいているため、構文の大部分はnode.jsと似ています

### 変数の定義

構文:
```windscript
{${type}} name = value
```
`type` タイプの変数 `name` の値を `value` と定義する  
  
例：
```windscript
{Num} a = 0
```
`Num` タイプの変数 `a` の値を `0` と定義する  
サポートされているタイプ： `Num` 数字、 `Str` 文字列、 `Date` 日付

### コンソール出力

構文:
```windscript
${type}==> name
```
`type` タイプを使用してコンソールで `name` の値を出力する  
  
例：
```windscript
W==> a
```
`W` タイプを使用してコンソールで `a` の値を出力する  
サポートされているタイプ：` ` ログ、 `I` 情報、 `W` 警告、 `E` エラー

---

## 実行

コマンドラインツール [ws.js](#wsjs) を使用して実行できます  
またはnodejsモジュール [wind-script.js](#wind-scriptjs) を使用して実行します

---

### ws.js

wsはnodeで作成されたコマンドラインツールで、WSファイルを実行する方法とWS RLunインタラクションモードを提供します

##### WSファイルを実行

端末で `node ws [run-path]` を入力すると、 `run-path` でWSファイルが実行されます  
例：

```console
$ node ws .\template\helloworld.ws
Hello world!
This message by the template
This is a warn message      
This is an error message 
```

以上のコードは[./template/helloworld.ws](./template/helloworld.ws) のWSファイルを実行しました

#### WS RLrunインタラクションモード

端末で `node ws` を入力するとWS RLrunインタラクションモードになります
```console
$ node ws
Welcome to WindScript RLrun v0.0.1
Press Ctrl+D to exit the RLrun
> {Num} a = 0
0
> ==> a
0
> {Num} a = 114514;
114514
> ==> a;
114514
>
```

---

### wind-script.js

wind-scriptはnodejsモジュールで、WSファイルを実行する方法を提供しますwind-scriptモジュールを使用してjsコードでWSファイルを実行することができます

#### クイックスタート

モジュール導入方法
コード例：[run-path.js](./template/run-path.js)

```js
const ws = require("wind-script");

const project = new ws.WSrun();

project
    .setPath("./template/helloworld.ws")
    .run();
```

コード例：[helloworld.ws](./template/helloworld.ws)

```windscript
{Str} text = Hello world!;
==> text;
{Str} text = This message by the template;
==> text;
{Str} w = This is a warn message;
W==> w;
{Str} E = This is an error message;
E==> E;
```

実行

```console
$ node .\template\run-path.js
Hello world!
This message by the template
This is a warn message      
This is an error message
```

#### パス実行

まずモジュールを導入する  
そしてWSrunクラスを定義します  
`setPatn(path)` を使用してWSrunクラスの実行ファイルパスを `path` に設定します  
WSrunクラスで読み取ったコードを実行するには、 `run()` を使用します

```js
const ws = require("wind-script");

const project = new ws.WSrun();

project
    .setPath("./template/helloworld.ws")
    .run();
```

上記のコードは、[./template/helloworld.ws](./template/helloworld.ws) にあるWSファイルを実行します

#### コード実行

まずモジュールを導入する  
そしてWSrunクラスを定義します  
`setCode(code)` を使用してWSrunクラスの実行コードを `code` に設定します  
WSrunクラスで読み取ったコードを実行するには、 `run()` を使用します

コード例：[run-code.js](./template/run-code.js)
```js
const ws = require("wind-script");

const project = new ws.WSrun();

project
    .setCode("{Str} E = This is an error message;\nE==> E;")
    .run();
```

上記のコードはWSを使用して実行されます

```windscript
{Str} E = This is an error message;
E==> E;
```