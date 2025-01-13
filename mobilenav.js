$(document).ready(function () {
    // Open the side menu
    $('#menu-btn').click(function () {
      if ($('#sidemenu').css('right') === '-100%') {
        $('#sidemenu').css('right', '0');
      }
    });
  
    // Close the side menu
    $('#close-btn').click(function () {
      if ($('#sidemenu').css('right') === '0px') {
        $('#sidemenu').css('right', '-100%');
      }
    });
  });
  