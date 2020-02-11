$(document).ready(function() {

    // Get list of study buddies from local storage and render them
    function renderStudyBuddies() {
        var studyBuddies = [];      // List of study buddies retrieved from local storage
        var lastRow = null;         // The last row in a table

        // Get list of study buddies from local storage
        studyBuddies = JSON.parse(localStorage.getItem("study-buddies"));
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
                newEmailLink.text(studyBuddies[i].emailAddress);
                newEmailLink.attr("href", "mailto:" + studyBuddies[i].emailAddress);
                newEmailTD.append(newEmailLink);

                // LinkedIn profile -- put profile in table as link to LinkedIn profile
                var newLinkedInTD = $("<td>");
                newLinkedInLink = $("<a>");
                newLinkedInLink.text(studyBuddies[i].linkedInProfile);
                newLinkedInLink.attr("href", studyBuddies[i].linkedInProfile);
                newLinkedInTD.append(newLinkedInLink);

                // Experience level
                var newExperienceTD = $("<td>");
                newExperienceTD.text(studyBuddies[i].experienceLevel);

                // Interests
                var newInterestsTD = $("<td>");
                var currentBuddyInterests = null;
                if (studyBuddies[i].interests) {

                    // Create an unordered list of interests
                    var newInterestsUL = $("<ul>");

                    // Add each buddy's insterest as a line item to the unordered list
                    currentBuddyInterests = studyBuddies[i].interests;
                    for (var j = 0; j < currentBuddyInterests.length; j++) {
                        var newInterestLI = $("<li>");
                        newInterestLI.text(currentBuddyInterests[j]);
                        newInterestsUL.append(newInterestLI);          
                    }

                    newInterestsTD.append(newInterestsUL);
                }

                // Append fields to new row
                newRow.append(newFirstNameTD, newLastNameTD, newEmailTD, newLinkedInTD, newExperienceTD, newInterestsTD);

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

    setSampleStudyBuddy();  // debug

    renderStudyBuddies();
});