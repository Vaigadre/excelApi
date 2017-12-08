const mongoose = require ('mongoose')
//const Schema = mongoose.Schema


var scoreSchema = new  mongoose.Schema ({
    question: "String",
    score: "String",
    total: "String"  
})

var Score = mongoose.model ('Score', scoreSchema)

module.exports = Score;