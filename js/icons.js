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

function five__filterOptions(currentPage) {
  const buttons = five__navLinks();

  let pages = [
    `<ul class="filter option-set exclusive" data-filter-group="gen">`,
    `<li class="filter option-set exclusive"><a data-filter-value="" class="reset selected">Reset</a></li>`
  ];
  if (/era/.test(currentPage)) {
    pages.push(
      `<li class="filter option-set exclusive"><a data-filter-value=".tl">Translated Stories</a></li>`,
      `<div id="selectStory">　Random Story</div>`
    );
  };
  ['era1', 'era2', 'idol', 'other'].forEach((i) => {
    if (i != currentPage) {
      pages.push(`<a href="${buttons[i].action}">${buttons[i].title} <i class="${buttons[i].icon}"></i></a>`);
    };
  });
  pages.push(`</ul>`);
  pages = pages.join('');

  let filterSort = ''
  if (/era/.test(currentPage)) {
    filterSort = `
      <ul class="filter sort-by-button-group" data-filter-group="sorting">
        <li><b>Sort:</b></li>
        <li><a data-sort-value="" class="selected">Chronology</a></li>
        <li><a data-sort-value="chapters" mode="asc">Chapter ↑</a></li>
        <li><a data-sort-value="chapters" mode="desc">Chapter ↓</a></li>
        <li><a data-sort-value="release" mode="asc">Release ↑</a></li>
        <li><a data-sort-value="release" mode="desc">Release ↓</a></li>
      </ul>
    `;
  };

  let filterRead = ''
  if (/era/.test(currentPage)) {
    filterRead = `
      <ul class="filter option-set exclusive" data-filter-group="reading">
        <li><b>Status:</b></li>
        <li><a data-filter-value="" class="selected">All</a></li>
        <li><a data-filter-value=".read">Read</a></li>
        <li><a data-filter-value=".unread">Unread</a></li>
      </ul>
    `;
  };

  let filterSeason = ''
  if (currentPage == 'era1') {
    filterSeason = `
      <ul class="filter option-set exclusive" data-filter-group="season">
        <li><b>Season:</b></li>
        <li><a data-filter-value="" class="selected">All</a></li>
        <li><a data-filter-value=".past">Past</a></li>
        <li><a data-filter-value=".spring">Spring</a></li>
        <li><a data-filter-value=".summer">Summer</a></li>
        <li><a data-filter-value=".autumn">Autumn</a></li>
        <li><a data-filter-value=".winter">Winter</a></li>
        <li><a data-filter-value=".spring2">Next Spring</a></li>
      </ul>
    `;
  };

  let filterYear = ''
  if (currentPage == 'era1') {
    filterYear = `
      <ul class="filter option-set exclusive" data-filter-group="year">
        <li><b>Release Year:</b></li>
        <li><a data-filter-value="" class="selected">All</a></li>
        <li><a data-filter-value=".15">2015</a></li>
        <li><a data-filter-value=".16">2016</a></li>
        <li><a data-filter-value=".17">2017</a></li>
        <li><a data-filter-value=".18">2018</a></li>
        <li><a data-filter-value=".19">2019</a></li>
        <li><a data-filter-value=".20">2020</a></li>
      </ul>
    `;
  };

  /* rest of era1 stuff still missing */

  let filterType = '';
  if (currentPage == 'idol') {
    filterType = `
      <ul class="filter option-set exclusive" data-filter-group="type">
        <li><b>Type:</b></li>
        <li><a data-filter-value="" class="selected">All</a></li>
        <li><a data-filter-value=".idol">Idol Story</a></li>
        <li><a data-filter-value=".fs">Feature Scouts (All)</a></li>
        <li><a data-filter-value=".fs1">FS1</a></li>
        <li><a data-filter-value=".fs2">FS2</a></li>
        <li><a data-filter-value=".fs3">Bright me up!!</a></li>
        <li><a data-filter-value=".manage">Management Story</a></li>
      </ul>
    `;
  };

  let filterEra = '';
  if (currentPage == 'idol') {
    filterEra = `
      <ul class="filter option-set exclusive" data-filter-group="era">
        <li><b>Era:</b></li>
        <li><a data-filter-value="" class="selected">All</a></li>
        <li><a data-filter-value=".one">!</a></li>
        <li><a data-filter-value=".two">!!</a></li>
      </ul>
    `;
  };

  let filterUnit = '';
  if (currentPage == 'idol') {
    filterUnit = `
      <ul class="filter option-set exclusive" data-filter-group="unit">
        <li><b>Unit:</b></li>
        <li><a data-filter-value="" class="selected">All</a></li>
        <li><a data-filter-value=".fine">fine</a></li>
        <li><a data-filter-value=".trickstar">Trickstar</a></li>
        <li><a data-filter-value=".ryuseitai">Ryuseitai</a></li>
        <li><a data-filter-value=".alkaloid">ALKALOID</a></li>
        <li><a data-filter-value=".eden">Eden</a></li>
        <li><a data-filter-value=".valkyrie">Valkyrie</a></li>
        <li><a data-filter-value=".2wink">2wink</a></li>
        <li><a data-filter-value=".crazyb">Crazy:B</a></li>
        <li><a data-filter-value=".undead">UNDEAD</a></li>
        <li><a data-filter-value=".rabits">Ra*bits</a></li>
        <li><a data-filter-value=".akatsuki">Akatsuki</a></li>
        <li><a data-filter-value=".mdu">MELLOW DEAR US</a></li>
        <li><a data-filter-value=".knights">Knights</a></li>
        <li><a data-filter-value=".switch">Switch</a></li>
        <li><a data-filter-value=".mam">MaM</a></li>
        <li><a data-filter-value=".esupuri">Special for Princess!</a></li>
        <li><a data-filter-value=".others">Others</a></li>
      </ul>
    `;
  };

  let filterChara = '';
  if (currentPage == 'idol') {
    filterChara = `
      <ul class="filter option-set combine" data-filter-group="chara">
        <p>
        <li><b>Character:</b></li>
        <li><a data-filter-value="" class="selected">All</a></li>
        </p>
        <li><a data-filter-value=".eichi"><img src="img/ect/chibi_heads/tenshouin_eichi1.png" width="30"/></a></li>
        <li><a data-filter-value=".wataru"><img src="img/ect/chibi_heads/hibiki_wataru1.png" width="30"/></a></li>
        <li><a data-filter-value=".tori"><img src="img/ect/chibi_heads/himemiya_tori1.png" width="30"/></a></li>
        <li><a data-filter-value=".yuzuru"><img src="img/ect/chibi_heads/fushimi_yuzuru1.png" width="30"/></a></li>
        <li><a data-filter-value=".hokuto"><img src="img/ect/chibi_heads/hidaka_hokuto1.png" width="30"/></a></li>
        <li><a data-filter-value=".subaru"><img src="img/ect/chibi_heads/akehoshi_subaru1.png" width="30"/></a></li>
        <li><a data-filter-value=".makoto"><img src="img/ect/chibi_heads/yuuki_makoto1.png" width="30"/></a></li>
        <li><a data-filter-value=".mao"><img src="img/ect/chibi_heads/isara_mao1.png" width="30"/></a></li>
        <li><a data-filter-value=".tetora"><img src="img/ect/chibi_heads/nagumo_tetora2.png" width="30"/></a></li>
        <li><a data-filter-value=".midori"><img src="img/ect/chibi_heads/takamine_midori1.png" width="30"/></a></li>
        <li><a data-filter-value=".shinobu"><img src="img/ect/chibi_heads/sengoku_shinobu1.png" width="30"/></a></li>
        <li><a data-filter-value=".chiaki"><img src="img/ect/chibi_heads/morisawa_chiaki1.png" width="30"/></a></li>
        <li><a data-filter-value=".kanata"><img src="img/ect/chibi_heads/shinkai_kanata1.png" width="30"/></a></li>
        <li><a data-filter-value=".hiiro"><img src="img/ect/chibi_heads/amagi_hiiro1.png" width="30"/></a></li>
        <li><a data-filter-value=".aira"><img src="img/ect/chibi_heads/shiratori_aira1.png" width="30"/></a></li>
        <li><a data-filter-value=".mayoi"><img src="img/ect/chibi_heads/ayase_mayoi1.png" width="30"/></a></li>
        <li><a data-filter-value=".tatsumi"><img src="img/ect/chibi_heads/kazehaya_tatsumi1.png" width="30"/></a></li>
        <li><a data-filter-value=".nagisa"><img src="img/ect/chibi_heads/ran_nagisa1.png" width="30"/></a></li>
        <li><a data-filter-value=".hiyori"><img src="img/ect/chibi_heads/tomoe_hiyori1.png" width="30"/></a></li>
        <li><a data-filter-value=".ibara"><img src="img/ect/chibi_heads/saegusa_ibara1.png" width="30"/></a></li>
        <li><a data-filter-value=".jun"><img src="img/ect/chibi_heads/sazanami_jun1.png" width="30"/></a></li>
        <li><a data-filter-value=".shu"><img src="img/ect/chibi_heads/itsuki_shu1.png" width="30"/></a></li>
        <li><a data-filter-value=".mika"><img src="img/ect/chibi_heads/kagehira_mika1.png" width="30"/></a></li>
        <li><a data-filter-value=".hinata"><img src="img/ect/chibi_heads/aoi_hinata1.png" width="30"/></a></li>
        <li><a data-filter-value=".yuuta"><img src="img/ect/chibi_heads/aoi_yuuta2.png" width="30"/></a></li>
        <li><a data-filter-value=".rinne"><img src="img/ect/chibi_heads/amagi_rinne1.png" width="30"/></a></li>
        <li><a data-filter-value=".himeru"><img src="img/ect/chibi_heads/himeru1.png" width="30"/></a></li>
        <li><a data-filter-value=".kohaku"><img src="img/ect/chibi_heads/oukawa_kohaku1.png" width="30"/></a></li>
        <li><a data-filter-value=".niki"><img src="img/ect/chibi_heads/shiina_niki1.png" width="30"/></a></li>
        <li><a data-filter-value=".rei"><img src="img/ect/chibi_heads/sakuma_rei1.png" width="30"/></a></li>
        <li><a data-filter-value=".kaoru"><img src="img/ect/chibi_heads/hakaze_kaoru1.png" width="30"/></a></li>
        <li><a data-filter-value=".koga"><img src="img/ect/chibi_heads/ogami_koga1.png" width="30"/></a></li>
        <li><a data-filter-value=".adonis"><img src="img/ect/chibi_heads/otogari_adonis1.png" width="30"/></a></li>
        <li><a data-filter-value=".tomoya"><img src="img/ect/chibi_heads/mashiro_tomoya1.png" width="30"/></a></li>
        <li><a data-filter-value=".nazuna"><img src="img/ect/chibi_heads/nito_nazuna1.png" width="30"/></a></li>
        <li><a data-filter-value=".mitsuru"><img src="img/ect/chibi_heads/tenma_mitsuru1.png" width="30"/></a></li>
        <li><a data-filter-value=".hajime"><img src="img/ect/chibi_heads/shino_hajime1.png" width="30"/></a></li>
        <li><a data-filter-value=".keito"><img src="img/ect/chibi_heads/hasumi_keito1.png" width="30"/></a></li>
        <li><a data-filter-value=".kuro"><img src="img/ect/chibi_heads/kiryu_kuro1.png" width="30"/></a></li>
        <li><a data-filter-value=".souma"><img src="img/ect/chibi_heads/kanzaki_souma1.png" width="30"/></a></li>
        <li><a data-filter-value=".ibuki"><img src="img/ect/chibi_heads/taki_ibuki1.png" width="30"/></a></li>
        <li><a data-filter-value=".juis"><img src="img/ect/chibi_heads/kojika_juis1.png" width="30"/></a></li>
        <li><a data-filter-value=".nozomi"><img src="img/ect/chibi_heads/madoka_nozomi1.png" width="30"/></a></li>
        <li><a data-filter-value=".mashu"><img src="img/ect/chibi_heads/kuon_mashu1.png" width="30"/></a></li>
        <li><a data-filter-value=".chitose"><img src="img/ect/chibi_heads/tsuzura_chitose1.png" width="30"/></a></li>
        <li><a data-filter-value=".tsukasa"><img src="img/ect/chibi_heads/suou_tsukasa1.png" width="30"/></a></li>
        <li><a data-filter-value=".leo"><img src="img/ect/chibi_heads/tsukinaga_leo1.png" width="30"/></a></li>
        <li><a data-filter-value=".izumi"><img src="img/ect/chibi_heads/sena_izumi1.png" width="30"/></a></li>
        <li><a data-filter-value=".ritsu"><img src="img/ect/chibi_heads/sakuma_ritsu1.png" width="30"/></a></li>
        <li><a data-filter-value=".arashi"><img src="img/ect/chibi_heads/narukami_arashi1.png" width="30"/></a></li>
        <li><a data-filter-value=".natsume"><img src="img/ect/chibi_heads/sakasaki_natsume1.png" width="30"/></a></li>
        <li><a data-filter-value=".tsumugi"><img src="img/ect/chibi_heads/aoba_tsumugi2.png" width="30"/></a></li>
        <li><a data-filter-value=".sora"><img src="img/ect/chibi_heads/harukawa_sora1.png" width="30"/></a></li>
        <li><a data-filter-value=".madara"><img src="img/ect/chibi_heads/mikejima_madara1.png" width="30"/></a></li>
        <li><a data-filter-value=".esu"><img src="img/ect/chibi_heads/sagiri_esu1.png" width="30"/></a></li>
        <li><a data-filter-value=".kanna"><img src="img/ect/chibi_heads/natsu_kanna1.png" width="30"/></a></li>
        <li><a data-filter-value=".yume"><img src="img/ect/chibi_heads/hanamura_fuyume1.png" width="30"/></a></li>
        <li><a data-filter-value=".raika"><img src="img/ect/chibi_heads/houjou_raika1.png" width="30"/></a></li>
        <li><a data-filter-value=".jin"><img src="img/ect/chibi_heads/sagami_jin1.png" width="30"/></a></li>
        <li><a data-filter-value=".akiomi"><img src="img/ect/chibi_heads/kunugi_akiomi1.png" width="30"/></a></li>
        <li><a data-filter-value=".nice"><img src="img/ect/chibi_heads/nice1.png" width="30"/></a></li>
        <li><a data-filter-value=".seiya"><img src="img/ect/chibi_heads/hidaka_seiya1.png" width="30"/></a></li>
      </ul>
    `;
  };

  $("div.filters").prepend(pages, filterSort, filterRead, filterSeason, filterYear, filterType, filterEra, filterUnit, filterChara);
}

