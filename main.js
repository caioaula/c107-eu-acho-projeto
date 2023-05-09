function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/[...]', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Posso ouvir - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('gato.jpeg') 
    img1 = document.getElementById('cachorro.jpeg')
    img2 = document.getElementById('rato.jpeg')
    img3 = document.getElementById('passarinho.jpeg')
    if (results[0].label == "Palmas") {
      img.src = 'gato.webp';
      img1.src = 'cachorro.jpeg';
      img2.src = 'gato.jpeg';
      img3.src = 'passarinho.jpeg';
    } else if (results[0].label == "Sino") {
      img.src = 'gato.jpeg';
      img1.src = 'cachorro.gif';
      img2.src = 'rato.jpeg';
      img3.src = 'passarinho.jpeg';
    } else if (results[0].label == "Estalos") {
      img.src = 'cachorro.jpeg';
      img1.src = 'gato.jpeg';
      img2.src = 'rato.gif';
      img3.src = 'passarinho.jpeg';
    }else{
      img.src = 'cachorro.jpeg';
      img1.src = 'gato.jpeg';
      img2.src = 'rato.jpeg';
      img3.src = 'passaro.gif';
    }
  }
}
