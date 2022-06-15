const ws = require("wind-script");

const project = new ws.WSrun();

project
    .setCode("{Str} E = This is an error message;\nE==> E;")
    .run();