window.onload = async function () {

    const params = new URLSearchParams(window.location.search);

    const username = params.get("user");

    if (!username) {

        alert("No username provided.");

        window.location.href = "index.html";

        return;

    }

    try {

        const userId = await getUserId(username);

        const profile = await getProfile(userId);

        const avatar = await getAvatar(userId);

        document.getElementById("avatar").src = avatar;

        document.getElementById("displayName").textContent =
            profile.displayName;

        document.getElementById("usernameText").textContent =
            "@" + profile.name;

        await loadFriends(userId);

    }

    catch (error) {

        alert(error.message);

        console.error(error);

    }

};

async function loadFriends(userId) {

    const data = await getFriends(userId);

    const friends = data.friends;

    document.getElementById("friendsCount").textContent =
        data.count;

    console.log(friends);

}
