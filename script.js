var g = document.getElementById('i');
    var h = false;
    
    function d() {
      h = !h;
      g.style.display = h ?
      'block' : 'none';
    }
   

function c() {

  const a = document.getElementById('x').value;
  const b = document.getElementById('y').value;
  if (a === 'Base Administrativa da Guarnição de Santa Maria' && b === 'tyler') {
    localStorage.setItem('usuarioAutenticado', 'true');
    window.location.href = 'https://www.big-loser.site';
  } else {
    document.getElementById('mistake').play();
    alert('Eu sou a mensagem de erro deste site.');
  }
}
