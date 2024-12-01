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
    "", // Cover
    "This image is possibly AI-generated.", // 1
    "This image is unlikely AI-generated.", // 2
    "This image is possibly AI-generated.", // 3
    "This image is unlikely AI-generated.", // 4
    "This image is likely AI-generated.", // 5
    "This image is possibly AI-generated.", // 6
    "This image is possibly AI-generated.", // 7
    "This image is likely AI-generated." // 8
];

const infoImages = [
    "", // Cover
    "images/possibly.png", // 1
    "images/unlikely.png", // 2
    "images/possibly.png", // 3
    "images/unlikely.png", // 4
    "images/likely.png", // 5
    "images/possibly.png", // 6
    "images/possibly.png", // 7
    "images/likely.png" // 8
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

    // Update hover box content for the info button
    infoText.textContent = infoMessages[index] || "No additional information available.";
    infoImage.src = infoImages[index] || "images/default.png"; // Default image for missing entries
 
    // Always display the info button
    infoButton.style.visibility = 'visible';
    infoButton.style.opacity = '1';

    // Show or hide the info button
    if (index === 0) {
        infoButton.style.visibility = 'hidden';
        infoButton.style.opacity = '0';
        infoButton.style.visibility = 'hidden';
        hoverBox.style.display = 'none';
    } else {
        infoButton.style.visibility = 'visible';
        infoButton.style.opacity = '1';
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