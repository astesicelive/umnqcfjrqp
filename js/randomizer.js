const chibiCollection = [
  ['chiaki',15,5],
  ['hokuto',27,2],
  ['niki',15,2],
  ['raika',1,1],
  ['ritsu',15,1],
  ['sora',15,2],
  ['subaru',15,4]
]

function chibiRandom(folder) {
  let 
    select = Math.floor(Math.random() * chibiCollection.length),
    char = chibiCollection[select][0],
    number
  ;
  if (folder == 'chibi') {
    number = Math.floor(Math.random() * chibiCollection[select][1]) + 1
  } else {
    number = Math.floor(Math.random() * chibiCollection[select][2]) + 1
  }
  console.log(char);
  return 'img/ect/' + folder '/' + char + number + '.png';
}

function setChibiNuiFiles() {
  $('.chibi').attr('src',chibiRandom('chibi'));
  $('.nui').attr('src',chibiRandom('nui'));
}

setChibiNuiFiles();
