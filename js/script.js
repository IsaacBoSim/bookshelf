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
            if (p === this) {
                // Bring the current page to the front
                p.style.zIndex = pages.length;
            } else {
                // Push all other pages behind, maintaining their order
                p.style.zIndex = pages.length - i;
            }
        });
    });
});
