// creating a server
const express = require("express");

const server = express();

const tier1 = (req, res, next) => {
    console.log((`Middleware1`));
    next();
}

const tier2 = (req, res, next) => {
    console.log((`Middleware2`));
    next();
}

const tier3 = (req, res, next) => {
    console.log((`Middleware3`));
    next();
}

server.use(tier1)

// creating multiple routes
server.get("/", (request, response) => {
    response.send("User");
});

server.get("/user", tier2, (request, response) => {
    response.send("<h1>Jaggi</h1>");
});

server.get("/data", tier3, (request, response) => {
    response.send({name: `Jaggi`, age: 28});
});

server.listen(5001, () => {
    console.log(`Server is running in 5001`);
});
