const WSrun = require("windscript");

const project = new WSrun();

project
    .setPath("./template/helloworld.ws")
    .run();