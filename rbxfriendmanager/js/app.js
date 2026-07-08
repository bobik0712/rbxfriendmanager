const usernameInput = document.getElementById("username");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", searchPlayer);

usernameInput.addEventListener("keydown", function(event){

    if(event.key === "Enter"){

        searchPlayer();

    }

});

function searchPlayer(){

    const username = usernameInput.value.trim();

    if(username === ""){

        alert("Please enter a Roblox username.");

        usernameInput.focus();

        return;

    }

    saveRecent(username);

    // Тимчасово просто переходимо
    window.location.href =
        "profile.html?user=" + encodeURIComponent(username);

}

function saveRecent(username){

    let recent =
        JSON.parse(localStorage.getItem("recentSearches")) || [];

    // Якщо вже є — прибираємо старий запис
    recent = recent.filter(name =>

        name.toLowerCase() !== username.toLowerCase()

    );

    // Додаємо на початок
    recent.unshift(username);

    // Максимум 5 записів
    if(recent.length > 5){

        recent.pop();

    }

    localStorage.setItem(

        "recentSearches",

        JSON.stringify(recent)

    );

}