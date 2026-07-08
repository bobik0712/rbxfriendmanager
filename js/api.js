// ===============================
// RBX Friend Manager
// api.js
// ===============================

// Отримати ID користувача за ніком
async function getUserId(username) {

    const response = await fetch("https://users.roblox.com/v1/usernames/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            usernames: [username],
            excludeBannedUsers: false
        })
    });

    if (!response.ok) {
        throw new Error("Failed to get user ID.");
    }

    const data = await response.json();

    if (!data.data.length) {
        throw new Error("User not found.");
    }

    return data.data[0].id;

}

// Отримати інформацію про профіль
async function getProfile(userId) {

    const response = await fetch(
        `https://users.roblox.com/v1/users/${userId}`
    );

    if (!response.ok) {
        throw new Error("Failed to load profile.");
    }

    return await response.json();

}

// Отримати аватар
async function getAvatar(userId) {

    const response = await fetch(
        `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userId}&size=180x180&format=Png&isCircular=false`
    );

    if (!response.ok) {
        throw new Error("Failed to load avatar.");
    }

    const data = await response.json();

    return data.data[0].imageUrl;

}

// Отримати список друзів
async function getFriends(userId) {

    const response = await fetch(
        `https://friends.roblox.com/v1/users/${userId}/friends`
    );

    if (!response.ok) {
        throw new Error("Failed to load friends.");
    }

    const data = await response.json();

    return data.data;

}