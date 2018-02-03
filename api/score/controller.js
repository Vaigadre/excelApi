const Score = require('./model')
const scoreData = require("../scoreData");
const getEHRScore = require("../getEHRScore");
const unscramble = require("../../unscramble");
const Answer = require("../answer/model");
const Question = require("../stateQuestion/model");
const StudentResponse = require("../studentResponse/model");

function getQuestion(id, cb) {
    Question.findOne({ _id: id }, { "__v": 0 }, (err, res) => {
        // console.log("getQuestion: " + res);
        // que.state;
        // console.log("Getting question with Question ID: " + id);
        cb(err, res._doc)
    })
}

function getAnswer(id, cb) {
    Answer.findOne({ questionId: id }, { "__v": 0 }, (err, ans) => {
        cb(err, ans._doc);
    })
}

function getStudentResponse(id, cb) {
    StudentResponse.findOne({ questionId: id }, { "__v": 0 }, (err, stuRes) => {
        cb(err, stuRes._doc);
    })
}



module.exports.getScore = function (req, res) {
    //Add descramble logic here to get state, ans and student response
    const promises = [
        Question.findOne({ _id: req.params.id }, { "__v": 0 }), 
        Answer.findOne({ questionId: req.params.id }, { "__v": 0 }),
        StudentResponse.findOne({ questionId: req.params.id }, { "__v": 0 }) 
    ];

    Promise.all(promises).then ( values => {
        let state = JSON.parse(unscramble(values[0].state)),
         correctAns = JSON.parse(unscramble(values[1].answer)),
         studentAns = JSON.parse(unscramble(values[2].answer));
         res.json({ Score: getEHRScore(correctAns, studentAns, state.design.question.type, state.design.grade.type, 'score')});
      }).catch( err=> {
        res.json({err: "promise failed with " + err})
     });

    // getQuestion(req.params.id, function (err, que) {
    //     // console.log(JSON.stringify(que) + "\n")
    //     getAnswer(req.params.id, (err, ans) => {
    //         //console.log(JSON.stringify(ans) + "\n");
    //         getStudentResponse(req.params.id, (err, studentRes) => {
    //             let state = JSON.parse(unscramble(que.state)),
    //                 correctAns = JSON.parse(unscramble(ans.answer)),
    //                 studentAns = JSON.parse(unscramble(studentRes.answer));
    //             // console.log(JSON.parse(state))
    //             res.json({ Score: getEHRScore(correctAns, studentAns, state.design.question.type, state.design.grade.type, 'score') })
    //         })
    //     })
    // });
   //    res.json({ Score: getEHRScore(scoreData.que, scoreData.ans, 'demo', '1', 'score') });
}









/*
module.exports.setScore = function (req, res) {
    // let score = new Score ({
    //     question: req.body.question,
    //     score: req.body.score,
    //     total: req.body.total
    // })

    Score.create(req.body).then(function (result) {
        res.json(result);
    })
}

module.exports.updateScore = function (req, res) {
    Score.findByIdAndUpdate({ _id: req.params.id }, req.body).then((result) => {
        res.json(result);
    })
}


module.exports.getScoreById = function (req, res) {
    Score.findOne({ _id: req.params.id }).then((result) => {
        res.json(result)
    })
}

module.exports.deleteScore = function (req, res) {
    Score.findByIdAndRemove({ _id: req.params.id }).then((result) => {
        res.json(result)
    })
}
*/
