document.querySelectorAll('.page').forEach((page, index, pages) => {
    page.addEventListener('click', function() {
        // Toggle the flipped class to manage the flip state
        this.classList.toggle('flipped');

        if (this.classList.contains('flipped')) {
            // When flipped, rotate to show the back
            this.style.transform = 'rotateY(-180deg)';
            this.querySelector('.back').style.transform = 'rotateY(0deg)';
            this.querySelector('.front').style.opacity = 0;
            // Set z-index to negative when flipped
            this.style.zIndex = -(pages.length - index);
        } else {
            // When flipped back, rotate to show the front
            this.style.transform = 'rotateY(0deg)';
            this.querySelector('.back').style.transform = 'rotateY(180deg)';
            this.querySelector('.front').style.opacity = 1;
            // Set z-index to positive when not flipped
            this.style.zIndex = pages.length - index;
        }

        // Ensure the current page is always on top in its respective stack
        this.style.zIndex = this.classList.contains('flipped') ? -(pages.length - index) : pages.length - index;
    });
});
