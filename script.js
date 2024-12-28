document.addEventListener("DOMContentLoaded", () => {
    const backToTop = document.querySelector(".foot1");

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});