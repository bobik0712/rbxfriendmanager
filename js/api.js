const API = "https://roblox-api-service-dvlad3712-2694-zenzeyas.vercel.app";

async function getUserId(username) {
    const response = await fetch(`${API}/user/${username}`);

    if (!response.ok) {
        throw new Error("Failed to get user ID.");
    }

    const data = await response.json();

    return data.id;
}

async function getProfile(userId) {
    const response = await fetch(`${API}/profile/${userId}`);

    if (!response.ok) {
        throw new Error("Failed to load profile.");
    }

    return await response.json();
}

async function getAvatar(userId) {
    const response = await fetch(`${API}/avatar/${userId}`);

    if (!response.ok) {
        throw new Error("Failed to load avatar.");
    }

    const data = await response.json();

    return data.imageUrl;
}

async function getFriends(userId) {
    const response = await fetch(`${API}/friends/${userId}`);

    if (!response.ok) {
        throw new Error("Failed to load friends.");
    }

    const data = await response.json();

    return data;
}
