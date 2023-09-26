let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: white;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: white;"> Las mejores flores de la ciudad </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();