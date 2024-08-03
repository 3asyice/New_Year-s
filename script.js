function verificarCredenciaiss() {
  const user = document.getElementById('username').value;
  const pwd = document.getElementById('password').value;

  if (user === "lixo" && pwd === "soares") {
    // Armazene a informação de login (não seguro)
    localStorage.setItem('loggedIn', 'true');
    window.location.href = "https://www.big-loser.site"; // Redirecionamento para o novo domínio
  } else {
    alert('Senha ou usuário incorreto!');
  }
}
