document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const items = document.querySelectorAll(".carousel-item");
    const prevButton = document.createElement("button");
    const nextButton = document.createElement("button");

    prevButton.innerHTML = "&#10094;";
    nextButton.innerHTML = "&#10095;";
    prevButton.className = "carousel-button-prev";
    nextButton.className = "carousel-button-next";

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "carousel-buttons";
    buttonContainer.appendChild(prevButton);
    buttonContainer.appendChild(nextButton);
    carousel.appendChild(buttonContainer);

    let currentIndex = 0;

    const updateCarousel = (index) => {
        const width = carousel.offsetWidth;
        items.forEach((item, idx) => {
            item.style.transform = `translateX(-${index * width}px)`;
        });
    };

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel(currentIndex);
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel(currentIndex);
    });

    // Resize event to adjust the carousel
    window.addEventListener("resize", () => updateCarousel(currentIndex));

    // Auto-scroll (optional)
    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel(currentIndex);
    }, 5000);
});
