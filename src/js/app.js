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
