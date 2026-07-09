// ==========================
// RBX Friend Manager
// profile.js
// ==========================

window.onload = async function () {

    const params = new URLSearchParams(window.location.search);

    const username = params.get("user");

    if (!username) {

        alert("No username provided.");

        window.location.href = "index.html";

        return;

    }

    try {

        // Отримати ID
        const userId = await getUserId(username);

        // Отримати профіль
        const profile = await getProfile(userId);

        // Отримати аватар
        const avatar = await getAvatar(userId);

        // Вивести інформацію

        document.getElementById("avatar").src = avatar;

        document.getElementById("displayName").textContent =
            profile.displayName;

        document.getElementById("usernameText").textContent =
            "@" + profile.name;

        loadFriends(userId);

    }

    catch(error){

        alert(error.message);

        console.error(error);

    }

};

// ==========================
// Friends
// ==========================

async function loadFriends(userId){

    const data = await getFriends(id);

const friends = data.friends;
const count = data.count;

    document.getElementById("friendsCount").textContent =
        friends.length;

    console.log(friends);

}
