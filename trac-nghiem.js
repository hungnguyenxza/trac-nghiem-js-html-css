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
        'title': 'Chuyển một số thực thành chuỗi',
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
                            window.open("http://mindx.edu.vn","Chao ban den voi MindX.edu.vn");
                        }
                    </script>
                </body>`,
    'answer': [{
        'title': 'Hiện một trang mindx.edu.vn duy nhất',
        'isRight': false,
    },
    {
        'title': 'Không chạy được vì sai',
        'isRight': false,
    },
    {
        'title': 'Khi chạy thì mở thêm một cửa sổ mới gọi trang mindx.edu.vn',
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
{
    'id': 6,
    'question': `JavaScript là ngôn ngữ xử lý ở đâu?`,
    'answer': [{
        'title': 'Cả server và client',
        'isRight': false,
    },
    {
        'title': 'Không ở dạng nào',
        'isRight': false,
    },
    {
        'title': 'Client',
        'isRight': true,
    },
    {
        'title': 'Server',
        'isRight': false,
    },
    ],
    'isMultiAnswer': false,
},
{
    'id': 7,
    'question': `Nơi bạn có thể đặt code JavaScript trong trang web?`,
    'answer': [{
        'title': 'Bạn có thể đặt trong phần <head> hoặc <body>',
        'isRight': true,
    },
    {
        'title': 'Chỉ trong phần <head>',
        'isRight': false,
    },
    {
        'title': 'Chỉ trong phần <body>',
        'isRight': false,
    },
    ],
    'isMultiAnswer': false,
},
{
    'id': 8,
    'question': `JavaScript là ngôn ngữ dịch mã nguồn theo kiểu nào?`,
    'answer': [{
        'title': 'Cả hai dạng biên dịch và thông dịch',
        'isRight': true,
    },
    {
        'title': 'Biên dịch',
        'isRight': false,
    },
    {
        'title': 'Thông dịch',
        'isRight': false,
    },
    {
        'title': 'Không có dạng nào ở trên',
        'isRight': false,
    },
    ],
    'isMultiAnswer': false,
},
{
    'id': 9,
    'question': `Cách khai báo mảng nào trong JavaScript là đúng?`,
    'answer': [{
        'title': 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
        'isRight': false,
    },
    {
        'title': 'var colors = "red", "green", "blue"',
        'isRight': false,
    },
    {
        'title': 'var colors = ["red", "green", "blue"]',
        'isRight': true,
    },
    {
        'title': 'var colors = (1:"red", 2:"green", 3:"blue")',
        'isRight': false,
    },
    ],
    'isMultiAnswer': false,
},
{
    'id': 10,
    'question': `Câu lệnh break kết hợp với vòng lặp để làm gì?`,
    'answer': [{
        'title': 'Ngưng vòng lặp nếu gặp lệnh này',
        'isRight': true,
    },
    {
        'title': 'Không thể kết hợp được',
        'isRight': false,
    },
    {
        'title': 'Không có ý nghĩa gì trong vòng lặp',
        'isRight': false,
    },
    {
        'title': 'Nhảy đến một tập lệnh khác',
        'isRight': false,
    },
    ],
    'isMultiAnswer': false,
},
];

let rightAnswerMessages = [
    `Yeahhh! Chính xác <i class="far fa-2x fa-laugh-squint"></i>`,
    `Wow, ghê đấy <i class="far fa-2x fa-grin-stars"></i>`,
    `Bạn đã trả lời đúng! <i class="far fa-2x fa-kiss"></i>`,
    `Ngon, tiếp nào... <i class="far fa-2x fa-grin-alt"></i>`,
]

let wrongAnswerMessages = [
    `Hả? Sai rồi. <i class="far fa-2x fa-flushed"></i>`,
    `Sai rồi nha. Cố lên <i class="far fa-2x fa-grin-beam-sweat"></i>`,
    `Bạn đã trả lời sai! <i class="far fa-2x fa-meh"></i>`,
    `Có gì đó không đúng? <i class="far fa-2x fa-meh-rolling-eyes"></i>`,
]

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
    document.getElementById("contentQuestion").innerHTML = standardContentQuestion(cQuestion.question);
    document.getElementById("answerQuestion").innerHTML = "";
    let tblAnswert = '';
    if(cQuestion.isMultiAnswer){
        for (let i = 0; i < cQuestion.answer.length; i++) {
            const answer = cQuestion.answer[i];
            tblAnswert += `<li>
                            <input class="hidden" type="checkbox" value="${answer.isRight}" id="answer_${indexQuestion}_${i + 1}" name="answer_${cQuestion.id}"/>
                            <label class="w-100p m-0 py-1" for="answer_${indexQuestion}_${i + 1}">
                                ${standardContentQuestion(answer.title)}
                            </label>
                        </li>`;
        }
    }else{
        for (let i = 0; i < cQuestion.answer.length; i++) {
            const answer = cQuestion.answer[i];
            tblAnswert += `<li>
                            <input class="hidden" type="radio" value="${answer.isRight}" id="answer_${indexQuestion}_${i + 1}" name="answer_${cQuestion.id}"/>
                            <label class="w-100p m-0 py-1" for="answer_${indexQuestion}_${i + 1}">
                                ${standardContentQuestion(answer.title)}
                            </label>
                        </li>`;
        }
    }
    document.getElementById("answerQuestion").innerHTML = tblAnswert;
}

function standardContentQuestion(content){
    return content.replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
}

function onToggleSelected(e){
    console.dir(e.target.parentElement);
    e.target.parentElement.classList.toggle('selected');
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
    document.getElementById("rightAnswer").innerHTML = getRandomMessage(rightAnswerMessages);
    userResult++;
}

function getRandomMessage(listMessages){
    let ran = Math.floor(Math.random() * listMessages.length);
    return listMessages[ran];
}



function wrongAnswer() {
    hideResult();
    document.getElementById("wrongAnswer").style.display = 'block';
    document.getElementById("wrongAnswer").innerHTML = getRandomMessage(wrongAnswerMessages);
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
    userResult = 0;
    totalQuestion = suffleCauHoi.length;
    nextQuestion();
}

function suffleCauHoiF() {
    let copy = JSON.parse(JSON.stringify(cauHoi));
    let result = [];
    while(copy.length > 0){
        let i = Math.floor(Math.random() * copy.length);
        result.push(copy.splice(i, 1)[0]);
    }
    return result;
}