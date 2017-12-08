const mongoose = require ('mongoose')

const AnswerSchema = new mongoose.Schema ({
    "questionId": 'String',
    "gradedCells": []
})

const Answer = module.exports = mongoose.model ('Answer', AnswerSchema)



// Request Object : {
// questionId: '',
// formulas: '',
// text: '',
// values : '',
// address: ''
// }
// Response Obj: {
// '_id': ''
// }
 
