console.log("API VERSION 2");

const API = "https://rbxapiserver.vercel.app";
// Отримати ID користувача
async function getUserId(username) {

    const url = `${API}/api/user?username=${encodeURIComponent(username)}`;

    console.log("REQUEST URL:", url);

    const response = await fetch(url);

    console.log("STATUS:", response.status);
    console.log("OK:", response.ok);

    const text = await response.text();

    console.log("BODY:", text);

    if (!response.ok) {
        throw new Error(`User API Error: ${response.status}`);
    }

    const data = JSON.parse(text);

    return data.id;

}

// Отримати профіль
async function getProfile(userId) {

    const response = await fetch(
        `${API}/api/profile?id=${userId}`
    );

    if (!response.ok) {
        throw new Error("Failed to load profile.");
    }

    return await response.json();

}

// Отримати аватар
async function getAvatar(userId) {

    const response = await fetch(
        `${API}/api/avatar?id=${userId}`
    );

    if (!response.ok) {
        throw new Error("Failed to load avatar.");
    }

    const data = await response.json();

    return data.imageUrl;

}

// Отримати друзів
async function getFriends(userId) {

    const response = await fetch(
        `${API}/api/friends?id=${userId}`
    );

    if (!response.ok) {
        throw new Error("Failed to load friends.");
    }

    return await response.json();

}

async function getAvatars(ids) {

    const response = await fetch(

        `${API}/api/avatar?ids=${ids.join(",")}`

    );

    if (!response.ok) {

        throw new Error("Failed to load avatars.");

    }

    return await response.json();

}
