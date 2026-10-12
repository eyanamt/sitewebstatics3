// Ajoute un bouton « Copier » sur chaque bloc de code.
document.querySelectorAll('.code').forEach(function (block) {
  var button = document.createElement('button');
  button.type = 'button';
  button.className = 'copy';
  button.textContent = 'Copier';
  button.addEventListener('click', function () {
    navigator.clipboard.writeText(block.querySelector('code').textContent).then(function () {
      button.textContent = 'Copié';
      setTimeout(function () { button.textContent = 'Copier'; }, 1500);
    });
  });
  block.appendChild(button);
});
