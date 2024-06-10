// Function to load content from external HTML files into specified elements
function loadContent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
}

// Load content from about.html into the element with id 'about-content'
loadContent('about.html', 'about-content');

// Load content from project.html into the element with id 'project-content'
loadContent('project.html', 'project-content');

// Load content from blog.html into the element with id 'blog-content'
loadContent('blog.html', 'blog-content');

// Load content from contact.html into the element with id 'contact-content'
loadContent('contact.html', 'contact-content');

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
