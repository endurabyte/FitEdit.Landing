document.addEventListener('DOMContentLoaded', function() {
    let startTime = new Date();
    let slider = document.getElementById('slider');
    let submitButton = document.getElementById('submitButton');
    let form = document.getElementById('signupForm');
    let signupErrorLabel = document.getElementById('signupErrorLabel');
    let signupHumanAdvice = document.getElementById('signupHumanAdvice');

    let minFillTime = 3000; // Minimum form fill time in milliseconds

    slider.value = 0;
    slider.oninput = function() {
        if (this.value == this.max) {
            submitButton.disabled = false; 
            signupHumanAdvice.style.visibility = 'hidden'
        } else {
            submitButton.disabled = true;
            signupHumanAdvice.style.visibility = 'visible'
        }
    }

    form.addEventListener('submit', function(e) {
        // Prevent the form from submitting normally
        e.preventDefault();

        // Check if honeypot field is filled
        if (document.getElementById('hp').value) {
            return;
        }

        let fillTime = new Date() - startTime;
        
        // Check if user filled the form too quickly
        if (fillTime < minFillTime) {
            let remainingTime = ((minFillTime - fillTime) / 1000).toFixed(0);
            signupErrorLabel.innerText = `You clicked submit too quickly. We can't verify that you're human. Please try again in ${remainingTime} seconds.`;
            signupErrorLabel.style.display = 'block'
            return;
        }
        
        // Disable the submit button and change its text
        submitButton.disabled = true;
        submitButton.value = 'Submitting...';

        // Construct the form data
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;

        let data = {
            name,
            email
        };

        // Send the data to the server using fetch
        fetch('https://api.fitedit.io/subscribe/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(async response => {
            if (!response.ok) {
                console.error('Email signup problem: ', response);
                if (response.status == 400) {
                    let text = await response.text();
                    console.log(text);
                    signupErrorLabel.innerText = text;
                }
                else {
                    signupErrorLabel.innerText = 'There was a problem on our end. Please try again';
                }
                signupErrorLabel.style.display = 'block'
            } else {
                console.log('Success:', data);
                form.innerHTML = `<span class='signup-message'>Thanks, ${name}! Check your inbox and spam folder at ${email}</span>`;
                signupErrorLabel.style.display = 'none'
            }
        }).catch((error) => {
            console.error('Email signup exception:', error);
            signupErrorLabel.innerText = 'There was a problem on our end. Please try again';
            signupErrorLabel.style.display = 'block'
        }).finally(() => {
            // Re-enable the submit button and reset its text
            submitButton.disabled = false;
            submitButton.value = 'Submit';
        });
    });
});
