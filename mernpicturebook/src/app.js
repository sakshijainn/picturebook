const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

require("./db/conn");
const Register = require("./models/registers");
const {json}= require("express");

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

app.get("/register" ,(req,res)=>
{
  res.render("register");
});

app.get('/welcome', (req,res)=>
{
    res.render("welcome");
});

app.post("/register",async(req,res)=>{
  try
  {
     
      const password = req.body.password;
      const cpassword  = req.body.confirmpassword;
     

      if(password === cpassword)
      {


          const registerPicture = new Register({
              firstname :req.body.firstname,
              email:req.body.email,
              password:req.body.password,
              confirmpassword:req.body.confirmpassword
          })
         const registered= await registerPicture.save();
         res.status(201).render("welcome");

      }
      else
      {
          res.send(`pwd not matching`);
      }

  }
  catch(error)
  {
    res.status(400).send(error);
  }

})


app.post("/login", async(req,res)=>{
  try
  {
      const email = req.body.email;
      const password = req.body.password;
      const userEmail = await Register.findOne({email:email});
      // res.send(userEmail);
      // console.log(userEmail);
      if(userEmail.password===password)
      {
        res.status(201).render("welcome");
      }
      else
      {
        res.send(`pwd not matching`);
      }
  }
  catch(error)
  {
    res.status(400).send(`Invalid Email`);
  }
})

app.listen(port, () => {
  console.log(`server running at port number ${port}`);
});
