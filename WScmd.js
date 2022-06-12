"use strict";

const { Command } = require("commander");
const readline = require("readline");
const WSrun = require("windscript");
const ws = require("windscript");
const url = require("url");

const program = new Command();
program
    .name("WindScript Runner")
    .description("Deal with WS File")
    .version("0.0.1")
    .option("-f, --file <path>", "run WS file at path")
    .option("-d, --debug", "display the debug info", false)
    .option("-g, --get <dirPath>", "display all WS File at dirPath")
    .parse();

const options = program.opts();
const wsFile = new WSrun(options.debug);
if (options.file === undefined && options.get === undefined) {
    if (options.debug) console.log(options);
    const read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    read.setPrompt("> ");
    console.log("Welcome to WindScript RLrun v0.0.1");
    console.log("Press Ctrl+D to exit the RLrun");
    read.prompt();
    const wsCode = new WSrun();
    read.on("line", (input) => {
        wsCode
            .setCmd(input)
            .run();
        read.prompt();
    });
    read.on("close", () => {
        console.log("\nRLrun exited");
    })
}
else {
    if (options.file !== undefined) {
        wsFile
            .setPath(options.file)
            .run();
    }
    else if (options.get !== undefined) {
        var get = ws.getFileList(options.get);
        console.log("i | line | name | path");
        for (let i = 0; i < get.line.length; i++) {
            console.log(`${i} | ${get.line[i]} | ${get.name[i]} | ${get.path[i]}`);
        }
        console.log(`There is ${get.line.length} WS File at the path "${url.pathToFileURL(options.get).pathname.substring(1)}"`);
    }
}