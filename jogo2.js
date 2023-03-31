var vidas = 5;
var vitoria = 0;

function texto (ronaldo) {
    document.write("<p class='texto_segundo'>"+ronaldo+"</p>");
}
texto("Olá vagabundokkkkkk, próxima sessão alguém vai morrer, quem?");

listaPersonas = 
[
 'Dio', 'Saru', 'Erwin', 'Apolo 1', 'Nix', 'Kevin', 'Sett', 'Joseph', 'Bismark', 'Razor', 'Caedes', 'Arthas', 'Apolo 2', 'Jhin', 'Talon', 'Johnny', 'Fenila', 'Loss', 'Lissa', 'Zacari', 'Artur', 'Yuu', 'Asta', 'Ártur 3', 'Placiduzax', 'Amon', 'Zoro', 'Rasputin',
]

function verResposta () {
    var input = document.querySelector("input");
    
    var chute = document.getElementById("inputa").value;
    while (vidas > 0) {
      if (vitoria == 1){
        document.getElementsByClassName("texto_segundo")[0].innerHTML= "Se já ganhou fi de quenga";
        break;
      }
      if (chute != personaMorto) {
        vidas = vidas - 1;
        document.getElementsByClassName("texto_segundo")[0].innerHTML= "Errou tenta de novo vagabundo kkkkkkkkk, tu tem mais "+vidas+" chances";
        input.value = "";
        input.focus();
        break;
      }
      else {
        document.getElementsByClassName("texto_segundo")[0].innerHTML= "Parabéns você acertou agora vire uma loli";
        vitoria = vitoria + 1;
        break;
      }
    }
    if (vidas == 0) {
      document.getElementsByClassName("texto_segundo")[0].innerHTML= "CHEGA VOCÊ JÁ PERDEU FDP - mattheaus, 2023";
    }
  }
  function escreverPersona() {
      for(var i=0; i<listaPersonas.length; i=i+1) {
      
        document.write('<option value="'+ listaPersonas[i] +'"></option>');
      }
  }
  
  personaMorto = listaPersonas[Math.floor(Math.random() * listaPersonas.length)];
  console.log(personaMorto);
