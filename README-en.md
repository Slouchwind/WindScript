[![](https://shields.io/badge/wind--script-719fe3?logo=npm&style=flat)](https://www.npmjs.com/package/wind-script "npm")

---

# WindScript

WindScript is an interpretive language (Can't guarantee its speed，Entertainment only)，WS for short

---

More language of this document: [中文简体](./README.md) | English 

- [WindScript](#windscript)
    - [Install](#install)
    - [Run](#run)
        - [WScmd.js](#wscmdjs)
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

## Run

You can use CIL [WScmd.js](#wscmdjs) to run  
or use node.js module [wind-script.js](#wind-scriptjs) to run

---

### WScmd.js

WScmd is a CIL write by node.js, offer method to run WS File and WS RLrun

#### Run WS File

input `node .\WScmd.js -f <path>` at terminal will run WS File at `path` 
template: 

```console
$ node .\WScmd.js -f .\template\helloworld.ws
Hello world!
This message by the template
This is a warn message      
This is an error message 
```

Above code run WS File at [./template/helloworld.ws](./template/helloworld.ws)

#### WS RLrun

input `node .\WScmd.js` at terminal will enter WS RLrun
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

wind-script is a node.js module, offer method to run WS File, you can use wind-script module to run WS File in your js code

#### Quick start

How to use wind-script module
Template code: [template-run.js](./template/template-run.js)

```js
const WSrun = require("wind-script");

const project = new WSrun();

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
$ node .\template\template-run.js
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
const WSrun = require("wind-script");

const project = new WSrun();

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

```js
const WSrun = require("wind-script");

const project = new WSrun();

project
    .setCode("{Str} E = This is an error message;\nE==> E;")
    .run();
```

Above code will use WS to run

```windscript
{Str} E = This is an error message;
E==> E;
```
