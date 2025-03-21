document.addEventListener("DOMContentLoaded", function () {
    const ctaBtn = document.querySelector(".cta-btn");
    ctaBtn.addEventListener("mouseenter", function () {
        this.style.backgroundColor = "black";
        this.style.color = "gold";
    });
    ctaBtn.addEventListener("mouseleave", function () {
        this.style.backgroundColor = "gold";
        this.style.color = "black";
    });
});
