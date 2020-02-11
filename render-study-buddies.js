$(document).ready(function() {

    // Get list of study buddies from local storage and render them
    function renderStudyBuddies() {
        var studyBuddies = [];      // List of study buddies retrieved from local storage
        var lastRow = null;         // The last row in a table

        // Clear the screen
        $("#study-buddy-tiles").empty();

        // Get list of study buddies from local storage
        studyBuddies = JSON.parse(localStorage.getItem("studyBuddies"));

        if (studyBuddies) {
            for (var i = 0; i < studyBuddies.length; i++) {

                // Create a new tile
                var newTileDiv = $("<div>");
                newTileDiv.addClass("tile is-parent");
                
                // Create a new article
                var newArticle = $("<article>");
                newArticle.addClass("tile is-child notification is-primary");

                // Create a new title -- for the name
                var newTitleP = $("<p>");
                newTitleP.addClass("title");
                newTitleP.text(studyBuddies[i].firstName + " " + studyBuddies[i].lastName);

                // Create a new div for the rest of the buddy's info
                var newContentDiv = $("<div>");
                newContentDiv.addClass("content");

                // Email address
                var newEmailP = $("<p>");
                var newEmailLink = $("<a>");
                var newEmailSpan = $("<span>");
                newEmailSpan.text("Email: ");
                newEmailLink.text(studyBuddies[i].email);
                newEmailLink.attr("href", "mailto:" + studyBuddies[i].email);
                newEmailSpan.append(newEmailLink);
                newEmailP.append(newEmailSpan);

                // LinkedIn profile
                var newLinkedInP = $("<p>");
                newLinkedInLink = $("<a>");
                var newLinkedInSpan = $("<span>");
                newLinkedInSpan.text("LinkedIn Profile: ");
                newLinkedInLink.text(studyBuddies[i].linkedIn);
                newLinkedInLink.attr("href", studyBuddies[i].linkedIn);
                newLinkedInSpan.append(newLinkedInLink);
                newLinkedInP.append(newLinkedInSpan);

                // Interests
                var newInterestsP = $("<p>");
                newInterestsP.text("Interests:");
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

                    newInterestsP.append(newInterestsUL);
                }

                // Experience
                var newExperienceP = $("<p>");
                newExperienceP.text("Experience: " + studyBuddies[i].expLevel);

                // Append email address, LinkedIn profile, interests, and experience level
                // to content div
                newContentDiv.append(newEmailP, newLinkedInP, newInterestsP, newExperienceP);

                // Append title (buddy's name) to article
                newArticle.append(newTitleP);

                // Append email, LinkedIn, interest, and experience to article
                newArticle.append(newContentDiv);

                // Append article to tile
                newTileDiv.append(newArticle);

                // Append new tile to list of tiles
                $("#study-buddy-tiles").append(newTileDiv);
            }
        }
    }

    renderStudyBuddies();
});