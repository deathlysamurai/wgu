document.addEventListener("DOMContentLoaded", (loaded) => {
    let dropdown = document.querySelector("#dropdown");
    let toTop = document.querySelector("#toTop");

    checkScrollPos();

    dropdown.addEventListener("click", function(e) {
        let dropdownLinks = document.querySelector("#dropdown-links");
        if(dropdownLinks.classList.contains("d-flex")) {
            dropdownLinks.classList.remove("d-flex");
        } else {
            dropdownLinks.classList.add("d-flex");
        }
    });

    window.onscroll = function(e) {
        checkScrollPos();
    };

    toTop.addEventListener("click", function(e) {
        window.scrollTo(0, 0);
    });
});

function checkScrollPos() {
    let header = document.querySelector("header");
    let dropdownLinks = document.querySelector("#dropdown-links");

    if(window.scrollY > 50) {
        header.classList.add("bg-black");
        dropdownLinks.classList.add("bg-black");
    } else {
        header.classList.remove("bg-black");
        dropdownLinks.classList.remove("bg-black");
    }
}
