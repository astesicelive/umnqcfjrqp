function cs__appendClasses() {
  var $ch = $('td:not(#shortStory):nth-child(1)');
  $($ch).each(function () {
    $ch.addClass('chapters');
  });
  var $rel = $('td:nth-child(2)');
  $($rel).each(function () {
    $rel.addClass('release');
  });
  var $info = $('.item table');
  $($info).each(function () {
    $info.addClass('info');
  });
  var $chEX = $('.chlist#animation p');
  $($chEX).each(function () {
    $chEX.attr('id','extra');
  });
  var $cred = $('.chibi');
  $cred.before('<a href="https://enbythemes.tumblr.com" title="code by rou">');
  $cred.after('</a>');
}

cs__appendClasses();
 
function cs__add() {
  $('p#divide').after(
    '<hr id="divide"><p></p>'
  );
  $('p#synopsis').before(
    '<h3><span>Synopsis</span></h3>'
  );
  $('.chlist:not(#animation)').before(
    '<h3><span>Chapter List</span></h3>'
  );
  $('.chlist#animation').before(
    '<h3><span>Episode List</span></h3>'
  );
  $('.charalist:not([id])').before(
    '<p align="center"><hr></p>'
  );
  $("table:not([id]) tbody").prepend(
    '<tr><th>chapters</th><th>release</th><th>read</th></tr>'
  );
  $('table#shortStory tbody').prepend(
    '<tr><th>season</th><th>release</th><th>read</th></tr>'
  );
  $('table#novel tbody').prepend(
    '<tr><th>novel</th><th>release</th><th>read</th></tr>'
  );
  $('table#stagePlay tbody').prepend(
    '<tr><th>release</th><th>watched</th></tr>'
  );
  $('table#animation tbody').prepend(
    '<tr><th>episodes</th><th>release</th><th>watched</th></tr>'
  );
  $('table.info tr:last-child').append(
    '<td><label class="container"><input type="checkbox" checked="checked"><span class="checkmark"></span></label></td></tr>'
  );
}

cs__add();

function cs__convertCharactersToIcons() {
  $(".characters").each(function () {
    try {
      const $charactersDiv = $(this);
      const characters = $charactersDiv
        .html()
        .toLowerCase()
        .replace(/ /g, "")
        .replace(/"/g, "")
        .replace(/<divclass=/g, ",")
        .replace(/><\/div>/g, "")
        .split(",")
        .filter((v) => v);
      console.log(characters);
      characters.forEach((c) => {
        $charactersDiv.closest("div.item").addClass(c);
      });
      $charactersDiv.html(
        characters.map((c) => '<div class="' + c + '"></div>').join("")
      );
    } catch {}
  });
}

 cs__convertCharactersToIcons();
