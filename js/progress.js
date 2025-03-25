const randomTitle = `<div><h2 class="rando">Random Story</h2></div>`;
const storyArray = document.querySelectorAll('.item');
 
const selectStory = () => {
    var $ransto = $('.random');
    $('.grid').isotope( 'remove', $ransto );
    let random = Math.floor(Math.random() * storyArray.length);
    var $pickedStory = $('<div class="random item">' + randomTitle + storyArray[random].innerHTML + '</div>');
    $('.grid').prepend($pickedStory).isotope('prepended', $pickedStory);
 }
 
 function cs__translatedStatus() {
  // utility function that just sets the classes for us
  function setClassesTranslated($item, state) {
    if (state) {
      $item.addClass("tl");
    } else {
      $item.removeClass("tl");
    }
  }

  // for each card on the page,
  // *can be changed to a different selector if just checkbox isnt specific enough
  $(`.item`).each(function () {
    const $thisCard = $(this);
    const hasFanTranslation = !!$thisCard.has("a[href]").length;
    const hasOfficialTranslation = !!$thisCard.has("a.engstars").length;
    const hasTranslation = hasOfficialTranslation + hasFanTranslation;
    console.log(hasTranslation);
    setClassesTranslated($thisCard, hasTranslation);
  });
}

cs__translatedStatus();

function cs__getReadingProgress() {
  let read = 0,
    unread = 0;
  // get reading list from localStorage first
  let readingList = JSON.parse(localStorage.getItem("cs__readingList"));

  // if one doesnt exist (aka. user opened page for the first time) make an empty list
  if (!readingList) {
    localStorage.setItem("cs__readingList", JSON.stringify({}));
    readingList = {};
  }

  $(`[type="checkbox"]`).each(function () {
    // get the important related elements
    const $thisCheckbox = $(this);
    const $thisCard = $thisCheckbox.closest(".item");
    const $thisHeading = $thisCard.find("h2");

    // get the story name from the h2
    const storyName = $thisHeading.text();

    // check if story is read yet from our reading list
    const isRead = readingList[storyName] || false;

    if (isRead) read++;
    else unread++;
  });
  console.log("Reading ", read, unread);
    $("[readingProgress]").attr("readingProgress", `${Math.floor((read / (read + unread)) * 10000) / 100}%`);
  $("[readingProgress]").css("width", `${(read / (read + unread)) * 100}%`);
}

$(function () {
  cs__getReadingProgress();
});

$(`[type="checkbox"]`).on("change", function (e) {
  cs__getReadingProgress();
});
