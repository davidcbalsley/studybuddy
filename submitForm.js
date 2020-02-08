//jquery to collect input fields and put into variables

$(document).ready(function() {
  $("#run-search").click(function(event) {
    event.preventDefault();

    //Collecting input into variables
    var inputFirstName = $("#first-name").val();
    var inputLastName = $("#last-name").val();
    var inputEmail = $("#email").val();
    var inputLinkedInURL = $("#linkedIn-url").val();

    //Topics are collected via the textbox and separated via topicSeparater function
    var inputLearningTopics = $("#learn-topics").val();
    inputLearningTopics = topicSeparator(inputLearningTopics);

    var inputExpLevel = $(
      "input[name=experience]:checked, #experience-level"
    ).val();

    //This variable will keep track of total number of StudyBuddies and increment when new profile is created
    var userCount = 0;

    console.log("------Input Tests------");
    console.log(inputFirstName);
    console.log(inputLastName);
    console.log(inputEmail);
    console.log(inputLinkedInURL);
    console.log(inputLearningTopics);
    console.log(inputExpLevel);
    console.log(userCount);
    console.log("_______________________");

    createStudyBuddyObj();
  });

  ///////////FUNCTIONS////////////////

  //Takes the string of learning topics, separates at comma, and returns array of tags
  function topicSeparator(tags) {
    var tagsArray = tags.split(", ");

    return tagsArray;
  }

  //Creates Study Buddy
  function createStudyBuddyObj() {
    //declares a new StudyBuddy Object
    var studdyBuddy = {
      id: userCount,
      firstName: inputFirstName,
      lastName: inputLastName,
      email: inputEmail,
      linkedIn: inputLinkedInURL,
      learningTags: inputLearningTopics,
      expLevel: inputExpLevel
    };
    userCount++;
    //clear input fields function
    //commit it to local storage
  }
});
