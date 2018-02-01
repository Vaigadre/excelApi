const mongoose = require ('mongoose')

const AnswerSchema = new mongoose.Schema ({
    "questionId": 'String',
    "answer": 'String'
})

const Answer = module.exports = mongoose.model ('Answer', AnswerSchema)

