[![](https://shields.io/badge/Slouchwind-WindScript-719fe3?logo=github&style=flat)](https://github.com/Slouchwind/WindScript "github") [![](https://shields.io/badge/slouchwind-wind--script-719fe3?logo=npm&style=flat)](https://www.npmjs.com/package/wind-script "npm")

---

# WindScript

WindScript is an interpretive language (Can't guarantee its speed，Entertainment only)，WS for short

---

More language of this document: [中文简体](./README.md) | English | [日本語](./README_ja.md)  

- [WindScript](#windscript)
    - [Install](#install)
    - [Syntax](#syntax)
        - [Defining variable](#defining-variables)
        - [Console output](#console-output)
    - [Run](#run)
        - [ws.js](#wsjs)
            - [Run WS File](#run-ws-file)
            - [WS RLrun](#ws-rlrun)
        - [wind-script.js](#wind-scriptjs)
            - [Quick start](#quick-start)
            - [Run by path](#run-by-path)
            - [Run by code](#run-by-code)

---

## Install

`clone` this repository  
Enter the `clone` repository's folder  
Use `npm i wind-script` install module

---

## Syntax

Because WindScript is based on node.js, so the syntax is mostly related to node.js similar

### Defining variables

Syntax:
```windscript
{${type}} name = value
```
Define the value of variable `name` of `type` as` value `  
  
Example:
```windscript
{Num} a = 0
```
Define the value of variable `a` of type `num` as `0`  
Supported types: `Num` number, `Str` string, `Date` date

### Console output

Syntax:
```windscript
${type}==> name
```
Use the `type` type to output the `name` value on the console  
  
Example:
```windscript
W==> a
```
Use the `W` type to output the `a` value on the console  
Supported types: ` ` log, `I` info, `W` warn, `E` error

---

## Run

You can use CIL [ws.js](#wsjs) to run  
or use node.js module [wind-script.js](#wind-scriptjs) to run

---

### ws.js

WScmd is a CIL write by node.js, offer method to run WS File and WS RLrun

#### Run WS File

input `node ws [run-path]` at terminal will run WS File at `run-path` 
template: 

```console
$ node ws -f .\template\helloworld.ws
Hello world!
This message by the template
This is a warn message      
This is an error message 
```

Above code run WS File at [./template/helloworld.ws](./template/helloworld.ws)

#### WS RLrun

input `node ws` at terminal will enter WS RLrun
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
Use `setPatn(path)` to set WSrun class's run file path set as `path`  
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
Use `setPatn(code)` to set WSrun class's run code set as `code`  
Use `run()` to run code that WSrun class read

Template code: [run-code.js](./template/run-code.js)
```js
const ws = require("wind-script");

const project = new ws.WSrun();

project
    .setCode("{Str} E = This is an error message;\nE==> E;")
    .run();
```

Above code will use WS to run

```windscript
{Str} E = This is an error message;
E==> E;
```