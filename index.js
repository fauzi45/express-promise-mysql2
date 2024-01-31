const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const employee = require("./server/api/employee");
const project = require("./server/api/project");

app.use("/employee", employee);
app.use("/project", project);

const port = process.env.NODEJS_PORT || 8000;

app.get("/", (req, res) => {
  res.send("Succesfull Response");
});

app.listen(port, console.log("start port"));