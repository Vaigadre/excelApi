const express = require('express')
const mongoose = require ('mongoose')
//const router = express.Router();
const bodyParser = require ('body-parser')
const path = require ('path');
const cors = require('cors');

const swaggerJSDoc = require ('swagger-jsdoc')

const routeConfig = require ("./api/routeConfig")

mongoose.connect ('mongodb://127.0.0.1:27017/EHR',  {useMongoClient: true,  /* other options */});

const unscramble = require ("./unscramble");

var db = mongoose.connection;

mongoose.Promise = global.Promise;

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

app.use(cors());
// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')));

app.use ('/excel', routeConfig)
    
// serve swagger 
app.get ('/swagger.json', (req, res) => {
  res.setHeader ('Content-Type','application/json')
  res.send(swaggerSpec)
})


app.get ('*', (req, res) => {
   let descramble = unscramble('L7DOFMEMBsC4DNwCID2A7A5gEQJZpQE4DKAxjqADRIQwIAmSALuNOALYAOAwiuozuFABHAK5VYABkZIRaHh1DNqsAN4ok7Alg6Mq4YNFDxISWGnBZ0GAjhIpQRJAIqHjp8HXCMO0FGzk49owiyEIS4uAcRIxojATgIgRIJKrItiRxkIwACkgcwBQSwKaxKIlcAO7gaIoAguAkBAR2VADaALqmdKBsAJJ0KJBoSPEuRiawHl4+fgFBIUhC4GNuZhh0gfEk4ABKIqAckFQhcSXrmw2MO5AEim2dsBkAVuAA8gBG4LcVQ-emCkpQKoABZILJ5VJgxRcQSMAAqeQKSGKAEZ-l4AJ4qJBdL4mDAFAC0aMmAA80J5eig6IwALIbDTtCj6VwTTxsFA4Zh0bGwVoYkaQWo2RgAURpoDwSGBTORsCYGlJTFavMgGKaoFqsWBOHEUhkcj4OuOXiSsFesUlw2BqmkUuBBTRwIApAAmCTgjimRjA7KQDwZVhEFiMSAheBIOjhdzkujA3pZHIiaDGTxUGhweCgrIVbIAOS84CgjSowHaHS6PX6g2GBCZfOkDXeTwIryqNTBy1ZZw2hAaHB2jHUEBWE0wva2VxudyQFdgAOQoCQVDY6MYGPEKIYThV3uBh2xe8OVHawD5S9ibBYyHAtqcaAIkEU6GSSOAKIAHO6KG6JL+AJwEBiIiQEMSAAFLeh4RxIBIpgSCiACsEjynBsB8Dgj5YCIKCMKA0BUAKWCQHQ-poJAGDysgkBsBUeYCEgABuy43CIbC-gA0tANyQEQkAAHS-lgBDykkniMZh6gcKoFROOA7yMaAYjUEgl7VEOOAcBw-H+kprB0CQwL8aAwJJMgsDMKGygqMMRaNBgRB4AQjBWaABSqCY4J0AUGb0EgrCQO85BaAA1uAtjgH60hpt2kzcbE2R4BwKC1MlFQmemUCZo2l5JSlHDwD6OAqRQn7fr+AFASBYGQRZFigRi1JMJCXkFGkJAZI+eRrhuCqCAqsBXuRh7obEAjCCII0YDUOBpsiBhOP6BCcE47hsIoRAYlysgrk4IQMLSpigPhJFcMwDQsNZGD3i5I6qU48yhKYGEXY5jGBrUOCQFyeBUMMgSKAsQimIF4Bwjg73SCYhQfhIEi1BIXAADKiUgnxsWwebfVwhguSwkAjegbBsHY2JAA')
  res.send('Descrambled data: ' + descramble);
 // res.send ("Please check your URL and try -- excel/apiName --")
})


app.use ( (err, req, res, next) => {
  console.log(err)
  res.status (422).send ({error : err.message})
})


app.listen(3200, () => {
   console.log ("Server is running on port 3200")
});



