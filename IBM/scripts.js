// Search functionality
document.getElementById('searchBtn').addEventListener('click', function() {
    let query = document.getElementById('search').value.toLowerCase();
    let sections = document.querySelectorAll('section');

    sections.forEach(section => {
        let text = section.textContent.toLowerCase();
        if (text.includes(query)) {
            section.style.display = '';
        } else {
            section.style.display = 'none';
        }
    });
});


// Login form functionality
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const result = await response.json();
        if (response.ok) {
            alert(result.message);
            window.location.href = 'index.html'; // Redirect to the homepage
        } else {
            alert(result.message);
        }
    } catch (error) {
        alert('An error occurred. Please try again.');
    }
});


// Contact form functionality
document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });
        const result = await response.json();
        if (response.ok) {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset();
        } else {
            alert('Failed to send message.');
        }
    } catch (error) {
        alert('An error occurred. Please try again.');
    }
});
