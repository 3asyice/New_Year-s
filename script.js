function verificarCredenciaiss() {
  const user = document.getElementById('username').value;
  const pwd = document.getElementById('password').value;

  if (user === "6° Brigada de Infantaria Blindada" && pwd === "Jack") {
    // Armazene a informação de login (não seguro)
    localStorage.setItem('loggedIn', 'true');
    window.location.href = "https://www.big-loser.site"; // Redirecionamento para o novo domínio
  } else {
    alert('Senha ou usuário incorreto!');
  }
}
