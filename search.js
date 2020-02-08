/* Okay. What does this need to do? */

/* Given a coding concept, search users to find users who have that tag,
   return some summary info about them 

   Keep in mind that the Stack Exchange API only lets you search for tags 
   by user -- need user id to search for any tags */

// Okay. Start with tag and list of user ids
// (Step 2 for app could be adding connected users, )

const maxNumUsers = 100;  // The maximum number of users

// Look for Stack Overflow users who have a particular interest
// listed as a tag
// Return an array of users, include name, link to image, location, reputation, and
// score for this particular interest, along with userid
function getUsersWithInterest(interest) {
    var userIDString = "";          // Semi-colon delimited list of user IDs
    var usersIDsTagsCounts = [];    // List of user IDs, tags, and counts

    // The shape of what we're returning
    var newUserInfo = {
        userid: "",
        imageURL: "",
        name: "",
        location: "",
        reputation: "",
        tag: "",
        score: ""
    }

    // AJAX query to users would go here

    // StackExchange users/{ids}/tags takes semi-colon delimited list 
    // of user ids, so cycle through list of users and build string of
    // user ids
    if (users) {

        // console.log(users[0]); // debug

        if (users[0].items) {
            // console.log(users[0].items[0]); // debug

            userIDString = users[0].items[0].user_id;
        }

        for (var i = 1; i < users.length; i++) {
            if (users[i].items) {
                userIDString += ";";
                userIDString += users[i].items[0].user_id;
            }
        }
    }

    // console.log("userIDString = " + userIDString);  // debug

    // Use semi-colon delimited string of users to find list of tags

    // AJAX query to users/{ids}/tags would go here

    // Cycle through list of tags and find users who have the interest
    // tag in their list of tags
    // Where there's a match, add user id, tag, and count to array
    if (userTags) {
        for (var j = 0; j < userTags.length; j++) {
            // Check whether input interest tag matches
        }
    }

}

getUsersWithInterest("javascript");