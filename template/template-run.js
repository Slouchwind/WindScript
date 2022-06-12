const WSrun = require("wind-script");

const project = new WSrun();

project
    .setPath("./template/helloworld.ws")
    .run();
