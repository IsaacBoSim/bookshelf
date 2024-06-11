document.querySelectorAll('.page').forEach((page, index, pages) => {
    page.addEventListener('click', function() {
        this.classList.toggle('flipped');

        if (this.classList.contains('flipped')) {
            this.style.transform = 'rotateY(-180deg)';
            this.querySelector('.back').style.transform = 'rotateY(0deg)';
            this.querySelector('.front').style.opacity = 0;
        } else {
            this.style.transform = 'rotateY(0deg)';
            this.querySelector('.back').style.transform = 'rotateY(180deg)';
            this.querySelector('.front').style.opacity = 1;
        }

        this.style.zIndex = pages.length;

        this.addEventListener('transitionend', function onTransitionEnd() {
            if (this.classList.contains('flipped')) {
                this.style.zIndex = -(pages.length - index);
            } else {
                this.style.zIndex = pages.length - index;
            }
            this.removeEventListener('transitionend', onTransitionEnd);
        });
    });
});
