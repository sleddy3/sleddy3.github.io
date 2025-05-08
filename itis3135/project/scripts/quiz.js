function gradeQuiz() {
    const correctAnswers = {
        q1: "str",
        q2: "x = 5",
        q3: "float"
    };
    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;
    const form = document.forms.quizForm;
    for (const question in correctAnswers) {
        const correctAnswer = correctAnswers[question];
        const selectedInput = form[question];
        let selectedValue = "";
        if (selectedInput) {
            selectedValue = selectedInput.value;
        }
        if (selectedValue === correctAnswer) {
            score++;
        }
    }
    const resultDiv = document.getElementById('quizResult');
    resultDiv.textContent = `You got ${score} out of ${totalQuestions} correct!`;
    resultDiv.style.color = score === totalQuestions ? "green" : "orange";
}
function gradeQuiz1() {
    const correctAnswers = {
        q1: "float",
        q2: "str"
    };
    let score = 0;
    const form = document.getElementById("quizForm");
    for (const question in correctAnswers) {
        const selected = form.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === correctAnswers[question]) {
            score++;
        }
    }
    const resultDiv = document.getElementById("quizResult");
    resultDiv.textContent = `You got ${score} out of ${Object.keys(correctAnswers).length} correct!`;
    resultDiv.style.color = score === Object.keys(correctAnswers).length ? "green" : "orange";
}
function gradeQuiz2() {
    const correctAnswers = {
        q1: "x = 5",
        q2: "user_name",
        q3: "int"
    };
    let score = 0;
    const form = document.getElementById("quizForm");
    for (const question in correctAnswers) {
        const selected = form.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === correctAnswers[question]) {
            score++;
        }
    }
    const resultDiv = document.getElementById("quizResult");
    resultDiv.textContent = `You got ${score} out of ${Object.keys(correctAnswers).length} correct!`;
    resultDiv.style.color = score === Object.keys(correctAnswers).length ? "green" : "orange";
}
function operatorsQuiz1() {
    const correctAnswers = {
        q1: "2",
        q2: "8",
        q3: "%" 
    };
    let score = 0;
    const form = document.getElementById("quizForm");
    for (const question in correctAnswers) {
        const selected = form.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === correctAnswers[question]) {
            score++;
        }
    }
    const resultDiv = document.getElementById("quizResult");
    resultDiv.textContent = `You got ${score} out of ${Object.keys(correctAnswers).length} correct!`;
    resultDiv.style.color = score === Object.keys(correctAnswers).length ? "green" : "orange";
}
function operatorsQuiz2() {
    const correctAnswers = {
        q1: "False",
        q2: "==",
        q3: "False" 
    };
    let score = 0;
    const form = document.getElementById("quizForm");
    for (const question in correctAnswers) {
        const selected = form.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === correctAnswers[question]) {
            score++;
        }
    }
    const resultDiv = document.getElementById("quizResult");
    resultDiv.textContent = `You got ${score} out of ${Object.keys(correctAnswers).length} correct!`;
    resultDiv.style.color = score === Object.keys(correctAnswers).length ? "green" : "orange";
}
function operatorsQuiz3 () {
    const correctAnswers = {
        q1: "True",
        q2: "False",
        q3: "or"
    };
    let score = 0;
    const form = document.getElementById("quizForm");
    for (const question in correctAnswers) {
        const selected = form.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === correctAnswers[question]) {
            score++;
        }
    }
    const resultDiv = document.getElementById("quizResult");
    resultDiv.textContent = `You got ${score} out of ${Object.keys(correctAnswers).length} correct!`;
    resultDiv.style.color = score === Object.keys(correctAnswers).length ? "green" : "orange";
}
function gradeQuizControlOne() {
    const correctAnswers = {
        q1: "elif",
        q2: "Yes",
        q3: "x == 5"
    };
    let score = 0;
    const form = document.getElementById("quizForm");
    for (const question in correctAnswers) {
        const selected = form.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === correctAnswers[question]) {
            score++;
        }
    }
    const resultDiv = document.getElementById("quizResult");
    resultDiv.textContent = `You got ${score} out of ${Object.keys(correctAnswers).length} correct!`;
    resultDiv.style.color = score === Object.keys(correctAnswers).length ? "green" : "orange";
}
function gradeQuizControlTwo() {
    const correctAnswers = {
        q1: "for",
        q2: "Skip to the next iteration",
        q3: "1 2 3"
    };
    let score = 0;
    const form = document.getElementById("quizForm");
    for (const question in correctAnswers) {
        const selected = form.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === correctAnswers[question]) {
            score++;
        }
    }
    const resultDiv = document.getElementById("quizResult");
    resultDiv.textContent = `You got ${score} out of ${Object.keys(correctAnswers).length} correct!`;
    resultDiv.style.color = score === Object.keys(correctAnswers).length ? "green" : "orange";
}
function gradeQuizDefining() {
    const correctAnswers = {
        q1: "def",
        q2: "Adds a and b",
        q3: "Hello, wizard!"
    };
    let score = 0;
    const form = document.getElementById("quizForm");
    for (const question in correctAnswers) {
        const selected = form.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === correctAnswers[question]) {
            score++;
        }
    }
    const resultDiv = document.getElementById("quizResult");
    resultDiv.textContent = `You got ${score} out of ${Object.keys(correctAnswers).length} correct!`;
    resultDiv.style.color = score === Object.keys(correctAnswers).length ? "green" : "orange";
}
function gradeQuizCalling() {
    const correctAnswers = {
        q1: "magic()",
        q2: "Boom!",
        q3: "You get an error"
    };
    let score = 0;
    const form = document.getElementById("quizForm");
    for (const question in correctAnswers) {
        const selected = form.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === correctAnswers[question]) {
            score++;
        }
    }
    const resultDiv = document.getElementById("quizResult");
    resultDiv.textContent = `You got ${score} out of ${Object.keys(correctAnswers).length} correct!`;
    resultDiv.style.color = score === Object.keys(correctAnswers).length ? "green" : "orange";
}
function gradeQuizLists() {
    const correctAnswers = {
        q1: '["apple", "banana", "cherry"]',
        q2: "Invisibility",
        q3: "The number of items"
    };
    let score = 0;
    const form = document.getElementById("quizForm");
    for (const question in correctAnswers) {
        const selected = form.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === correctAnswers[question]) {
            score++;
        }
    }
    const resultDiv = document.getElementById("quizResult");
    resultDiv.textContent = `You got ${score} out of ${Object.keys(correctAnswers).length} correct!`;
    resultDiv.style.color = score === Object.keys(correctAnswers).length ? "green" : "orange";
}
function gradeQuizDicts() {
    const correctAnswers = {
        q1: "A collection of key-value pairs",
        q2: "dict['key']",
        q3: "dict.get('key')"
    };
    let score = 0;
    const form = document.getElementById("quizForm");
    for (const question in correctAnswers) {
        const selected = form.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === correctAnswers[question]) {
            score++;
        }
    }
    const resultDiv = document.getElementById("quizResult");
    resultDiv.textContent = `You got ${score} out of ${Object.keys(correctAnswers).length} correct!`;
    resultDiv.style.color = score === Object.keys(correctAnswers).length ? "green" : "orange";
}


