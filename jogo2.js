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
    var chute = document.getElementById("inputa").value;
    while (vidas > 0) {
      if (vitoria == 1){
        document.getElementsByClassName("texto_segundo")[0].innerHTML= "Já ganhou por favor para ou eu irei comer seu cu";
        break;
      }
      if (chute != personaMorto) {
        document.getElementsByClassName("texto_segundo")[0].innerHTML= "Errou tente outra vez";
        vidas = vidas - 1;
        break;
      }
      else {
        document.getElementsByClassName("texto_segundo")[0].innerHTML= "Meus parabéns invocador, você advinhou";
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