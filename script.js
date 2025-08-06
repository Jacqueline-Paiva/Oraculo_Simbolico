const mensagens = {
  1: "A luz que você busca está dentro de você. Acenda de novo.",
  2: "Alguns caminhos são silenciosos porque são só seus. Continue.",
  3: "Hoje é um bom dia para rir de si mesma. Sério.",
  4: "O que parece caos pode ser semente. Regue com paciência.",
  5: "Você não precisa saber tudo. Só precisa continuar sentindo.",
  6: "Teu afeto muda o mundo mesmo quando você não vê.",
  7: "Há dias em que sobreviver já é um milagre completo.",
  8: "A sua existência já é resposta para alguma pergunta do universo.",
  9: "Entre o sim e o não, existe o talvez que te salva.",
  10: "O medo grita, mas a intuição sussurra. Abaixe o volume.",
  11: "Se der saudade, escreva. Se der amor, mostre. Se doer, acolha.",
  12: "Tudo que te emociona também te molda.",
  13: "Não é drama. É intensidade sem manual.",
  14: "Você é feita de matéria rara: sonho, falha e coragem.",
  15: "Às vezes, é só o mundo te pedindo pausa com jeitinho torto.",
  16: "Você não é demais. Eles é que estão de menos.",
  17: "Existe poesia até no cansaço — mas você precisa parar para ouvir.",
  18: "O que você sente não é exagero. É presença.",
  19: "Respira. Você sobreviveu a outras tempestades sem saber nadar.",
  20: "Tem dia que tudo parece muito. E tá tudo bem parecer.",
  21: "A bagunça que você sente hoje é só o começo de uma nova ordem.",
  22: "Duvide do mundo, mas nunca do seu sentir.",
  23: "O corpo sabe. Escute antes que ele grite.",
  24: "Às vezes o silêncio é só sua alma tirando férias dos ruídos.",
  25: "Seu tempo é outro. Não se apresse para caber onde não cabe.",
  26: "Há beleza nas pausas. Até a música precisa de silêncio.",
  27: "Se ninguém te entendeu hoje, entenda-se. Já é revolução.",
  28: "O amor que você procura talvez esteja escondido no seu espelho.",
  29: "Você não está atrasada. Está no ritmo da sua história.",
  30: "Se você sente que está desmoronando, talvez esteja só trocando de forma.",
  31: "O erro de ontem foi só ensaio para o acerto de amanhã.",
  32: "Sua sensibilidade não é fraqueza. É radar para o invisível.",
  33: "Às vezes, é no quase que a gente encontra o que importa.",
  34: "Só quem já se perdeu sabe o caminho de volta para casa.",
  35: "Tem dores que ensinam a florir onde não era para nascer nada.",
  36: "Você não precisa ser forte o tempo todo. Só precisa ser real.",
  37: "A vulnerabilidade é uma armadura disfarçada de pele.",
  38: "Se hoje não deu, amanhã é outro palco.",
  39: "Quem sente demais também ama mais bonito.",
  40: "Há uma versão sua que já passou por isso. Ela venceu.",
  41: "Você não é um problema a ser resolvido, é um mistério a ser vivido.",
  42: "Seu brilho incomoda? Use como lanterna para quem anda no escuro.",
  43: "O mundo pode até não notar, mas sua alma sente tudo.",
  44: "Não subestime a força de continuar quando tudo diz para parar.",
  45: "Tem algo em você que sobrevive até sem aplauso.",
  46: "Ser intensa não é defeito — é forma de existir por inteiro.",
  47: "A dor que você sente agora é só uma carta do seu corpo pedindo cuidado.",
  48: "O cansaço de hoje não invalida a sua coragem de sempre.",
  49: "O que parece retrocesso às vezes é impulso disfarçado.",
  50: "Se o mundo for cruel hoje, lembre-se: você já sobreviveu a dias piores com menos poesia.",
};


function consultarOraculo() {
  const input = document.getElementById("numero");
  const valor = parseInt(input.value);
  const respostaDiv = document.getElementById("resposta");

  if (isNaN(valor) || valor < 1 || valor > 50) {
    respostaDiv.textContent = "Por favor, digite um número entre 1 e 50.";
    return;
  }
function limparCampos() {
  document.getElementById("numero").value = "";
  document.getElementById("resposta").textContent = "";
}

  const mensagem = mensagens[valor] || "Esse número ainda não tem resposta. Talvez seja você quem deve escrevê-la.";
  respostaDiv.textContent = mensagem;
}
