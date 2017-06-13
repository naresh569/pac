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
    window.addEventListener("hashchange", function (evt) {
        // console.log('evt', evt);
        // evt.preventDefault();
        // if(history.pushState) {
        //     history.pushState(null, null, evt.newURL);
        // }
        // else {
        //     location.hash = evt.newURL;
        // }
        closeMenu();
    });
    window.addEventListener("scroll", closeMenu);

    var main = document.getElementsByTagName("main")[0];
    main.addEventListener("click", function () {
        closeMenu();
    });

    $(".carousel").carousel();

    document.getElementById("list").addEventListener("click", function (evt) {
        console.log('evt', evt.target.id);
        var status = document.getElementById("list-" + evt.target.id).className;
        if (status === "show") {
            document.getElementById("list-" + evt.target.id).className = "hide";
        } else {
            document.getElementById("list-" + evt.target.id).className = "show";
        }
    });
    
    document
    .getElementById("submit")
    .addEventListener("click", function (evt) {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var mobile = document.getElementById("mobile").value;
        var reason = document.getElementById("reason").value;

        // Validation
        if (name === "" || email === "" || mobile === "" || reason === "") {
            alert("Fill the details");
            return;
        }

        var regex;

        regex = /^[a-zA-Z ]{2,30}$/;
        if (!regex.test(name)) {
            alert("Invalid Name..");
            return;
        }

        regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(email)) {
            alert("Invalid Email Address..");
            return;
        }

        regex = /^\d{10}/;
        if (!regex.test(mobile) || mobile.length !== 10 || mobile[0] === '0') {
            alert("Invalid Mobile..");
            return;
        }

        if (reason.length <= 0) {
            alert("Invalid Reason..");
            return;
        } 

        var url = "http://nationalparliament.com/action.php";
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    console.log(xhr.responseText);
                    alert("Registration Successful!");
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("mobile").value = "";
                    document.getElementById("reason").value = "";
                } else {
                    console.log('There was a problem with the request.');
                }
            }
        };

        xhr.open("POST", url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(
            "name=" + encodeURIComponent(name) + "&" +
            "email=" + encodeURIComponent(email) + "&" +
            "mobile=" + encodeURIComponent(mobile) + "&" +
            "reason=" + encodeURIComponent(reason)
        );
    });
});

function closeMenu() {
    var menu = document.getElementById("menu");
    if (menu.className === "menu menu-open") {
        menu.className = "menu menu-hide";
    }
}