//jquery to collect input fields and put into variables

$(document).ready(function() {
  $("#run-search").click(function(event) {
    event.preventDefault();

    //Collecting input into variables
    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var linkedInURL = $("#linkedIn-url").val();
    var learningTopic = $("#learn-topics").val();

    console.log(firstName);
    console.log(lastName);
    console.log(linkedInURL);
    console.log(learningTopic);
  });
});
