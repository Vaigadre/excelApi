const mongoose = require ('mongoose')
//const Schema = mongoose.Schema


const StateQuestionSchema = new  mongoose.Schema ({
    "name": {type: "String"},
    "state": {type: "Object"},
    "gradedCells": []
})

const StateQuestion = module.exports = mongoose.model ('StateQuestion', StateQuestionSchema)

