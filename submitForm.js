//jquery to collect input fields and put into variables

$(document).ready(function() {
  //This variable will keep track of total number of StudyBuddies and increment when new profile is created
  //if there is a user count stored, it will load it here. Otherwise, it is set to 0.
  if (JSON.parse(localStorage.getItem("userCount")) !== null) {
    var userCount = JSON.parse(localStorage.getItem("userCount"));
  } else {
    userCount = 0;
  }

  //Test userCount at top of app loading
  console.log("+++++Test UserCount at Top of App+++++");
  console.log("Current User Count: " + userCount);

  //this will keep track of the study buddy objects created
  var userArray = [];

  $("#create-profile").click(function(event) {
    event.preventDefault();

    //Collecting input into variables
    var inputFirstName = $("#first-name").val();
    var inputLastName = $("#last-name").val();
    var inputEmail = $("#email").val();
    //Collects Password and Password Confirmation
    var inputPassword = $("#password").val();
    var inputPasswordConfirm = $("#password-confirm").val();

    //Boolean used to test if passowrd is confirmed. Will only create object if confirmed
    var isPasswordConfirmed = false;

    var inputLinkedInURL = $("#linkedIn-url").val();

    //Topics are collected via the textbox and separated via topicSeparater function
    var inputLearningTopics = $("#learn-topics").val();
    inputLearningTopics = topicSeparator(inputLearningTopics);

    var inputExpLevel = $("#experience-level option:selected").text();

    console.log("-----------Input Tests-----------");
    console.log("Current User Count: " + userCount);
    console.log("Current Input First Name: " + inputFirstName);
    console.log("Current Input Last Name: " + inputLastName);
    console.log("Current Input Email: " + inputEmail);
    console.log("Current Input Password: " + inputPassword);
    console.log("Current Input Password-Confirm: " + inputPasswordConfirm);
    console.log("Current Input LinkedIn url: " + inputLinkedInURL);
    console.log("Current Input Learning Topics: " + inputLearningTopics);
    console.log("Current Input Experience Level: " + inputExpLevel);
    console.log("_________________________________");

    //Confirms input password and password confirmation are correct
    passwordCheck(inputPassword, inputPasswordConfirm);

    //Runs only if password is confirmed
    if (isPasswordConfirmed) {
      createStudyBuddyObj();

      // For now, display list of buddies
      window.location.replace("study-buddy-list.html");
    }

    function passwordCheck(password, passwordConfirm) {
      if (password === passwordConfirm) {
        return (isPasswordConfirmed = true);
      } else {
        $("#password").addClass("is-danger");
        $("#password-confirm").addClass("is-danger");
        $(".password").append(
          "<p class='help is-danger'>Passwords do not match</p>"
        );
      }
    }

    //creates Study Buddy Account Object
    function createStudyBuddyObj() {
      //grabs these items from localStorage if this is not the first time running the app
      if (userCount !== 0) {
        console.log("userCount == " + userCount); // debug
        userCount = JSON.parse(localStorage.getItem("userCount"));
        userArray = JSON.parse(localStorage.getItem("studyBuddies"));
      }
      //declares a new StudyBuddy Object
      var studyBuddy = {
        id: userCount,
        firstName: inputFirstName,
        lastName: inputLastName,
        email: inputEmail,
        password: inputPassword,
        linkedIn: inputLinkedInURL,
        learningTags: inputLearningTopics,
        expLevel: inputExpLevel
      };

      //increment total number of users created
      userCount++;

      //Push new Study Buddy to userArray
      userArray.push(studyBuddy);

      //store studyBuddy array and current userCount in local storage
      localStorage.setItem("studyBuddies", JSON.stringify(userArray));
      localStorage.setItem("userCount", JSON.stringify(userCount));

      //clear input fields function upon successful creation of new account
      $("#user-input").trigger("reset");

      //test objects created in local storage
      console.log("---Local Storage---");
      console.log(
        "User Count: " + JSON.parse(localStorage.getItem("userCount"))
      );
      console.log(JSON.parse(localStorage.getItem("studyBuddies")));
      console.log("-------------------------------");
    }
  });

  //test function to clear storage and reset the app
  $("#clear-storage").click(function(event) {
    $("#user-input").trigger("reset");
    localStorage.clear();
  });

  ///////////FUNCTIONS////////////////

  //Takes the string of learning topics, separates at comma, and returns array of tags
  //TO-DO: Split by just commas
  //Separate/clear white space
  //if not word/valid tag, clear?
  function topicSeparator(tags) {
    var tagsArray = tags.split(",");

    return tagsArray;
  }

  //Creates Study Buddy
});
