const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

require("./db/conn");

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);

app.get("/", (req, res) => {
  //res.send(`Welcome to Picture Book`);
  res.render("index");
});

app.get("/login" ,(req,res)=>
{
  res.render("login");
});

app.get("/signup" ,(req,res)=>
{
  res.render("signup");
});

app.listen(port, () => {
  console.log(`server running at port number ${port}`);
});
