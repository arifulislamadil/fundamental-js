document.getElementById("add-border").addEventListener("click", function () {
    const container = document.getElementById("friend-container");
    container.style.border = "2px solid blue";
});

function addBackgroundColor() {
    const friends = document.getElementsByClassName("friend");
    for (const friend of friends) {
        friend.style.backgroundColor = "lightblue"
    }

}


document.getElementById("add-friend").addEventListener("click", function () {
    const container = document.getElementById("friend-container");
    const friendDiv = document.createElement("div");
    friendDiv.classList.add("friend");
    friendDiv.innerHTML = `
    <h3 class="friends-name">friend-4</h3>
    <p>Perspiciatis molestiae</p>`;
    container.appendChild(friendDiv)
})