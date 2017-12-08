const StateQuestion = require ('./model')


module.exports.setStateQue = function (req, res) {
    let que = new StateQuestion ({
        name: req.body.name,
        state: req.body.state,
        gradedCells: req.body.gradedCells
    })

    StateQuestion.create(que).then( (que) =>{
        res.status (201)
        res.send({_id:que._id})          
    }).catch( (err) => {
       res.send(err)
    })
}



module.exports.getStateQueById = function (req, res) {
    StateQuestion.findOne ( {_id: req.params.id},  {"__v": 0}).then ((que) => {
        res.json(que)
    }).catch ( (err) => {
       res.send(err)
    })
}



/*
module.exports.getStateQue = function (req, res) {
    StateQuestion.find({}, {"__v": 0}).then( (que)=> {
        res.json(que)
    })
}

module.exports.updateStateQue = function (req, res) {
    StateQuestion.findByIdAndUpdate ( {_id: req.params.id}, req.body).then ( (que) => {
        res.json(que)
    })
}

module.exports.deleteStateQue = function (req, res) {
    StateQuestion.findByIdAndRemove ( {_id: req.params.id}).then ( (que) => {
        res.json(que)
    })
}
*/