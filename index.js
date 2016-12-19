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

function submitForm() {
  $('.entrants').hide();
  $('.submit-success').show();
}

$('#entrantsNumberInput').on('keyup', function(e) {
  $('.entrants').show();
  $('.entrants').empty();
  var entrants = document.getElementById('entrantsNumberInput').value;
  $('.entrants').append('<h4>Entrants and Placement</h4>');
  for (var i = 1; i <= entrants; i++) {
    var entryDiv = '<div class="form-group entry"><label>' + i + '. ' + '</label><input type="game" class="form-control" id="entrant' + i + '" placeholder="Name"></div>';
    $('.entrants').append(entryDiv);
  }
  $('.entrants').append('<div class="btn btn-primary pull-right" id="submit-btn" onclick="submitForm()">Submit</div>');
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

function toggleTable(tableID) {
  // if (!document.getElementById(tableID)) {
  //   $(tableID).show();
  // } else if (document.getElementById(tableID)) {
  //   $(tableID).hide();
  // }
  $(tableID).toggle();
}
