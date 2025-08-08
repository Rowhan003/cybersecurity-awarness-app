// Get the form and warning message elements
var loginForm = document.getElementById("fakeLoginForm");
var warningText = document.getElementById("phishingWarning");

// When the form is submitted
loginForm.addEventListener("submit", function(event) {
    // Prevent actual form submission
    event.preventDefault();

    // Show phishing warning
    warningText.innerText = "⚠️ WARNING: This is a phishing simulation. Never enter your real credentials on untrusted sites.";

    // Clear the input fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
});
