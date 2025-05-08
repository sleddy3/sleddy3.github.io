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
