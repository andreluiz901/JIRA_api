const express = require('express');
require('dotenv').config();
const app = express();
const usersControllers = require('./modules/projects/projects.controllers')
const PORT = process.env.PORT
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use("/", usersControllers);

app.listen(PORT, () => {
  console.log(`App working on PORT ${PORT}!`);
});


