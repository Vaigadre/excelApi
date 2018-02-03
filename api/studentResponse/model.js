const mongoose = require ('mongoose')


const StudentResponseSchema = new mongoose.Schema ({
   "questionId": "String",
   "answer": "String"
})


const StudentResponse = module.exports = mongoose.model ('StudentResponse', StudentResponseSchema )