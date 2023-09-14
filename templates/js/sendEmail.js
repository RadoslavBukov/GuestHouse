function sendFormData() {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    const data = {
        name: name,
        email: email,
        phone: phone,
        message: message,
    };

    // Send the data to the server
    fetch('/path/to/server/script.py', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            // Show a success message or redirect the user to a thank-you page
            document.querySelector('.errormessage').innerHTML = 'Message sent successfully!';
        } else {
            // Handle the case where sending the message failed
            document.querySelector('.errormessage').innerHTML = 'Message sending failed. Please try again.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.querySelector('.errormessage').innerHTML = 'An error occurred. Please try again later.';
    });
}