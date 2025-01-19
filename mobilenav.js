
$(document).ready(function () {
  // Open the side menu
  $('#menu-btn').click(function () {
    $('#sidemenu').addClass('open');
  });

  // Close the side menu
  $('#close-btn').click(function () {
    $('#sidemenu').removeClass('open');
  });
});
