// isotope-combination-filtering
$(document).ready(function() {
  var $container = $(".grid"); 
  var filters = {}; 
  var $grid = $container.isotope({
    itemSelector: ".item", 
    percentPosition: true,
    getSortData: {
      chapters: '.chapters parseInt',
      release: function( itemElem ) {
        var relDate = $( itemElem ).find('.release').text().split('\/');
        return new Date(relDate[2], relDate[0]-1, relDate[1]);
      },
    }
  });
  var activeClass = "selected",
    comboClass = "combine",
    exclClass = "exclusive",
    resetClass = "reset";

  var $defaults = $("a." + activeClass + '[data-filter-value=""]');
  $('.sort-by-button-group a').click(function() {
    var sortValue = $(this).attr('data-sort-value');
    if ($(this).attr('mode') == 'desc') {
      var sortOrder = false;
    } else {
      var sortOrder = true;
    }
    $grid.isotope({ 
      sortBy: sortValue, 
      sortAscending: sortOrder
      });
    var $this = $(this);
    $(".sort-by-button-group a").removeClass(activeClass);
    $this.toggleClass(activeClass);
  });
  $(".option-set a").click(function(e) {
    var $this = $(this); 
    var comboFilter,
      filterAttr = "data-filter-value";
    if (resetClass && !$this.hasClass(resetClass)) {
      var filterValue = $this.attr(filterAttr); 
      var $optionSet = $this.parents(".option-set"); 
      var group = $optionSet.attr("data-filter-group"); 
      var filterGroup = filters[group]; 
      if (!filterGroup) {
        filterGroup = filters[group] = []; 
      }
      var $selectAll = $optionSet.find("a[" + filterAttr + '=""]'); 
      $("." + resetClass).removeClass(activeClass);
      comboFiltering(
        $this,
        filters,
        filterAttr,
        filterValue,
        $optionSet,
        group,
        $selectAll,
        activeClass,
        comboClass,
        exclClass
      );
      comboFilter = getComboFilter(filters); 
      if (!comboFilter.length) $("a." + resetClass).addClass(activeClass);
      $this.toggleClass(activeClass);
    } else {
      filters = {};
      comboFilter = "";
      $(".option-set a").removeClass(activeClass);
      $(this).addClass(activeClass);
      $defaults.addClass(activeClass);
      var $ransto = $('.random');
      $('.grid').isotope( 'remove', $ransto );
    }
    $grid.isotope({
      filter: comboFilter
    });
    e.preventDefault();
  });
});
function comboFiltering(
  $this,
  filters,
  filterAttr,
  filterValue,
  $optionSet,
  group,
  $selectAll,
  activeClass,
  comboClass,
  exclClass
) {
  if (!$optionSet.hasClass(exclClass)) {
    if (!$this.hasClass(activeClass) && filterValue.length) {
      filters[group].push(filterValue); 
      $selectAll.removeClass(activeClass); 
    } else if (filterValue.length) {
      if ($optionSet.hasClass(comboClass)) {
        filters[group][0] = filters[group][0].replace(filterValue, ""); 
        if (!filters[group][0].length)
          filters[group].splice(0, 1); 
      } else {
        var curIndex = filters[group].indexOf(filterValue); 
        if (curIndex > -1) filters[group].splice(curIndex, 1); 
      }
      if (!$optionSet.find("a." + activeClass).not($this).length)
        $selectAll.addClass(activeClass); 
    } else {
      $optionSet.find("a." + activeClass).removeClass(activeClass); 
      filters[group] = []; 
    }
    if ($optionSet.hasClass(comboClass) && filters[group].length)
      filters[group] = [filters[group].join("")];
  } else {
    if (!$this.hasClass(activeClass) && filterValue.length) {
      $optionSet.find("a." + activeClass).each(function(k, filterLink) {
        var removeFilter = $(filterLink).attr(filterAttr);
        var removeIndex = filters[group].indexOf(removeFilter);
        filters[group].splice(removeIndex, 1);
      });
      filters[group].push(filterValue);
      $optionSet.find("a." + activeClass).removeClass(activeClass);
    } else if (filterValue.length) {
      var curIndex = filters[group].indexOf(filterValue);
      if (curIndex > -1) filters[group].splice(curIndex, 1);
      if (!$optionSet.find("a." + activeClass).not($this).length)
        $selectAll.addClass(activeClass);
    } else {
      $optionSet.find("a." + activeClass).removeClass(activeClass);
      filters[group] = [];
    }
  }
}
function getComboFilter(filters) {
  var i = 0;
  var comboFilters = [];

  for (var prop in filters) {
    var filterGroup = filters[prop];
    if (!filterGroup.length) {
      continue;
    }
    if (i === 0) {
      comboFilters = filterGroup.slice(0);
    } else {
      var filterSelectors = [];
      var groupCombo = comboFilters.slice(0);
      for (var k = 0, len3 = filterGroup.length; k < len3; k++) {
        for (var j = 0, len2 = groupCombo.length; j < len2; j++) {
          filterSelectors.push(groupCombo[j] + filterGroup[k]);
        }
      }
      comboFilters = filterSelectors;
    }
    i++;
  }

  var comboFilter = comboFilters.join(", ");
  return comboFilter;
}
