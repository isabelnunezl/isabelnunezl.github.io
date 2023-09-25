let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #89071c;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #89071c;">Estudiante de Ingeniería en Tecnología de la Información.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
