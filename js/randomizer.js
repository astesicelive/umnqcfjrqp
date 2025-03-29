const chibiCollection = [
  ['chiaki',15,5],
  ['hokuto',27,2],
  ['niki',15,2],
  ['raika',1,1],
  ['ritsu',15,1],
  ['sora',15,2],
  ['subaru',15,4]
]

function randomChar() {
  let 
    select = Math.floor(Math.random() * chibiCollection.length),
    char = chibiCollection[select][0],
    chibi = Math.floor(Math.random() * chibiCollection[select][1]) + 1,
    nui = Math.floor(Math.random() * chibiCollection[select][2]) + 1
  ;
  console.log(char);
  return ['img/ect/chibi/' + char + chibi + '.png','img/ect/nui/' + char + nui + '.png'];
}

function setChibiNuiFiles() {
  $('.chibi').attr('src',randomChar()[0]);
  $('.nui').attr('src',randomChar()[1]);
}

setChibiNuiFiles();
