// MODAL
function openModal() {
    document.getElementById("authModal").classList.add("show");
}

function closeModal() {
    document.getElementById("authModal").classList.remove("show");
}

function toggleAuth() {
    let title = document.getElementById("modalTitle");
    let btn = document.getElementById("authBtn");

    if (title.innerText === "Sign Up") {
        title.innerText = "Sign In";
        btn.innerText = "Sign In";
    } else {
        title.innerText = "Sign Up";
        btn.innerText = "Sign Up";
    }
}

// GOOGLE LOGIN (simple demo)
function googleLogin() {
    alert("Google login setup needed (Firebase).");
}

// CHAT
function sendMessage() {
    let input = document.getElementById("chatInput");
    let msg = input.value;

    if (!msg) return;

    let chat = document.getElementById("chatMessages");

    let user = document.createElement("div");
    user.innerText = "You: " + msg;
    chat.appendChild(user);

    let bot = document.createElement("div");
    bot.innerText = "AI: Thinking...";
    chat.appendChild(bot);

    input.value = "";

    setTimeout(() => {
        bot.innerText = "AI: This is a demo response.";
    }, 1000);
}
