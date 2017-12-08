const Answer = require ('./model')

module.exports.setAnswer = function (req, res)  {
    let answer = new Answer ({
        questionId: req.body.questionId,
        gradedCells: req.body.gradedCells
    })

    Answer.create(answer).then ( (ans) => {
        res.status (201)
        res.send({_id: ans._id})
    }).catch( (err)=> {
        res.send(err)
    })
}


module.exports.getAnswerById = function (req, res) {
    Answer.findOne({questionId: req.params.id}, {"__v":0, '_id':0}).then( (ans) => {
        res.json(ans)
    }).catch ( (err) => {
        res.send(err)
    })
}

/*
module.exports.getAnswers = function (req, res) {
    Answer.find({}, {"__v":0}).then ( (ans) => {
        res.json(ans)
    })
}

module.exports.updateAnswer = function  (req, res) {
    Answer.findByIdAndUpdate({_id:req.params.id}, req.body).then( (ans) => {
        res.json(ans)
    })
}

module.exports.deleteAnswer = function (req, res)  {
    Answer.findByIdAndRemove({_id:req.params.id}).then ( (ans) => {
        res.json (ans)
    })
}
*/
