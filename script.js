document.getElementById("formContato").addEventListener("submit", function(e) {
  e.preventDefault();

  // Captura os dados do formulário
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  // Exibe um status de envio
  const statusDiv = document.getElementById("status");

  if (nome && email && mensagem) {
    statusDiv.textContent = "Mensagem enviada com sucesso!";
    statusDiv.style.color = "green";
    // Aqui você pode adicionar a lógica para enviar os dados para um servidor, por exemplo.
  } else {
    statusDiv.textContent = "Por favor, preencha todos os campos.";
    statusDiv.style.color = "red";
  }
});