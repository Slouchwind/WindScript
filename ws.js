"use strict";

const { Command } = require("commander");
const readline = require("readline");
const ws = require("wind-script");
const path = require("path");

const program = new Command();
program
    .name("WindScript Runner")
    .description("Deal with WS File")
    .version("0.0.1")
    .argument("[argument]", "argument")
    .option("-d, --debug", "display the debug info", false)
    .option("-g, --get <dirPath> [fileType]", "display all WS File at dirPath")
    .action((argument, options) => {
        //none or only debug
        if (argument === undefined && options.get === undefined) {
            const read = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            read.setPrompt("> ");
            console.log("Welcome to WindScript RLrun v0.0.1");
            console.log("Press Ctrl+D to exit the RLrun");
            read.prompt();
            const wsCode = new ws.WSrun();
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

        //at least one options (expect debug)
        else {
            if (argument !== undefined) {
                if (options.get !== undefined) {
                    var get = ws.objectToTable(ws.getFileList(options.get, argument));
                    get.forEach((value, i) => {
                        console.log(value);
                    });
                    console.log(`\nThere is ${get.length - 1} ${argument.toUpperCase()} File at the path "${path.resolve(options.get)}"`);
                }
                else {
                    const wsFile = new ws.WSrun(options.debug);
                    wsFile
                        .setPath(argument)
                        .run();
                }
            }

        }

        //debug
        if (options.debug) {
            console.log(argument);
            console.log(options);
        }
    })
    .parse();