if(!window.location.hash)
    window.location.hash = "#about";

function onNavigation() {
    document.querySelectorAll("nav li a").forEach(a => {
        if(a.getAttribute("href") == window.location.hash) {
            a.classList.add("selected");
        } else {
            a.classList.remove("selected");
        }
    });
    window.scrollTo({top: 0});
}

addEventListener("hashchange", onNavigation);
addEventListener("load", onNavigation);