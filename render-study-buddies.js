$(document).ready(function() {

    // Get list of study buddies from local storage and render them
    function renderStudyBuddies() {
        var studyBuddies = [];      // List of study buddies retrieved from local storage
        var lastRow = null;         // The last row in a table

        // Get list of study buddies from local storage
        studyBuddies = JSON.parse(localStorage.getItem("study-buddies"));
        console.log("studyBuddies = " + studyBuddies); // debug

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

                // Append fields to new row
                newRow.append(newFirstNameTD, newLastNameTD);

                // Append fields to newRow
                $("#study-buddy-table-body").append(newRow);
            }
        }

        // For now, make sure I can add rows to tables using just hardcoded values
        

        /* newFirstNameTD = $("<td>")
        // newFirstNameTD.text("David"); // works great -- debug
        newRow.append(newFirstNameTD);
        $("#study-buddy-table-body").append(newRow);

        lastRow = $("#study-buddy-table-body").lastChild;
        console.log("lastRow = " + lastRow);

        // lastRow.append("<tr><td>Johnny</td><td>Slimjeans</td></tr>");  // Doesn't work -- lastRow undefined -- debug
        // $("#study-buddy-table-body").append("<tr><td>Johnny</td><td>Slimjeans</td></tr>"); // Works -- debug
        */
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