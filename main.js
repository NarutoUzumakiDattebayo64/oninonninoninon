function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  reconocimiento = ml5.imageClassifier("MobileNet", modelo_listo)
}
function modelo_listo() {
  console.log("estoy listo")
}
function draw() {
  image(video, 0, 0, 300, 300);
  reconocimento.classify(video, resultadoObtenido)
}
function resultadoObtenido(error, resultado) {
  if (!error && resultado[0].confidence > 0.5 && resultadoAnterior != resultado[0].label) {
    document.getElementById("objeto").innerHTML = resultado[0].label
    document.getElementById("confianza").innerHTML = resultado[0].confidence
    hablar(resultado[0].label)
    resultadoAnterior = resultado[0].label;
  }
}



