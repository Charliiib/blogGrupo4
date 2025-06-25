
document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submit-btn");
  const resultDiv = document.getElementById("result");

  submitBtn.addEventListener("click", function () {
    let score = 0;
    const questions = document.querySelectorAll(".question");
    let allAnswered = true;

    questions.forEach((question) => {
      const selectedOption = question.querySelector(
        'input[type="radio"]:checked'
      );
      if (!selectedOption) {
        allAnswered = false;
      }
    });

    if (!allAnswered) {
      resultDiv.textContent =
        "Por favor responde todas las preguntas antes de calcular tu puntaje.";
      resultDiv.style.display = "block";
      resultDiv.className = "low-score";
      return;
    }

    questions.forEach((question) => {
      const selectedOption = question.querySelector(
        'input[type="radio"]:checked'
      );
      score += parseInt(selectedOption.value);
    });

    resultDiv.style.display = "block";

    if (score === 10) {
      resultDiv.innerHTML = `
                        <div class="result-icon"><i class="fas fa-trophy"></i></div>
                        <h2>¡Felicitaciones!</h2>
                        <p>Obtuviste el máximo puntaje: ${score}/10 puntos</p>
                        <p>¡Eres un verdadero experto en nuestro blog!</p>
                    `;
      resultDiv.className = "max-score";
    } else if (score >= 6) {
      resultDiv.innerHTML = `
                        <div class="result-icon"><i class="fas fa-thumbs-up"></i></div>
                        <h2>¡Buen trabajo! </h2>
                        <p>Obtuviste ${score}/10 puntos</p>
                        <p>¡Casi llegas al máximo puntaje!</p>
                    `;
      resultDiv.className = "good-score";
    } else {
      resultDiv.innerHTML = `
                        <div class="result-icon"><i class="fas fa-redo"></i></div>
                        <h2>Resultado: ${score}/10 puntos</h2>
                        <p>Tómate un tiempo para explorar nuestro blog y conocernos mejor.</p>
                        <p>¡Vuelve a intentarlo más tarde!</p>
                    `;
      resultDiv.className = "low-score";
    }
  });
});
