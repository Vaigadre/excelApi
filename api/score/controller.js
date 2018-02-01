const Score = require ('./model')
const scoreData = require ("../scoreData");
const getEHRScore = require ("../getEHRScore");


module.exports.getScores = function (req, res) {
    //Add descramble logic here to get state, ans and student response
    res.json({Score: getEHRScore(scoreData.que, scoreData.ans, 'demo', '1', 'score')});
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
        res.json(result);
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
