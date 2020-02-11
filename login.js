$(document).ready(function() {
  $("#login-submit").click(function(event) {
    event.preventDefault();

    var email = $("#email").val();
    var password = $("#login-password").val();

    console.log("Email Login Attempt: " + email);
    console.log("Password Login Attempt: " + password);
  });
});
