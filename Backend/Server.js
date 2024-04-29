const express = require('express')
const mongoose  = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/User.model');

require ('dotenv').config();


const app = express()
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

(async ()=> {
    try {
        await mongoose.connect("mongodb://localhost:27017/homework_app")
    } catch (error) {
        console.error("ERROR: " , error)
        throw err
    }
})()

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("success");
        } else {
          res.json("the password is incorrect");
        }
      } else {
        res.json("No record existed");
      }
    })
    .catch((err) => res.status(500).json({ message: "Internal server error", error: err }));
  });


app.post("/signup", (req, res) => {
    UserModel.create(req.body)
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
  });



app.get('/' , (req , res) => {
    res.send('Hello world and hello ma')
} )

app.listen(process.env.PORT , ()=> {
    console.log(`the server is running successfully on port ${port}`);
})