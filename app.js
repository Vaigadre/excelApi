const express = require('express')
const mongoose = require ('mongoose')
//const router = express.Router();
const bodyParser = require ('body-parser')
const path = require ('path')

const swaggerJSDoc = require ('swagger-jsdoc')

const medium = require ("./api/medium")

mongoose.connect ('mongodb://127.0.0.1:27017/test',  {useMongoClient: true,  /* other options */})

var db = mongoose.connection;

mongoose.Promise = global.Promise

db.on('error', (err) => {
	console.log(err)
});

db.once('open', function() {
  console.log('The DB is connected successfully.')
});

const app = express();

// swagger definition
const swaggerDefinition = {
  info: {
    title: "Node Swagger API Doc",
    version: "1.0.0",
    description: "Swagger documentation for Node APIs of MS-EXCEL POC"
  },
  host: "localhost:3000",
  basepath: "/"
}

// options for swagger docs
const options = {
  swaggerDefinition: swaggerDefinition,
  apis: ['./api/answer/router.js', './api/queList/router.js',
   './api/score/router.js', './api/stateQuestion/router.js', './api/studentResponse/router.js' ]
}

// initilalize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options)


// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')));

app.use ('/excel', medium)
    
// serve swagger 
app.get ('/swagger.json', (req, res) => {
  res.setHeader ('Content-Type','application/json')
  res.send(swaggerSpec)
})


app.get ('*', (req, res) => {
  res.send ("Please check your URL and try -- excel/apiName --")
})


app.use ( (err, req, res, next) => {
  console.log(err)
  res.status (422).send ({error : err.message})
})



app.listen(3000, () => {
   console.log ("Server is running on port 3000")
});



