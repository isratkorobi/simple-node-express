//this is server site
const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
//string er data k json e convert korbe...eta na dile data undifined dekhai
app.use(express.json());

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello I am learning Node with nodemon");
});

const users = [
  { id: 0, name: "Sabana", email: "sabana@gmail.com", phone: "01789898989" },
  { id: 1, name: "Sabnur", email: "Sabnur@gmail.com", phone: "01789898989" },
  {
    id: 2,
    name: "Srabonti",
    email: "Srabonti@gmail.com",
    phone: "01789898989",
  },
  { id: 3, name: "Purnima", email: "Purnima@gmail.com", phone: "01789898989" },
  { id: 4, name: "Sonia", email: "Sonia@gmail.com", phone: "01789898989" },
  { id: 5, name: "Sokh", email: "Sokh@gmail.com", phone: "01789898989" },
];
//use query
app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

//app.METHOD
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length; 
  users.push(newUser);
  console.log("hitting the post", req.body);
  res.json(newUser);
});

// dynamic api
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "oranges", "banana", "apple"]);
});

app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("Yummi Yummi yok misty fazli");
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
