let cauHoi = [{
    'id': 1,
    'question': 'Thực hiện kiểm tra nếu biến “i” không bằng 5, câu lệnh nào là đúng?',
    'answer': [{
        'title': 'if i =! 5 then',
        'isRight': false,
    },
    {
        'title': 'if (i != 5)',
        'isRight': true,
    },
    {
        'title': 'if i <> 5',
        'isRight': false,
    },
    {
        'title': 'if (i <> 5)',
        'isRight': false,
    },
    ],
    'isMultiAnswer': false,
},
{
    'id': 2,
    'question': 'Trong JavaScript hàm parseFloat() dùng để làm gì?',
    'answer': [{
        'title': 'Chuyển một chuỗi thành số nguyên',
        'isRight': false,
    },
    {
        'title': 'Chuyển một số nguyên thành chuỗi',
        'isRight': false,
    },
    {
        'title': 'Chuyển một chuỗi thành số thực',
        'isRight': true,
    },
    {
        'title': 'Chuyển một chuỗi thành số thực',
        'isRight': false,
    },
    ],
    'isMultiAnswer': false,
},
{
    'id': 3,
    'question': `<body onload ="hello()">
                  <script>
                    function hello()
                    {
                    window.open("http://timoday.edu.vn","Chao ban den voi timoday.edu.vn");
                    }
                  </script>
                </body>`,
    'answer': [{
        'title': 'Hiện một trang timoday.edu.vn duy nhất',
        'isRight': false,
    },
    {
        'title': 'Không chạy được vì sai',
        'isRight': false,
    },
    {
        'title': 'Khi chạy thì mở thêm một cửa sổ mới gọi trang timoday.edu.vn',
        'isRight': true,
    },
    {
        'title': 'Khi kết thúc thì một site khác hiện ra',
        'isRight': false,
    },
    ],
    'isMultiAnswer': false,
},
{
    'id': 4,
    'question': `Cách nào để làm tròn 7.25 tới số nguyên gần nhất trong JavaScript?`,
    'answer': [{
        'title': 'Math.rnd(7.25)',
        'isRight': false,
    },
    {
        'title': 'rnd(7.25)',
        'isRight': false,
    },
    {
        'title': 'round(7.25)',
        'isRight': false,
    },
    {
        'title': 'Math.round(7.25)',
        'isRight': true,
    },
    ],
    'isMultiAnswer': false,
},
{
    'id': 5,
    'question': `Dùng cách nào có thể biết được trình duyệt đang được sử dụng tại máy client?`,
    'answer': [{
        'title': 'browser.name',
        'isRight': false,
    },
    {
        'title': 'navigator.appName',
        'isRight': true,
    },
    {
        'title': 'client.navName',
        'isRight': false,
    },
    ],
    'isMultiAnswer': false,
},
];

let suffleCauHoi;

let userResult = 0;

let currentQuestion;
let indexQuestion = 0;
let totalQuestion = 0;

newGame();

function submitAnswer() {
    if (checkHasAnswer()) {
        let nameAnswer = "answer_" + currentQuestion.id;
        let right = true;
        for (let i = 0; i < document.getElementsByName(nameAnswer).length; i++) {
            let answer = document.getElementsByName(nameAnswer)[i];
            if (answer.value.toLowerCase() === 'true' && !answer.checked) {
                right = false;
                break;
            }
        }
        if (right) {
            rightAnswer();
        } else {
            wrongAnswer();
        }
        preParaForNextQuestion();
    } else {
        needAnswerQuestion();
    }
}

function checkHasAnswer() {
    let hasAnswer = false;
    let nameAnswer = "answer_" + currentQuestion.id;
    for (let i = 0; i < document.getElementsByName(nameAnswer).length; i++) {
        let answer = document.getElementsByName(nameAnswer)[i];
        if (answer.checked) {
            hasAnswer = true;
            break;
        }
    }
    return hasAnswer;
}

function nextQuestion() {
    currentQuestion = suffleCauHoi.shift();
    if (currentQuestion) {
        indexQuestion++;
        newQuestion();
        hideResult();
        displayQuestion(currentQuestion, indexQuestion);
    } else {
        finished();
    }
}

function preParaForNextQuestion() {
    document.getElementById('btnSubmitAnswer').style.display = 'none';
    document.getElementById('btnNextQuestion').style.display = 'block';
}

function displayQuestion(cQuestion, indexQuestion) {
    document.getElementById("indexQuestion").innerHTML = indexQuestion;
    document.getElementById("totalQuestion").innerHTML = totalQuestion;
    document.getElementById("contentQuestion").innerHTML = cQuestion.question;
    document.getElementById("answerQuestion").innerHTML = "";
    let tblAnswert = '';
    for (let i = 0; i < cQuestion.answer.length; i++) {
        const answer = cQuestion.answer[i];
        tblAnswert += `<li>
                        <input type="radio" value="${answer.isRight}" id="answer_${indexQuestion}_${i + 1}" name="answer_${cQuestion.id}"/>
                        <label for="answer_${indexQuestion}_${i + 1}">
                        ${answer.title}
                        </label>
                    </li>`;
    }
    document.getElementById("answerQuestion").innerHTML = tblAnswert;
}

function hideResult() {
    document.getElementById("rightAnswer").style.display = 'none';
    document.getElementById("wrongAnswer").style.display = 'none';
    document.getElementById("needAnswer").style.display = 'none';
}

function newQuestion() {
    document.getElementById('btnSubmitAnswer').style.display = 'block';
    document.getElementById("btnNextQuestion").style.display = "none";
}

function rightAnswer() {
    hideResult();
    document.getElementById("rightAnswer").style.display = 'block';
    userResult++;
}

function wrongAnswer() {
    hideResult();
    document.getElementById("wrongAnswer").style.display = 'block';
}

function needAnswerQuestion() {
    hideResult();
    document.getElementById("needAnswer").style.display = 'block';
}

function finished() {
    document.getElementById("playing").style.display = 'none';
    document.getElementById("result").style.display = 'block';
    document.getElementById("userResult").innerHTML =
        "Bạn trả lời đúng " + userResult + " trên " + totalQuestion + " câu hỏi";
}

function newGame() {
    document.getElementById("playing").style.display = 'block';
    document.getElementById("result").style.display = 'none';
    suffleCauHoi = suffleCauHoiF();
    indexQuestion = 0;
    totalQuestion = suffleCauHoi.length;
    nextQuestion();
}

function suffleCauHoiF() {
    let result = JSON.parse(JSON.stringify(cauHoi));
    return result;
}