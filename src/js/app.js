window.addEventListener('resize', resize);

function resize() {
    console.log('resize:', window.innerWidth);
}

resize();
console.log('Hello');

// about section
function knowmore(link) {
    const moreInfo = document.querySelector('.display-text');
    
    if (!moreInfo.classList.contains('show')) {
        moreInfo.classList.add('show');
        link.innerHTML = "Read less";
    } else {
        moreInfo.classList.remove('show');
        link.innerHTML = "Know more";
    }
}

// contact section form
function validateEmail(input) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const submit = document.querySelector('#submit');
    
    input.classList.remove('border-secondary', 'border-danger', 'border-success');

    if (!emailPattern.test(input.value.trim())) {
        input.classList.add('border-danger');
        submit.classList.add('disabled');
    } else {
        input.classList.add('border-success');
        submit.classList.remove('disabled');
    }
}

// global view all 
function viewAll(link) {
    const services = document.querySelectorAll('.show-hide');

    if (!link.classList.contains('active')) {
        link.classList.add('active');
        services.forEach(service => {
            service.classList.add('active'); // Apply fade-in effect
            service.style.display = "block"; // Ensure it's visible
        });
        link.innerHTML = "View less <img width='20' height='20' src='./src/img/services/view-all.png' alt='show-all-views'/>";
    } else {
        link.classList.remove('active');
        services.forEach(service => {
            service.classList.remove('active'); // Fade-out effect
            setTimeout(() => {
                service.style.display = "none"; // Hide after animation
            }, 500); // Delay matches transition duration
        });
        link.innerHTML = "View all <img width='20' height='20' src='./src/img/services/view-all.png' alt='show-all-views'/>";
    }
}
