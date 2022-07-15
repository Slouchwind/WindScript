const ws = require("wind-script");

const project = new ws.WSrun();

project
    .setPath(__dirname, "./helloworld.ws")
    .run();