document.addEventListener("DOMContentLoaded", function() {
    let currentQuestion = 0;
    let questions = [
        "Should the king trust the advisor?",
        "Should the king spare the rebel?",
        "Should the king wage war against the neighboring kingdom?"
    ];

    let answers = [
        "Yes, trust the advisor.",
        "No, punish the rebel.",
        "Yes, fight for glory."
    ];

    const questionElement = document.getElementById("question");
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");

    // Function to display the question
    function showQuestion() {
        questionElement.innerHTML = questions[currentQuestion];
    }

    // Handle the answer when 'Yes' is clicked
    yesButton.addEventListener("click", function() {
        alert(answers[currentQuestion]);
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            alert("Game over! Congratulations on making it through the questions.");
        }
    });

    // Handle the answer when 'No' is clicked
    noButton.addEventListener("click", function() {
        alert("You chose 'No'. The kingdom is in peril!");
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            alert("Game over! Congratulations on making it through the questions.");
        }
    });

    // Show the first question
    showQuestion();
});
