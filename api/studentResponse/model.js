const mongoose = require ('mongoose')


const StudentResponseSchema = new mongoose.Schema ({
    question: "String",
    answer: "String",
    duration: "String"
})


const StudentResponse = module.exports = mongoose.model ('StudentResponse', StudentResponseSchema )