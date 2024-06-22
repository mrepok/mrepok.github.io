document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a'); // Select all navigation links

    links.forEach(link => {
        link.addEventListener('click', function(e) { // Add click event listener to each link
            e.preventDefault(); // Prevent default action of the link (jumping to section)
            const targetId = this.getAttribute('href').substring(1); // Get the target section ID
            const targetSection = document.getElementById(targetId); // Find the target section element

            window.scrollTo({
                top: targetSection.offsetTop - 50, // Scroll to the top position of the target section, accounting for header height
                behavior: 'smooth' // Smooth scrolling behavior
            });
        });
    });

    // Simple form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission
        alert('Message sent successfully!');
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll('.section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
