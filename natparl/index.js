window.addEventListener("load", function () {
    var button = document.getElementById("btn-hamburger");
    button.addEventListener("click", function () {
        console.log('button clicked..');
        var menu = document.getElementById("menu");
        if (menu.className === "menu" || menu.className === "menu menu-hide") {
            menu.className = "menu menu-open";
        } else {
            menu.className = "menu menu-hide";
        }
        console.log(menu.className);
    })
    window.addEventListener("hashchange", closeMenu);
    window.addEventListener("scroll", closeMenu);

    var main = document.getElementsByTagName("main")[0];
    main.addEventListener("focus", closeMenu);
});

function closeMenu() {
    console.log('hash change..');
    var menu = document.getElementById("menu");
    if (menu.className === "menu menu-open") {
        menu.className = "menu menu-hide";
    }
}