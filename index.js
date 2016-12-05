function hide(navigateTo) {
  var pages = ['home', 'events', 'people', 'results', 'login', 'signup'];

  var index = pages.indexOf(navigateTo);
  pages.splice(index, 1);

  pages.forEach(function(page) {
    $('#' + page).hide();
  });

  $('#' + navigateTo).show();
}
