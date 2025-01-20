// $(document).ready(function () {
//     // Open the side menu
//     $('#menu-btn').click(function () {
//       $('#sidemenu').css('right', '0');
//     });
  
//     // Close the side menu
//     $('#close-btn').click(function () {
//       $('#sidemenu').css('right', '-100%');
//     });
  
//     // Ensure sidemenu is hidden when resizing to desktop
//     $(window).resize(function () {
//       if ($(window).width() > 767.98) {
//         $('#sidemenu').css('right', '-100%'); // Hide menu
//       }
//     });
//   });
  

$(document).ready(function () {
    console.log('Document is ready');
  
    $('#menu-btn').click(function () {
      console.log('Menu button clicked');
      $('#sidemenu').css('right', '0');
    });
  
    $('#close-btn').click(function () {
      console.log('Close button clicked');
      $('#sidemenu').css('right', '-100%');
    });
  
    $(window).resize(function () {
      console.log('Window resized: Width = ' + $(window).width());
      if ($(window).width() > 767.98) {
        $('#sidemenu').css('right', '-100%');
      }
    });
  });

  $(document).ready(function () {
    $('#checkBtn').on('click', function () {
        // Get selected values
        var from = $('#from').val();
        var to = $('#to').val();
        var passenger = $('#passenger').val(); // Capture the Abiria dropdown value

        // Use alert to display the values
        // Display all selected values
        alert('Kutoka: ' + from + '\nKwenda: ' + to + '\nAbiria: ' + passenger);
    });
});
  