const WSrun = require("wind-script");

const project = new WSrun();

project
    .setCode("{Str} E = This is an error message;\nE==> E;")
    .run();