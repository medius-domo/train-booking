$(document).ready(function () {
    $("#registration-form").submit(function (event) {
      event.preventDefault(); // Prevent form submission
  
      let isValid = true;
  
      // Validate required fields
      $("input[required]").each(function () {
        if (!$(this).val()) {
          isValid = false;
          $(this).siblings(".error-message").text("This field is required").show();
        } else {
          $(this).siblings(".error-message").hide();
        }
      });
  
      // Password confirmation check
      const password = $("#password").val();
      const confirmPassword = $("#confirm-password").val();
      if (password !== confirmPassword) {
        isValid = false;
        $("#confirm-password").siblings(".error-message").text("Passwords do not match").show();
      } else {
        $("#confirm-password").siblings(".error-message").hide();
      }
  
      // Terms and conditions check
      if (!$("#terms").is(":checked")) {
        isValid = false;
        $("#terms").siblings(".error-message").show();
      } else {
        $("#terms").siblings(".error-message").hide();
      }
  
      if (isValid) {
        alert("Registration successful!");
      }
    });
  });
  