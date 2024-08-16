const express = require("express");
const data = require("./data");
const cors = require("cors")
const bodyParser = require("body-parser");
const app = express(); //creates a instance of express. // App is used to handle requests and responses,routing server configuration.
const port = 3000;

app.use(cors());//middleware function
app.use(bodyParser.json());

//this is a route handler. It us a function that is executed when a request is made to the specified path.
app.get("/", (req, res) => {
  res.send("please switch to /api/data to get the data");
  // res.send(data)
});

//Routes are defined using app.get() method. It takes two argument, the path and the route handler.
app.get("/users", (req, res) => {
    res.send(data);
  });


//get request for a specific user

app.get("/users/:userId",(req, res) =>{    //This :id is a route parameter. It is a placeholder for the actual value that will be passes in the request.// this is a dynamic routes [it will be change] wo alga alga chnge hota rhta hay

  const id = req.params.userId; //This is how you access the route parameter in express.
  console.log(id);
  // res.status(200).send(data[id -7]);
  const user = data.find((user) => user.id == id);   //find the user with the specified id.
  console.log(user);
  res.status(200).send(user); //send the user as response.
})

app.post("/users",(req, res) => {
  // res.send("post request to the homepage");
  const newUser = req.body;
  console.log(newUser);
// const id = data.length;
// console.log(id);    //only number will increase

const modififiedUser = {...newUser, id: data.length + 1}; //unqiue id //id will change in number
console.log(modififiedUser);
data.push(modififiedUser);
res.status(201).send(modififiedUser);

});


//start the server and listen on the port
app.listen(port, () => {
  // console.log(`Example app listening at http://localhost:${port}`);
  // console.log(`server is running on port`,data);
});
