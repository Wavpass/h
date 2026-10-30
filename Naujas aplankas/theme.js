const themeButton = document.getElementById("ChangeTheme");

let isDarkTheme = false;

themeButton.addEventListener("click", ChangeTheme)

function ChangeTheme() {
    if (isDarkTheme === false) {
        document.body.style.backgroundColor = "#222";
        document.body.style.color = "#fff";
        document.body.style.border = "#222";

        themeButton.textContent = "The Sun";
        themeButton.setAttribute("aria-pressed" , "true");

        isDarkTheme = true;
    } else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#222";

        themeButton.textContent = "Dark Theme";
        themeButton.setAttribute("aria-pressed" , "false");

        isDarkTheme = false;
    }
}