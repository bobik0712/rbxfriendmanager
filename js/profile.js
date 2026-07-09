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

    document.getElementById("friendsCount").textContent =
        data.count;

    displayFriends(data.friends);

}

function displayFriends(friends) {

    const grid = document.getElementById("friendGrid");

    grid.innerHTML = "";

    for (const friend of friends) {

        const card = document.createElement("div");

        card.className = "friend-card";

        card.innerHTML = `
            <img src="${friend.avatar}" alt="${friend.name}">
            <h3>${friend.displayName}</h3>
            <p>@${friend.name}</p>
        `;

        card.onclick = () => {

            window.location.href =
                `profile.html?user=${friend.name}`;

        };

        grid.appendChild(card);

    }

}
