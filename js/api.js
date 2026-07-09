const API = "https://roblox-api-service.vercel.app";

// Отримати ID користувача
async function getUserId(username) {

    const response = await fetch(
        `${API}/api/user?username=${encodeURIComponent(username)}`
    );

    if (!response.ok) {
        throw new Error("Failed to get user ID.");
    }

    const data = await response.json();

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
