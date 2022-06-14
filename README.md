[![](https://shields.io/badge/Slouchwind-WindScript-719fe3?logo=github&style=flat)](https://github.com/Slouchwind/WindScript "github") [![](https://shields.io/badge/wind--script-v0.0.9-719fe3?logo=npm&style=flat)](https://www.npmjs.com/package/wind-script "npm")

---

# WindScript

WindScript是一种解释性语言(不保证其速度，仅供娱乐)，简称WS

---

本文档更多的语言：中文简体 | [English](./README_en.md)  

- [WindScript](#windscript)
    - [安装](#安装)
    - [运行](#运行)
        - [WScmd.js](#wscmdjs)
            - [运行WS文件](#运行ws文件)
            - [WS RLrun交互模式](#ws-rlrun交互模式)
        - [wind-script.js](#wind-scriptjs)
            - [快速开始](#快速开始)
            - [路径运行](#路径运行)
            - [代码运行](#代码运行)

---

## 安装

`clone` 此仓库  
进入 `clone` 仓库的文件夹  
使用 `npm i wind-script` 安装模块

---

## 运行

你可以使用命令行工具[WScmd.js](#wscmdjs)来运行  
或者使用nodejs模块[wind-script.js](#wind-scriptjs)来运行

---

### WScmd.js

WScmd是使用node编写的命令行工具，提供了运行WS文件的方法以及WS RLrun交互模式

#### 运行WS文件

在终端输入 `node .\WScmd.js [run-path]` 会运行 `run-path` 处的WS文件  
示例：

```console
$ node .\WScmd.js .\template\helloworld.ws
Hello world!
This message by the template
This is a warn message      
This is an error message 
```

以上代码运行了 [./template/helloworld.ws](./template/helloworld.ws) 的WS文件

#### WS RLrun交互模式

在终端输入 `node .\WScmd.js` 会进入WS RLrun交互模式
```console
$ node .\WScmd.js
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

wind-script是一个nodejs模块，提供了运行WS文件的方法，你可以使用wind-script模块在你的js代码中运行WS文件

#### 快速开始

模块引入方法  
示例代码：[template-run.js](./template/template-run.js)

```js
const WSrun = require("wind-script");

const project = new WSrun();

project
    .setPath("./template/helloworld.ws")
    .run();
```

示例代码：[helloworld.ws](./template/helloworld.ws)

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

运行

```console
$ node .\template\template-run.js
Hello world!
This message by the template
This is a warn message      
This is an error message
```

#### 路径运行

首先引入模块  
然后定义一个WSrun类  
使用 `setPatn(path)` 将WSrun类的运行文件路径设置为 `path`  
使用 `run()` 运行WSrun类读取到的代码

```js
const WSrun = require("wind-script");

const project = new WSrun();

project
    .setPath("./template/helloworld.ws")
    .run();
```

以上代码会运行位于 [./template/helloworld.ws](./template/helloworld.ws) 处的WS文件

#### 代码运行

首先引入模块  
然后定义一个WSrun类  
使用 `setCode(code)` 将WSrun类的运行代码设置为 `code`  
使用 `run()` 运行WSrun类读取到的代码

```js
const WSrun = require("wind-script");

const project = new WSrun();

project
    .setCode("{Str} E = This is an error message;\nE==> E;")
    .run();
```

以上代码会使用WS运行

```windscript
{Str} E = This is an error message;
E==> E;
```
