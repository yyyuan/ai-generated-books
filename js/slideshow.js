// Slideshow Functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.mySlides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const infoButton = document.querySelector('.info-button');

// Messages for the info button
const infoMessages = [
    "", // First slide (no message)
    "This is some information about the second image.", // Second slide
    "This is some information about the third image." // Third slide
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
    if (index === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'flex';
    }

    // Hide the Next button on the last slide
    if (index === slides.length - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'flex';
    }

    // Manage the visibility and message of the info button
    if (index === 1 || index === 2) { // Show on second and third slides
        infoButton.style.visibility = 'visible';
        infoButton.style.opacity = '1';
        infoButton.setAttribute('data-message', infoMessages[index]); // Update message
    } else {
        infoButton.style.visibility = 'hidden';
        infoButton.style.opacity = '0';
    }
}

// Navigate to the next or previous slide
function plusSlides(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlide(slideIndex);
}

// Initialize first slide
document.addEventListener("DOMContentLoaded", () => {
    showSlide(slideIndex);

    // Add key controls for navigation
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            plusSlides(-1); // Navigate to the previous slide
        } else if (event.key === 'ArrowRight') {
            plusSlides(1); // Navigate to the next slide
        }
    });
});
