<div align="center">

[![](https://shields.io/badge/Slouchwind-WindScript-719fe3?logo=github&style=flat)](https://github.com/Slouchwind/WindScript "github") 
[![](https://img.shields.io/npm/v/wind-script.svg?logo=npm&style=flat&color=719fe3)](https://www.npmjs.com/package/wind-script "npm")  
[![](https://img.shields.io/github/stars/Slouchwind/WindScript?color=719fe3)](https://github.com/Slouchwind/WindScript/stargazers "stars") 
[![](https://img.shields.io/github/forks/Slouchwind/WindScript?color=719fe3)](https://github.com/Slouchwind/WindScript/network/members "forks") 
[![](https://img.shields.io/github/repo-size/Slouchwind/WindScript?color=719fe3)](https://github.com/Slouchwind/WindScript "repo size")

</div>

---

# WindScript

WindScript是一种解释性语言(不保证其速度，仅供娱乐)，简称WS

---

本文档更多的语言：简体中文 | [English](./README_en.md) | [日本語](./README_ja.md)  

- [WindScript](#windscript)
    - [安装](#安装)
    - [语法](#语法)
        - [定义变量](#定义变量)
        - [控制台输出](#控制台输出)
        - [控制台输出值](#控制台输出值)
    - [运行](#运行)
        - [wind-script-cli.js](#wind-script-clijs)
            - [运行WS文件](#运行ws文件)
            - [WS REPL交互模式](#ws-repl交互模式)
        - [wind-script.js](#wind-scriptjs)
            - [快速开始](#快速开始)
            - [路径运行](#路径运行)
            - [代码运行](#代码运行)

---

## 安装

```console
npm i wind-script
```  
  
[关于安装&更新](https://github.com/Slouchwind/WindScript/discussions/2)

---

## 语法

由于WindScript基于node.js，所以语法大部分与node.js相似

### 定义变量

语法：
```windscript
*type* *name* = *value*
```
将 `type` 类型的变量 `name` 的值定义为 `value`  
  
示例：
```windscript
Num a = 0
```
将 `Num` 类型的变量 `a` 的值定义为 `0`  
支持的类型：`Num` 数字、 `Str` 字符串、 `Date` 日期、 `Boo` 布尔

### 控制台输出

语法：
```windscript
*type*==> *name*
```
使用 `type` 类型在控制台输出 `name` 的值  
  
示例：
```windscript
W==> a
```
使用 `W` 类型在控制台输出 `a` 的值  
支持的类型：` ` 日志、 `I` 信息、 `W` 警告、 `E` 错误

### 控制台输出值

语法：
```windscript
*type*==> {*type*}(*value*)
```
使用 `type` 类型在控制台输出 `type` 类型的 `value` 值
  
示例：
```windscript
W==> {Str}(message)
```
使用 `W` 类型在控制台输出 `Str` 类型的 `message` 值

---

## 运行

你可以使用命令行工具 [ws.js](#wsjs) 来运行  
或者使用nodejs模块 [wind-script.js](#wind-scriptjs) 来运行

---

### wind-script-cli.js

```console
npm i wind-script-cli -g
```  
  
wind-script-cli是使用node.js编写的命令行工具，提供了运行WS文件的方法以及WS REPL交互模式

#### 运行WS文件

在终端输入 `wind-script [run-path]` 会运行 `run-path` 处的WS文件  
示例：

```console
$ wind-script .\template\helloworld.ws
Hello world!
This message by the template
This is a warn message      
This is an error message 
```

以上代码运行了 [./template/helloworld.ws](./template/helloworld.ws) 的WS文件

#### WS REPL交互模式

在终端输入 `wind-script` 会进入WS REPL交互模式
```console
$ wind-script
Welcome to WindScript REPL v0.0.1
Press Ctrl+D to exit the REPL
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
示例代码：[run-path.js](./template/run-path.js)

```js
const ws = require("wind-script");

const project = new ws.WSrun();

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
$ node .\template\run-path.js
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
const ws = require("wind-script");

const project = new ws.WSrun();

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

示例代码：[run-code.js](./template/run-code.js)
```js
const ws = require("wind-script");

const project = new ws.WSrun();

project
    .setCode(`Str E = This is an error message;
E==> E;`)
    .run();
```

以上代码会使用WS运行

```windscript
Str E = This is an error message;
E==> E;
```