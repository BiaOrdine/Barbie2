//chat
document.getElementById("change-theme-btn").addEventListener("click", function() {
    // Alterna entre as cores do tema
    const body = document.body;
    if (body.style.backgroundColor === "rgb(248, 198, 228)") {
        body.style.backgroundColor = "#9b59b6"; // cor roxa
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "#f8c6e4"; // cor rosa
        body.style.color = "#8e44ad"; // cor escura
    }
});