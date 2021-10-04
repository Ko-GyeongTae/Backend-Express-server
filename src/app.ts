import express from "express";

const server = express();
​
server.get("/", (req, res) => {
    const name = !req.query.name ? "World" : req.query.name;
    res.send(`Hello ${name}`);
});

server.listen(4000, () => {
  console.log(`Server listening on port ${4000}`);
});