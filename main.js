
  // Typing Effect
  const texts = ["Design", "Develop", "Deliver"];
  let count = 0, i = 0, currentText = '', letter = '';
  function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++i);
    document.getElementById("typed-text").textContent = letter;
    if (letter.length === currentText.length) {
      count++;
      i = 0;
    }
    setTimeout(type, 200);
  }
  type();

  // Dark Mode
  document.getElementById("mode-toggle").onclick = function () {
    document.body.classList.toggle("dark-mode");
  };

 




