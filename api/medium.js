const express = require('express')
const router = express.Router();
const stateQuestion = require ('./stateQuestion/router')
const score = require ("./score/router")
const studentResponse = require ('./studentResponse/router')
const answer = require ("./answer/router")
const queList = require ("./queList/router")

//post and get method
router.use ('/question', stateQuestion)

//get and post 
router.use ('/answer', answer)

//get
router.use ('/questions', queList)

//get
router.use ('/student-response', studentResponse)

router.use ('/score', score)



/*
var fs = require('fs');
fs.readdirSync(__dirname).forEach(function(file) {

    // Remove extension from file name
    var basename = file.split('.')[0];

    // Only load files that aren't directories and aren't blacklisted
    if (fs.lstatSync(__dirname + '/' + file).isDirectory()) {
        console.log("api: " + '/' + basename + ' file: ./' + file  + '/router.js');       
        router.use('/' + basename, require('./' + file  + '/router.js'));
    }

});
*/

module.exports = router;
