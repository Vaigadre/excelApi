const Score = require ('./model')


module.exports.getScores = function (req, res) {
    Score.find({}, {"__v": 0}).then( (result)=> {
       res.json(result)
    })
}

module.exports.setScore = function (req, res) {
    // let score = new Score ({
    //     question: req.body.question,
    //     score: req.body.score,
    //     total: req.body.total
    // })

    Score.create(req.body).then(function(result){
        res.json(result);    
    })
}

module.exports.updateScore = function  (req, res) {
    Score.findByIdAndUpdate ({_id: req.params.id}, req.body).then ( (result) => {
        res.json(result)
    })
}


module.exports.getScoreById = function  (req, res) {
    Score.findOne ({_id: req.params.id}).then ( (result) => {
        res.json(result)
    })
}

module.exports.deleteScore = function  (req, res) {
    Score.findByIdAndRemove ({_id: req.params.id}).then ((result) => {
        res.json(result)
    })
}
