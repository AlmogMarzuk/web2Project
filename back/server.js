const dotenv = require('dotenv').config()
const express = require("express");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const mongoose=require('mongoose')
const cors = require('cors');
const seed = require("./seed");
const { WebSocketServer } = require('ws');
mongoose.set('strictQuery', false);
const bodyParser=require('body-parser')
seed.seedDB();
if (process.env.NODE_ENV == "development") {
  const swaggerUI = require("swagger-ui-express")
  const swaggerJsDoc = require("swagger-jsdoc")
  const options = {
  definition: {
  openapi: "3.0.0",
  info: {

  title: "Web2Project_API",
  version: "1.0.0",
  description: "A simple Express Library API!",
  },
  servers: [{url: "http://127.0.0.1:" + process.env.PORT,},],
  },
  apis: ["./routes/*.js"],
  };
  const specs = swaggerJsDoc(options);
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
 }
 
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true,limit:'1m'}))
app.use(bodyParser.json())
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})
const db=mongoose.connection
db.on('error',error=>{console.error(error)})
db.once('open',()=>{console.log('db connected!')})
const PORT=process.env.PORT
const indexRouter = require('./routes/index')
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 600000 }}))
app.use('/',indexRouter)

const flightRouter= require('./routes/flight_routes')
app.use('/flight',flightRouter)




app.use(cookieParser());







app.listen(PORT, () => {
  console.log(`Server is running on port:` + PORT);
});

