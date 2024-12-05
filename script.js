document.addEventListener("DOMContentLoaded", function() {

    // Show Details Toggle Functionality
    const buttons = document.querySelectorAll(".project button");

    buttons.forEach(button => {
        // Add a click event listener to each button
        button.addEventListener("click", function() {
            // Get the associated details section using the button's data attribute
            const detailsId = button.getAttribute("data-details-id");
            const details = document.getElementById(detailsId);

            // Toggle the visibility and button text
            if (details.style.display === "none" || details.style.display === "") {
                details.style.display = "block";
                button.textContent = "Hide Details";
            } else {
                details.style.display = "none";
                button.textContent = "Show Details";
            }
        });
    });

    // Form Validation
    const form = document.getElementById("contactForm");

    // Listen for form submission
    form.addEventListener("submit", function(event) {
        let isValid = true;

        // Clear any previous error messages
        document.querySelectorAll(".error").forEach(error => error.remove());

        // Validate Name
        const nameField = document.getElementById("name");
        if (nameField.value.trim().length < 2) {
            displayError(nameField, "Name must be at least 2 characters long.");
            isValid = false;
        }

        // Validate Email
        const emailField = document.getElementById("email");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value.trim())) {
            displayError(emailField, "Please enter a valid email address.");
            isValid = false;
        }

        // Validate Message
        const messageField = document.getElementById("message");
        if (messageField.value.trim().length < 10) {
            displayError(messageField, "Message must be at least 10 characters long.");
            isValid = false;
        }

        // Validate Phone Number (allowing flexible input)
        const phoneField = document.getElementById("phone");
        const phonePattern = /^[0-9\s\(\)-]*$/;  // This allows digits, spaces, parentheses, and dashes
        if (phoneField.value && !phonePattern.test(phoneField.value.trim())) {
            displayError(phoneField, "Please enter a valid phone number.");
            isValid = false;
        }

        // Prevent form submission if any field is invalid
        if (!isValid) {
            event.preventDefault();
        }
    });

    // Function to display error message
    function displayError(field, message) {
        const error = document.createElement("div");
        error.className = "error";
        error.style.color = "red";
        error.style.fontSize = "0.9em";
        error.textContent = message;
        field.parentNode.insertBefore(error, field.nextSibling);
    }

});

const toggleThemeButton = document.getElementById('toggleTheme');
toggleThemeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        document.querySelectorAll('.project').forEach(proj => {
            proj.style.display = proj.dataset.category === category || category === 'all' ? 'block' : 'none';
        });
    });
});

