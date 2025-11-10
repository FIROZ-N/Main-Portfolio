const menuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});



// Initialize EmailJS
emailjs.init("n1t-Wx24X6F1C-7BA");

function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const statusText = document.getElementById('form-status');
    const btn = document.querySelector('.submit-btn');

    // Validation
    if (!name || !email || !message) {
        statusText.textContent = '❌ Please fill all fields';
        statusText.style.color = 'red';
        return;
    }

    btn.textContent = 'Sending...';
    btn.disabled = true;
    statusText.textContent = '';

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    emailjs.send('service_3qwqtqk', 'template_67jz4xq', templateParams)
        .then(function () {
            statusText.textContent = '✅ Message sent successfully!';
            statusText.style.color = 'green';
            // Clear form
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        })
        .catch(function (error) {
            statusText.textContent = '❌ Failed to send. Try again.';
            statusText.style.color = 'red';
            console.log('Error:', error);
        })
        .finally(function () {
            btn.textContent = 'Send Message';
            btn.disabled = false;
        });
}





// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');

    mobileMenuBtn.addEventListener('click', function () {
        mobileMenu.classList.add('active');
    });

    closeMenu.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
    });

    // Close menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
        });
    });
});

