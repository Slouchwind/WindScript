"use strict";

const { Command } = require("commander");
const readline = require("readline");
const WSrun = require("wind-script");
const ws = require("wind-script");
const path = require("path");

const program = new Command();
program
    .name("WindScript Runner")
    .description("Deal with WS File")
    .version("0.0.1")
    .argument("[run-path]", "run WS file at path")
    .option("-d, --debug", "display the debug info", false)
    .option("-g, --get <dirPath>", "display all WS File at dirPath")
    .action((runPath, options) => {
        //none or only debug
        if (runPath === undefined && options.get === undefined) {
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
        
        //at least one options (expect debug)
        else {
            if (runPath !== undefined) {
                const wsFile = new WSrun(options.debug);
                wsFile
                    .setPath(runPath)
                    .run();
            }
            else if (options.get !== undefined) {
                var get = ws.promiseToTable(ws.getFileList(options.get), ["line", "name", "path"]);
                get.forEach((value, i) => {
                    console.log(value);
                })
                console.log(`\nThere is ${get.length - 1} WS File at the path "${path.resolve(options.get)}"`);
            }
        }

        //debug
        if (options.debug) {
            console.log(runPath);
            console.log(options);
        }
    })
    .parse();
