module.exports.que = {
    "path": [{
        "id": 1,
        "type": "m",
        "steps": [{
            "step": "Click on 'New appointment' button",
            "stepId": "SCH_0005",
            "data": "",
            "isShiftkey": false,
            "clickCount": 1
        }, {
            "step": "Click on 'Search Patient' field",
            "stepId": "PASI_0601",
            "data": "",
            "isShiftkey": false,
            "clickCount": 1
        }, {
            "step": "Type 'dae' in 'Search Patient' field",
            "stepId": "PASI_0601",
            "data": "dae",
            "isShiftkey": false,
            "clickCount": 1
        }, {
            "step": "Choose 'Dae Kim' Patient",
            "stepId": "PAS_ASEPA_AA005",
            "data": "",
            "isShiftkey": false,
            "clickCount": 1
        }, {
            "step": "Click on 'Reason for visit' field",
            "stepId": "SCH_0021",
            "data": "",
            "isShiftkey": false,
            "clickCount": 1
        }, {
            "step": "Type 'a' in 'Reason for visit' field",
            "stepId": "SCH_0021",
            "data": "a",
            "isShiftkey": false,
            "clickCount": 1
        }, {
            "step": "Click on 'Schedule' button",
            "stepId": "SCH_0024",
            "data": "",
            "isShiftkey": false,
            "clickCount": 1
        }],
        "startRecording": true,
        "stopRecording": true,
        "answerObject": [{
            "Id": "cb1e",
            "Header": "Create appointment",
            "Patient name": "Dae  Kim",
            "Provider name": "Dr. Sarala Kumar",
            "Appointment type": "New appointment",
            "Date and time": "Tue Jan 09 2018 00:00:00",
            "Duration": "00:15",
            "End time": "Tue Jan 09 2018 00:15:00",
            "Reason for visit": "a",
            "Appointment status": "Pending",
            "Status": "New"
        }],
        "randomIds": ["cb1e"]
    }],
    "createNewPath": true,
    "defaultPathIndex": 0,
    "defaultSelectedPath": "path 1"
};

module.exports.ans = {
    "stepsCount": 8,
    "questionCompleted": false,
    "isScoringDone": false
};