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

function five__mtlClass() {
  $(".grid a").each(function () {
    try {
      let $link = $(this);
      let content = $link.html();
      if (/\(MTL\)/.test(content)) {
        $link.addClass("mtl");
      };
    } catch(r) {
      console.error(r);
    };
  });
};
five__mtlClass();

function five__navigationButtons() {
  const buttons = five__navLinks();
  $("header").prepend(
    `<img class="chibi" src="">`,
    `<div class="links">
    <a href="${buttons.home.action}" title="${buttons.home.title}"><i class="${buttons.home.icon}"></i></a>
    <a href="${buttons.supplemental.action}" title="${buttons.supplemental.title}"><i class="${buttons.supplemental.icon}"></i></a>
    <a class="${buttons.mtl_button.action}" title="${buttons.mtl_button.title}"><i class="${buttons.mtl_button.icon}"></i></a>
    <a class="${buttons.lightswitch.action}" title="${buttons.lightswitch.title}"><i class="${buttons.lightswitch.icon}"></i></a>
    </div>`
  );
};

function five__filterOptions() {
  const buttons = five__navLinks();
  let pages = document.createElement('ul');
  pages.setAttribute('class', 'filter option-set exclusive');
  pages.setAttribute('data-filter-group', 'gen');

  let li = document.createElement('li');
  li.setAttribute('class', 'filter option-set exclusive');
  let a = document.createElement('a');
  a.setAttribute('data-filter-value', '');
  a.setAttribute('class', 'reset selected');
  let txt = document.createTextNode('Reset');
  a.appendChild(txt);
  li.appendChild(a);

  ['era1', 'era2', 'other'].forEach((i) => {
    let link = document.createElement('a');
    link.setAttribute('href', buttons[i].action);
    let txt2 = document.createTextNode(`${buttons[i].title} <i class="${buttons[i].icon}"></i>`);
    link.appendChild(txt2);
    pages.appendChild(link);
  });
  $("div.filters").prepend(pages);
}

