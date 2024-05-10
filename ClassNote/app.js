const express = require("express");
//const data = require('./data.json')
//const object = require('./object.js')
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

const animals = [
  { id: 1, name: "dog" },
  { id: 2, name: "cat" },
  { id: 3, name: "rat" },
  { id: 4, name: "rabbit" },
  { id: 5, name: "lion" },
];

app.get("/", (req, res) => {
  res.send(data);
});
app.get("/all", (req, res) => {
  res.send(animals);
});

app.post("/create", (req, res) => {
  console.log(req.body);
  console.log(req.params);
  //console.log(req.headers);
  res.send(req.body);
});

app.get("/all/:id", (req, res) => {
  console.log(req.params);
  const actualAnimal = animals.filter((item) => item.id == req.params.id);
  res.send({
    message: "animal with id: " + req.params.id,
    data: actualAnimal,
  });
});

const port = 8080; //0 - 65000

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
