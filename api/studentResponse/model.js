const mongoose = require ('mongoose')


const StudentResponseSchema = new mongoose.Schema ({
   "questionId": "String",
   "answer": []
})


const StudentResponse = module.exports = mongoose.model ('StudentResponse', StudentResponseSchema )