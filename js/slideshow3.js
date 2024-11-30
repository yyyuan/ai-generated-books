// Slideshow Functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.mySlides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const infoButton = document.querySelector('.info-button');
const hoverBox = document.querySelector('.hover-box');
const infoText = document.getElementById("info-text");
const infoImage = document.getElementById("info-image");
// Elements for dynamic updates
const homeButton = document.querySelector('.home-button');

function goHome() {
    window.location.href = 'index.html'; // Replace with the actual path to your home page
}

// Messages and images for the info button
const infoMessages = [
    "", // First slide (no message)
    "This is some information about the second image.", // Second slide
    "This is some information about the third image." // Third slide
];

const infoImages = [
    "", // First slide (no image)
    "images/robot.png", // Second slide image
    "images/human.png" // Third slide image
];

// Show the specified slide and manage button visibility
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        const textContainer = slide.querySelector('.text-container');
        if (i === index) {
            slide.classList.add('active');
            if (textContainer) textContainer.classList.add('active');
        } else {
            if (textContainer) textContainer.classList.remove('active');
        }
    });

    // Hide the Previous button on the first slide
    prevButton.style.display = index === 0 ? 'none' : 'flex';

    // Hide the Next button on the last slide
    nextButton.style.display = index === slides.length - 1 ? 'none' : 'flex';

    // Manage the visibility, message, and image of the info button and hover box
    if (index === 1 || index === 2) { // Show on second and third slides
        infoButton.style.visibility = 'visible';
        infoButton.style.opacity = '1';

        // Update hover box content
        infoText.textContent = infoMessages[index];
        infoImage.src = infoImages[index];
    } else {
        infoButton.style.visibility = 'hidden';
        infoButton.style.opacity = '0';
        hoverBox.style.display = 'none'; // Ensure hover box is hidden if button is hidden
    }

    homeButton.style.display = index === slides.length - 1 ? 'block' : 'none';
}

// Navigate to the next or previous slide
function plusSlides(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlide(slideIndex);
}

// Initialize first slide
document.addEventListener("DOMContentLoaded", () => {
    showSlide(slideIndex);

    // Add hover functionality to show the hover box dynamically
    infoButton.addEventListener("mouseenter", () => {
        if (infoButton.style.visibility === "visible") {
            hoverBox.style.display = "flex";
        }
    });

    infoButton.addEventListener("mouseleave", () => {
        hoverBox.style.display = "none";
    });

    // Add key controls for navigation
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            plusSlides(-1); // Navigate to the previous slide
        } else if (event.key === 'ArrowRight') {
            plusSlides(1); // Navigate to the next slide
        }
    });
});