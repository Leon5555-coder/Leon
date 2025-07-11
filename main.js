document.addEventListener("DOMContentLoaded", () => {
    const businessCards = document.querySelectorAll(".business-card");

    businessCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.1)";
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("open");
        menuToggle.classList.toggle("open");

        // Menü ein-/ausblenden
        if (menu.classList.contains("open")) {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookies");

    if (!localStorage.getItem("cookiesAccepted")) {
        cookieBanner.style.display = "block";
    }

    acceptButton.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.style.display = "none";
    });
});
