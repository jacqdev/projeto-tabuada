let acertos = 0;
let totalPerguntas = 0;

function iniciarQuiz() {
  const numero = parseInt(document.getElementById('numero').value);
  const quizArea = document.getElementById('quiz-area');
  quizArea.innerHTML = '';
  acertos = 0;
  totalPerguntas = 0;

  if (isNaN(numero)) {
    quizArea.innerHTML = '<p>Por favor, digite um número válido.</p>';
    return;
  }

  for (let i = 1; i <= 10; i++) {
    const resultadoCorreto = numero * i;
    const mostrarErro = Math.random() < 0.5;
    const resultadoMostrado = mostrarErro
      ? resultadoCorreto + Math.floor(Math.random() * 5 + 1)
      : resultadoCorreto;

    const perguntaDiv = document.createElement('div');
    perguntaDiv.className = 'quiz-item';
    perguntaDiv.innerHTML = `
      <p>${numero} × ${i} = ${resultadoMostrado}</p>
      <button onclick="verificar(${resultadoCorreto}, ${resultadoMostrado}, true, this)">Está certo</button>
      <button onclick="verificar(${resultadoCorreto}, ${resultadoMostrado}, false, this)">Está errado</button>
    `;
    quizArea.appendChild(perguntaDiv);
  }

  const finalizarBtn = document.createElement('button');
  finalizarBtn.textContent = "Finalizar Quiz";
  finalizarBtn.style.marginTop = "1rem";
  finalizarBtn.onclick = mostrarResultado;
  quizArea.appendChild(finalizarBtn);
}

function verificar(correto, mostrado, jogadorDisseQueEstaCerto, btn) {
  const realEstaCerto = mostrado === correto;
  const usuarioAcertou =
    (realEstaCerto && jogadorDisseQueEstaCerto) ||
    (!realEstaCerto && !jogadorDisseQueEstaCerto);

  totalPerguntas++;
  if (usuarioAcertou) acertos++;

  const resposta = usuarioAcertou
    ? "✔️ Boa, você acertou!"
    : `❌ Ops! Resposta errada. O correto seria ${correto}`;

  const resultadoDiv = document.createElement('p');
  resultadoDiv.textContent = resposta;
  resultadoDiv.style.marginTop = "0.5rem";
  resultadoDiv.style.fontWeight = "bold";
  resultadoDiv.style.color = usuarioAcertou ? "green" : "red";
  btn.parentElement.appendChild(resultadoDiv);

  const botoes = btn.parentElement.querySelectorAll('button');
  botoes.forEach(b => b.disabled = true);
}

function mostrarResultado() {
  const quizArea = document.getElementById('quiz-area');
  const resultadoFinal = document.createElement('div');
  resultadoFinal.className = 'resultado-final';
  resultadoFinal.innerHTML = `
    <hr>
    <p>🎯 Você acertou ${acertos} de ${totalPerguntas}!</p>
    <p>${mensagemDesempenho(acertos)}</p>
  `;
  quizArea.appendChild(resultadoFinal);
}

function mensagemDesempenho(acertos) {
  if (acertos === 10) {
    return "🌟 Você é um mestre da tabuada!";
  } else if (acertos >= 7) {
    return "👏 Muito bem, quase lá!";
  } else {
    return "🤔 Vamos praticar mais e tentar de novo!";
  }
}
