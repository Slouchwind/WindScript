const ws = require("wind-script");

const project = new ws.WSrun();

project
    .setPath("./template/helloworld.ws")
    .run();