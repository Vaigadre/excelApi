
module.exports = function getEHRScore (que, ans, questionType, gradeType, scoreType){
    // let questionType='demo', gradeType='1', scoreType='score', que =scoreData.que,
    //  ans =scoreData.ans;
	
	if(!(que && ans)){
		return;
	}

    function scoreCalculation() {
        //var questionType = state.design.question.type;
        if (questionType === 'practice') {
            return (scoreType === 'score') ? practiceScore() : practiceCompletionScore();
        } else if (questionType === 'demo') {
            return (scoreType === 'score') ? demoScore() : demoCompletionScore();
        } else if (questionType === 'case') {
            return (scoreType === 'score') ? 0 : caseCompletionScore();
        } else if (questionType === 'assessment') {
            return (scoreType === 'score') ? assessmentScore() : assessmentCompletionScore();
        }
     //scoreCalculation ends
    }
//Calculate normal Score for all type of question.

    function practiceScore() {
        console.log("------Type: Practice, Score Calculation---------");
        if (!ans.isScoringDone) {   //once student achieves 100% it remains even if he reset's
            if (gradeType === "1") { // for grading type 1 - either 0% or 100%
                if (ans.currentStep === que.path[que.defaultPathIndex].steps.length) {
                    return 100;
                } else {
                    return 0;
                }
            } else if (gradeType === "2") { // for grading type 2 - percentage of completion
                return (ans.currentStep / que.path[que.defaultPathIndex].steps.length) * 100;
            }
        } else {
            return 100;
        }
    } // practice ends

    function demoScore() {
        console.log("------Type: Demo, Score Calculation---------");
        var defaultPath = que.path[que.defaultPathIndex],
            stepsTaken = ans.stepsCount - 1;
        if (!ans.isScoringDone) {   //once student achieves 100% it remains even if he reset's
            if (gradeType === "1") { // for grading type 1 - either 0% or 100%
                if (stepsTaken === defaultPath.steps.length) {
                    return 100;
                } else {
                    return 0;
                }
            } else if (gradeType === "2") { // for grading type 2 - percentage of completion
                return (stepsTaken / defaultPath.steps.length) * 100;
            }
        } else {
            return 100;
        }
    } // demo ends

    function assessmentScore() {
        console.log("------Type: Assessment, Score Calculation---------");
        var authAnswerLength = que.path[que.defaultPathIndex].answerObject.length,
            stuAnswerLength = ans.path.correctAnswerCount;
        if (stuAnswerLength === authAnswerLength) {
            //If students answer object matched with all author anser object set score 100 otherwise 0
            return 100;
        } else {
            return 0;
        }
    }//assessment Ends    

    return scoreCalculation();
}