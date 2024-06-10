document.querySelectorAll('.page').forEach((page, index, pages) => {
    page.addEventListener('click', function() {
        // Toggle the flipped class to manage the flip state
        this.classList.toggle('flipped');

        if (this.classList.contains('flipped')) {
            // When flipped, rotate to show the back
            this.style.transform = 'rotateY(-180deg)';
            this.querySelector('.back').style.transform = 'rotateY(0deg)';
            this.querySelector('.front').style.opacity = 0;
        } else {
            // When flipped back, rotate to show the front
            this.style.transform = 'rotateY(0deg)';
            this.querySelector('.back').style.transform = 'rotateY(180deg)';
            this.querySelector('.front').style.opacity = 1;
        }

        // Adjust z-index for all pages to maintain correct stacking order on flip
        pages.forEach((p, i) => {
            if (p.classList.contains('flipped')) {
                // Flipped pages should be above non-flipped pages
                p.style.zIndex = pages.length - i + 1;
            } else {
                // Non-flipped pages should be below flipped pages
                p.style.zIndex = pages.length - i - 1;
            }
        });

        // Ensure the current page is on top
        this.style.zIndex = pages.length;
    });
});
