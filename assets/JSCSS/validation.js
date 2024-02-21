document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the form submission
    document.querySelector("form").addEventListener("submit", function(event) {
        // Validate required fields
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const feedback = document.getElementById("feedback").value.trim();

        if (name === "" || email === "" || feedback === "") {
            alert("Please fill out all required fields: Name, Email, and Feedback.");
            event.preventDefault(); // Prevent form submission
        }
    });
});