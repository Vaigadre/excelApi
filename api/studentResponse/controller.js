const StudentResponse = require ('./model')


module.exports.setStudentResponse = function (req, res) {
    let studentResponse = new StudentResponse ({
        questionId: req.body.questionId,
        answer: req.body.answer
    })
    
    StudentResponse.create (studentResponse).then ( (ans)=> {
        res.status (201)
        res.send({_id: ans._id})
    }).catch( (err)=> {
        res.send(err)
    }) 
}


module.exports.getStudentResponse = function (req, res)  {
    StudentResponse.find({_id: req.params.id}, {"__v": 0}).then ( (ans) => {
        res.json (ans)
    })
}

/*
module.exports.getStudentResponseById = function  (req, res) {
    StudentResponse.findOne ({_id: req.params.id}).then ( (ans) => {
        res.json(ans)
    })
}

module.exports.deleteStudentResponse = function (req, res) {
    StudentResponse.findByIdAndRemove ({_id: req.params.id}).then ( (ans) => {
        res.json(ans)
    })
}
*/
