const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("app running at http://localhost:3000/");
});

const date = new Date();

const format = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

app.get("/", (request, response) => {
  response.send(format);
});
