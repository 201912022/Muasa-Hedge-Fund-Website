// Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form Validation for Contact Section
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.querySelector("input[type='text']").value.trim();
    let email = document.querySelector("input[type='email']").value.trim();
    let message = document.querySelector("textarea").value.trim();
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting.");
        return;
    }
    
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Message sent successfully! We will get back to you soon.");
    this.reset(); // Clears the form
});

// Email Validation Function
function validateEmail(email) {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return emailPattern.test(email);
}

// Hero Section Animation
window.addEventListener("load", function() {
    const heroText = document.querySelector(".hero h1");
    heroText.style.opacity = "0";
    heroText.style.transform = "translateY(-20px)";
    
    setTimeout(() => {
        heroText.style.opacity = "1";
        heroText.style.transform = "translateY(0)";
        heroText.style.transition = "opacity 1s ease, transform 1s ease";
    }, 500);
});
