<div align="center">

[![](https://shields.io/badge/Slouchwind-WindScript-719fe3?logo=github&style=flat)](https://github.com/Slouchwind/WindScript "github") 
[![](https://img.shields.io/npm/v/wind-script.svg?logo=npm&style=flat&color=719fe3)](https://www.npmjs.com/package/wind-script "npm")  
[![](https://img.shields.io/github/stars/Slouchwind/WindScript?color=719fe3)](https://github.com/Slouchwind/WindScript/stargazers "stars") 
[![](https://img.shields.io/github/forks/Slouchwind/WindScript?color=719fe3)](https://github.com/Slouchwind/WindScript/network/members "forks") 
[![](https://img.shields.io/github/repo-size/Slouchwind/WindScript?color=719fe3)](https://github.com/Slouchwind/WindScript "repo size")

</div>

---

# WindScript

WindScript is an interpretive language (Can't guarantee its speed, Entertainment only), WS for short

---

More language of this document: [简体中文](./README.md) | English | [日本語](./README_ja.md)  

- [WindScript](#windscript)
    - [Install](#install)
    - [Syntax](#syntax)
        - [Defining variable](#defining-variables)
        - [Console output](#console-output)
        - [Console output value](#console-output-value)
    - [Run](#run)
        - [wind-script-cli.js](#wind-script-clijs)
            - [Run WS File](#run-ws-file)
            - [WS REPL](#ws-repl)
        - [wind-script.js](#wind-scriptjs)
            - [Quick start](#quick-start)
            - [Run by path](#run-by-path)
            - [Run by code](#run-by-code)

---

## Install

```console
npm i wind-script
```  

---

## Syntax

Because WindScript is based on node.js, so the syntax is mostly related to node.js similar

### Defining variables

Syntax:
```windscript
*type* *name* = *value*
```
Define the value of variable `name` of `type` as` value `  
  
Example:
```windscript
Num a = 0
```
Define the value of variable `a` of type `num` as `0`  
Supported types: `Num` number, `Str` string, `Date` date, `Boo` boolean

### Console output

Syntax:
```windscript
*type*==> *name*
```
Use the `type` type to output the `name` value on the console  
  
Example:
```windscript
W==> a
```
Use the `W` type to output the `a` value on the console  
Supported types: ` ` log, `I` info, `W` warn, `E` error

### Console output value

Syntax:
```windscript
*type*==> {*type*}(*value*)
```
Use the `type` type to output the `value` value of the `type` type on the console

Example:
```windscript
W==> {Str}(message)
```
Use the `W` type to output the `message` value of the `Str` type on the console

---

## Run

You can use CIL [ws.js](#wsjs) to run  
or use node.js module [wind-script.js](#wind-scriptjs) to run

---

### wind-script-cli.js

```console
npm i wind-script-cli -g
```  
  
wind-script-cli is a CIL write by node.js, offer method to run WS File and WS REPL

#### Run WS File

input `wind-script [run-path]` at terminal will run WS File at `run-path` 
template: 

```console
$ wind-script .\template\helloworld.ws
Hello world!
This message by the template
This is a warn message      
This is an error message 
```

Above code run WS File at [./template/helloworld.ws](./template/helloworld.ws)

#### WS REPL

input `wind-script` at terminal will enter WS REPL
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

wind-script is a node.js module, offer method to run WS File, you can use wind-script module to run WS File in your js code

#### Quick start

How to use wind-script module  
Template code: [run-path.js](./template/run-path.js)

```js
const ws = require("wind-script");

const project = new ws.WSrun();

project
    .setPath("./template/helloworld.ws")
    .run();
```

Template code: [helloworld.ws](./template/helloworld.ws)

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

Run

```console
$ node .\template\run-path.js
Hello world!
This message by the template
This is a warn message      
This is an error message
```

#### Run by path

First require module  
Then const a WSrun class  
Use `setPatn(path)` to set WSrun class`s run file path set as `path`  
Use `run()` to run code that WSrun class read

```js
const ws = require("wind-script");

const project = new ws.WSrun();

project
    .setPath("./template/helloworld.ws")
    .run();
```

Above code run WS File at [./template/helloworld.ws](./template/helloworld.ws)

#### Run by code

First require module  
Then const a WSrun class  
Use `setPatn(code)` to set WSrun class`s run code set as `code`  
Use `run()` to run code that WSrun class read

Template code: [run-code.js](./template/run-code.js)
```js
const ws = require("wind-script");

const project = new ws.WSrun();

project
    .setCode(`Str E = This is an error message;
E==> E;`)
    .run();
```

Above code will use WS to run

```windscript
Str E = This is an error message;
E==> E;
```