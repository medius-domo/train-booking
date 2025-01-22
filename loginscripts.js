$(document).ready(function () {
  // Toggle between email and mobile tabs
  $("#email-btn").click(function () {
    $(this).addClass("active");
    $("#mobile-btn").removeClass("active");
  });

  $("#mobile-btn").click(function () {
    $(this).addClass("active");
    $("#email-btn").removeClass("active");
  });

  // Close the login modal
  $(".close-btn").click(function () {
    $(".login-modal").hide();
  });

  // Prevent form submission (for demo purposes)
  $(".login-form").submit(function (e) {
    e.preventDefault();
    alert("Login button clicked!");
  });
});
