const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

require("./db/conn");
const Register = require('./models/registers');

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
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


app.post("/signup",async(req,res)=>{
  try
  {
      console.log(req.body.firstname);
      res.send(req.body.firstname);
  }
  catch(error)
  {
    res.status(400).send(error);
  }

})

app.listen(port, () => {
  console.log(`server running at port number ${port}`);
});
