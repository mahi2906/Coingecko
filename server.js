const express = require("express")
const app = express();
const routes = require("./src/modules/route");

const { Ignitor } = require('@adonisjs/ignitor')

new Ignitor(require('@adonisjs/fold'))
  .appRoot(__dirname)
  .fireHttpServer()
  .catch(console.error)


  app.use(routes);
  app.listen(3000,()=>{
      console.log("Server is running on PORT 3000")
  })