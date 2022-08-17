//                          DOM

var bookmarks = document.getElementById("content-bookmarks");

var bookmarkList = document.querySelectorAll(".bookmark-content");
var settings = document.getElementById("settings");

var options = document.getElementById("options");
var optionsCloseBtn = document.getElementById("options-closeBtn");

var input = document.getElementById("input");
var inputBox = document.getElementById("content-search-input");

var isDarkTheme = document.getElementById("dark-theme-check");
var isVisible = document.getElementById("last-activity-check");

//                             Settings

settings.addEventListener("click", () => {
    const list = options.classList;
    list.remove("animation-hideOptions");
    list.add("animation-loadOptions");
});

optionsCloseBtn.addEventListener("click", () => {
    const list = options.classList;
    list.remove("animation-loadOptions");
    list.add("animation-hideOptions");
});

//                             Inputs

input.addEventListener("focus", () => {
    inputBox.style.outline = "1.5px solid aqua";
});

input.addEventListener("blur", () => {
    inputBox.style.outline = "none";
});

//                             Settings

isDarkTheme.addEventListener("change", (item) => {
    var isChecked = item.target.checked;

    if (isChecked) {
        document.documentElement.setAttribute("data-theme", "dark");
        settings.style.background =
            "url(./photos/settingsWhite.png) no-repeat center";
        localStorage.setItem("theme", "dark");
        console.log(localStorage.getItem("theme"));
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        settings.style.background =
            "url(./photos/settingsDark.png) no-repeat center";
        localStorage.setItem("theme", "light");
    }
});

isVisible.addEventListener("change", (item) => {
    var isChecked = item.target.checked;

    if (!isChecked) {
        bookmarks.style.visibility = "hidden";
        localStorage.setItem("visible", "false");
        debugger;
    } else {
        bookmarks.style.visibility = "visible";
        localStorage.setItem("visible", "true");
    }
});

//                                    Load

window.addEventListener("load", () => {
    var theme = localStorage.getItem("theme");
    var visible = localStorage.getItem("visible");

    if (visible == "false") {
        bookmarks.style.visibility = "hidden";
        localStorage.setItem("visible", "false");
        isVisible.checked = false;
    } else if (visible == "true") {
        bookmarks.style.visibility = "visible";
        localStorage.setItem("visible", "true");
        isVisible.checked = true;
    } else {
        bookmarks.style.visibility = "visible";
        localStorage.setItem("visible", "true");
        isVisible.checked = true;
    }

    bookmarks.style.opacity = "1";

    if (theme == null) {
        settings.style.background =
            "url(./photos/settingsDark.png) no-repeat center";
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    } else {
        if (theme == "light") {
            settings.style.background =
                "url(./photos/settingsDark.png) no-repeat center";
            document.documentElement.setAttribute("data-theme", "light");
            isDarkTheme.checked = false;
        } else {
            settings.style.background =
                "url(./photos/settingsWhite.png) no-repeat center";
            document.documentElement.setAttribute("data-theme", "dark");
            isDarkTheme.checked = true;
        }
    }
});
