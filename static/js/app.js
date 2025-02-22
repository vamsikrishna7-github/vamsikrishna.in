document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section'); // Get all sections
    const navLinks = document.querySelectorAll('.nav-link'); // Get all navbar links

    // Function to update the active navbar link
    const updateActiveLink = () => {
        let index = sections.length;

        // Loop through sections to find the one in view
        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add active class to the current link
        navLinks[index].classList.add('active');
    };

    // Add scroll event listener to update active link
    window.addEventListener('scroll', updateActiveLink);

    // Add click event listeners to navbar links for smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = link.getAttribute('href'); // Get the target section ID
            const targetSection = document.querySelector(targetId); // Find the target section

            // Scroll to the target section smoothly
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Update active link
            navLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Call the function initially to set the active link
    updateActiveLink();
});
