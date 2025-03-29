const chibiCollection = [
  ['chiaki',15],
  ['sora',3],
  ['niki',14],
  ['subaru',3]
]

function chibiRandom() {
  let 
    select = Math.floor(Math.random() * chibiCollection.length),
    char = chibiCollection[select][0],
    chibi = Math.floor(Math.random() * chibiCollection[select][1]) + 1
  ;
  return 'img/ect/chibi/' + char + chibi + '.png';
}

function setChibiFile() {
  let file = chibiRandom();
  let $item = $('.chibi').attr('src',file);
}

setChibiFile();
