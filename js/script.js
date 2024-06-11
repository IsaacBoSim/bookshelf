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

        function navigateToPage(pageIndex) {
            const pages = document.querySelectorAll('.page');
            pages.forEach((page, index) => {
                if (index < pageIndex) {
                    setTimeout(() => {
                        page.classList.add('flipped');
                        page.style.transform = 'rotateY(-180deg)';
                        page.querySelector('.back').style.transform = 'rotateY(0deg)';
                        page.querySelector('.front').style.opacity = 0;
                        page.style.zIndex = -(pages.length - index);
                    }, 100 * index); // Add delay based on index
                } else if (index === pageIndex) {
                    setTimeout(() => {
                        page.classList.remove('flipped');
                        page.style.transform = 'rotateY(0deg)';
                        page.querySelector('.back').style.transform = 'rotateY(180deg)';
                        page.querySelector('.front').style.opacity = 1;
                        page.style.zIndex = pages.length - index;
                    }, 100 * index); // Add delay based on index
                } else {
                    setTimeout(() => {

                        page.classList.remove('flipped');
                        page.style.transform = 'rotateY(0deg)';
                        page.querySelector('.back').style.transform = 'rotateY(180deg)';
                        page.querySelector('.front').style.opacity = 1;
                        page.style.zIndex = pages.length - index;
                        }, 100 * index); // Add delay based on index
                }
            });
        }