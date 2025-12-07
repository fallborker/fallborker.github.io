function createTitle(title, ...artits) {
  return `${title} - ${artits.join(', ')}`;
}

const chico = 'Chico Buarque';
const alarcon = 'Rodrigo Alarcon'
const liniker = 'Liniker'
const hooker = 'Johnny Hooker'
const vvv = 'Venere Vai Venus'
const pullovers = 'Pullovers'
const linkzap = 'Link do Zap'
const anavit = 'ANAVITÓRIA'
const clarice7fans = 'Clarice Falcão'
const gadu = 'Maria Gadú'
const baco = 'Baco Exu do Blues'
const criolo = 'Criolo'
const cazuza = 'Cazuza'
const luizlins = 'Luiz Lins'
const ilume = '1LUM3'
const rubel = 'Rubel'

const lines = [
  [createTitle('Cálice', chico), 'Quero me embriagar até que alguém me esqueça'],
  [createTitle('Amor Acidente', alarcon, liniker), 'Deixa o meu amor acidente sangrar!'],
  [createTitle('Construção', chico), 'Morreu na contramão atrapalhando o tráfego'],
  [createTitle('Eu Vou Fazer Uma Macumba Pra Te Amarrar, Maldito!', hooker), 'Vou fazer uma macumba pra te amarrar, maldito!'],
  [createTitle('Ciúmes', vvv), 'E dói demais, queima minha pele e não é bonito...'],
  [createTitle('Circo', vvv), 'Quando eu te quis, me tratou como uma qualquer'],
  [createTitle('Tudo Que Eu Sempre Sonhei', pullovers), 'Tudo que eu sempre sonhei, tanto que eu consegui'],
  [createTitle('rei dos demônios', linkzap), 'Se o diabo me tromba ele se treme todo, não tem ninguém com mais demônios que eu'],
  [createTitle('AO TEU LADO', liniker, anavit), 'Pensei que mandar um poema daria o tom'],
  [createTitle('FEBRE', liniker), 'É puro meu amor e sincero, não tem lero-lero'],
  [createTitle('A Gente Voltou ', clarice7fans), 'Não entra na bad Romeu, Julieta morreu, mas a gente voltou!'],
  [createTitle('TUDO', liniker), 'Deixa eu ficar na tua vida, morar dentro da concha'],
  [createTitle('Altar Particular', gadu), 'Sem mais, a vida vai passando no vazio, estou com tudo a flutuar no rio...'],
  [createTitle('CAJU', liniker), 'Quero saber se você vai correr atrás de mim no aeroporto'],
  [createTitle('pausa da sua tristeza', baco, liniker), 'Me deixa ser a pausa da sua tristeza'],
  [createTitle('sodade', baco), 'Então só foi um samba triste...'],
  [createTitle('Duas de Cinco', criolo), 'Alô, Foucault, cê quer saber o que é loucura?'],
  [createTitle('Mal Nenhum', cazuza), 'Eu não posso causar mal nenhum, a não ser a mim mesmo!'],
  [createTitle('A Música Mais Triste do Ano', luizlins), 'Mas quando a vida acabar, ainda vai querer ir pro mesmo lugar onde eu vou?'],
  [createTitle('Me Desculpa Jay Z', baco, ilume), 'Tô entre tirar sua roupa e tirar minha vida...'],
  [createTitle('O Velho e o Mar', rubel), 'Venha o vento que houver e, se puder, voa!'],
  [createTitle('Cotidiano', chico), 'Todo dia ela faz tudo sempre igual, me sacode às seis horas da manhã'],
];

let selectedSong = lines[Math.floor(Math.random() * lines.length)];
let [songName, songLyrics] = selectedSong;

let footerElement = document.getElementById('minifooter')
footerElement.textContent = songLyrics;
footerElement.setAttribute('data-tip', songName);