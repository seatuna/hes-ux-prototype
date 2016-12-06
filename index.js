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
