document.addEventListener("DOMContentLoaded", function() {
    // Select all "Show Details" buttons
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
});



