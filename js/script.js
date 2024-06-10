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

        // Ensure the current page is always on top during the flip
        this.style.zIndex = pages.length;

        // Handle the end of the transition to update the z-index properly
        this.addEventListener('transitionend', function onTransitionEnd() {
            if (this.classList.contains('flipped')) {
                // Set z-index to negative when flipped
                this.style.zIndex = -(pages.length - index);
            } else {
                // Set z-index to positive when not flipped
                this.style.zIndex = pages.length - index;
            }
            // Remove the event listener after it has been triggered
            this.removeEventListener('transitionend', onTransitionEnd);
        });
    });
});
