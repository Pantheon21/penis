var vidas = 5;
var vitoria = 0;

function texto (ronaldo) {
    document.write("<p class='texto'>"+ronaldo+"</p>");
}
texto("Olá invocador, eu comprei um item, você conseguirá adivinhar qual é?");

listaItens = 
[
'Coroa da Rainha Despedaçada',
'Ruptor Divino',
'Crepúsculo de Draktharr',
'Eclipse',
'Proteção imutável',
'Glacieterno',
'Força do vendaval',
'Hemodrenário',
'Coração de aço',
'Explocinturão Hextec',
'Manopla dos glacinatas',
'Arco-escudo Imortal',
'Mandato Imperial',
'JakSho, o inconstante',
'Mata-Krákens',
'Angústia de Liandry',
'Medalhão dos Solari de Ferro',
'Tempestade de Luden',
'Regenerador de pedra lunar',
'Colhedor Noturno',
'Garra do Espreitador',
'Virtude Radiante',
'Cria-fendas',
'Bastão das Eras',
'Hino Bélico de Shurelya',
'Quebra-passos',
'Força da Trindade',
'Máscara abissal',
'Correntes de Anátema',
'Cajado do Arcanjo',
'Turíbulo ardente',
'Arco do Axioma',
'Véu da Banshee',
'Cutelo negro',
'Foice da Névoa Negra',
'Espada do Rei Destruído',
'Sedenta por sangue',
'Bastião da montanha',
'Serrespada Quimiopunk',
'Putrificador quimtech',
'Ímpeto cósmico',
'Couraça do defunto',
'Dança da morte',
'Abraço Demoníaco',
'Limiar da Noite',
'Colhedor de Essência',
'Força da natureza',
'Coração congelado',
'Placa gargolítica',
'Anjo guardião',
'Lâmina da Fúria de Guinsoo',
'Foco do horizonte',
'Quebra-cascos',
'Gume do infinito',
'Juramento do cavaleiro',
'Perdição de lich',
'Lembranças de Lorde Dominik',
'Manamune',
'Mandíbula de Malmortius',
'Ladrão de Almas Mejai',
'Cimitarra Mercurial',
'Bênção de Mikael',
'Morellonomicon',
'Lembrete Mortal',
'Dente de Nashor',
'Lâminas rápidas navori',
'Ombreiras de Pedralva',
'Dançarina fantasma',
'Capuz da Morte de Rabadon',
'Presságio de Randuin',
'Canhão fumegante',
'Hidra Raivosa',
'Redenção' ,
'Furacão de Runaan',
'Cetro de Cristal de Rylai',
'Presa da Serpente',
'Rancor de Serylda',
'Chama sombria',
'Estilhaço de Gelo Verdadeiro',
'Alvorada de Pratânia',
'Lança de Shojin',
'Semblante Espiritual',
'Cajado Aquafluxo',
'Sinal de sterak',
'Chuva de canivete',
'Égide de fogo solar',
'A coletora',
'Armadura de Espinhos',
'Hidra titânica',
'Quimiotanque turbo',
'Glaive Sombria',
'Pedra-Vigia Vigilante',
'Cajado do Vazio',
'Armadura de Warmog',
'Aproximação invernal',
'Limite da Razão',
'Lâmina Fantasma de Youmuu',
'Convergência de Zeke',
'Ampulheta de Zhonya',
]
function verResposta () {
    var chute = document.getElementById("chute").value;
    while (vidas > 0) {
      if (vitoria == 1){
        document.getElementsByClassName("texto")[0].innerHTML= "Já ganhou por favor para ou eu irei comer seu cu";
        break;
      }
      if (chute != itemComprado) {
        document.getElementsByClassName("texto")[0].innerHTML= "Errou tente outra vez";
        vidas = vidas - 1;
        break;
      }
      else {
        document.getElementsByClassName("texto")[0].innerHTML= "Meus parabéns invocador, você advinhou";
        vitoria = vitoria + 1;
        break;
      }
    }
    if (vidas == 0) {
      document.getElementsByClassName("texto")[0].innerHTML= "CHEGA VOCÊ JÁ PERDEU FDP - mattheaus, 2023";
    }
  }
  function escreverItens() {
      for(var i=0; i<listaItens.length; i=i+1) {
      
        document.write('<option value="'+ listaItens[i] +'"></option>');
      }
  }
  
  itemComprado = listaItens[Math.floor(Math.random() * listaItens.length)];
  console.log(itemComprado);