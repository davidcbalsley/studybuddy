$(document).ready(function() {

    // Get list of study buddies from local storage and render them
    function renderStudyBuddies() {
        var studyBuddies = [];      // List of study buddies retrieved from local storage
        var lastRow = null;         // The last row in a table

        // Get list of study buddies from local storage
        studyBuddies = JSON.parse(localStorage.getItem("studyBuddies"));
        // console.log("studyBuddies = " + studyBuddies); // debug

        if (studyBuddies) {
            for (var i = 0; i < studyBuddies.length; i++) {
                // Create a new row
                var newRow = $("<tr>");

                // First name
                newFirstNameTD = $("<td>");
                newFirstNameTD.text(studyBuddies[i].firstName);

                // Last name
                newLastNameTD = $("<td>");
                newLastNameTD.text(studyBuddies[i].lastName);

                // Email address -- put email address in table as mailto link to address
                newEmailTD = $("<td>");
                newEmailLink = $("<a>");
                newEmailLink.text(studyBuddies[i].email);
                newEmailLink.attr("href", "mailto:" + studyBuddies[i].email);
                newEmailTD.append(newEmailLink);

                // LinkedIn profile -- put profile in table as link to LinkedIn profile
                var newLinkedInTD = $("<td>");
                newLinkedInLink = $("<a>");
                newLinkedInLink.text(studyBuddies[i].linkedIn);
                newLinkedInLink.attr("href", studyBuddies[i].linkedIn);
                newLinkedInTD.append(newLinkedInLink);

                // Interests
                var newInterestsTD = $("<td>");
                var currentBuddyInterests = null;
                if (studyBuddies[i].learningTags) {

                    // Create an unordered list of interests
                    var newInterestsUL = $("<ul>");

                    // Add each buddy's insterest as a line item to the unordered list
                    currentBuddyInterests = studyBuddies[i].learningTags;
                    for (var j = 0; j < currentBuddyInterests.length; j++) {
                        var newInterestLI = $("<li>");
                        newInterestLI.text(currentBuddyInterests[j]);
                        newInterestsUL.append(newInterestLI);          
                    }

                    newInterestsTD.append(newInterestsUL);
                }

                 // Experience level
                 var newExperienceTD = $("<td>");
                 newExperienceTD.text(studyBuddies[i].expLevel);

                // Append fields to new row
                newRow.append(newFirstNameTD, newLastNameTD, newEmailTD, newLinkedInTD, newInterestsTD, newExperienceTD);

                // Append fields to newRow
                $("#study-buddy-table-body").append(newRow);
            }
        }
    }

    // Function, just for debugging purposes, to put at least one buddy in local storage
    function setSampleStudyBuddy() {
        var studyBuddies = [];

        var newStudyBuddy = {
            firstName: "David",
            lastName: "Balsley",
            emailAddress: "davidcbalsley@gmail.com",
            linkedInProfile: "https://www.linkedin.com/in/davidcbalsley/",
            experienceLevel: "Beginner",
            interests: ["html", "css", "javascript"]
        };
        studyBuddies.push(newStudyBuddy);

        localStorage.setItem("study-buddies", JSON.stringify(studyBuddies));

    }

    // setSampleStudyBuddy();  // debug

    renderStudyBuddies();
});