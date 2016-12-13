var allPeople = document.getElementsByClassName('person');

function hide(navigateTo) {
  var pages = ['home', 'dashboard', 'events', 'people', 'results', 'login', 'signup'];

  var index = pages.indexOf(navigateTo);
  pages.splice(index, 1);

  pages.forEach(function(page) {
    $('#' + page).hide();
  });

  $('#' + navigateTo).show();
}

function search(query) {
  console.log(query);
  if (query === '') {
    $('.person').show();
    $('#show-all-btn').hide();
    return;
  }

  var text = [];
  $('.person').hide();

  for (var i = 0; i < allPeople.length; i++) {
    text.push(allPeople[i].innerText.toLowerCase());
  }

  console.log(text);

  for (var j = 0; j < text.length; j++) {
    if (text[j].includes(query.toLowerCase())) {
      console.log(text[j]);
      $('.person').eq(j).show();
      $('#show-all-btn').show();
    }
  }
}

$('#search-input').on('keyup', function(e) {
  if (e.keyCode === 13) {
    console.log('search');
    search(document.getElementById('search-input').value);
  }
});

$('#entrantsNumberInput').on('keyup', function(e) {
  $('.entrants').empty();
  var entrants = document.getElementById('entrantsNumberInput').value;
  for (var i = 1; i <= entrants; i++) {
    var entryDiv = '<div class="form-group"><label>' + i + '. ' + '</label><input type="game" class="form-control" id="entrant' + i + '" placeholder="Name"></div>';
    $('.entrants').append(entryDiv);
  }
  console.log(document.getElementById('entrantsNumberInput').value);
});

function toggleEventsView(view) {
  if (view === 'map') {
    $('.events-list').hide();
    $('.events-map-view').show();
  } else {
    $('.events-list').show();
    $('.events-map-view').hide();
  }
}
