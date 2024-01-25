
// Get values from the session
let firstName = sessionStorage.getItem("firstName");
let secondName = sessionStorage.getItem("secondName");
let animation = sessionStorage.getItem("animation");
let paragraph = sessionStorage.getItem("paragraph");
let lovePercentage = sessionStorage.getItem("lovePercentage");

// Check if necessary values are present
if (firstName && secondName && animation && paragraph && lovePercentage) {
    // Display the values in the relevant elements on the prediction page
    // Set the HTML content of the result-animation div
    document.getElementById("result-animation").src =
        "../images/gif/" + animation + ".gif";
    document.getElementById("result-paragraph").textContent = paragraph;
    document.getElementById(
        "love-percentage"
    ).textContent = `${lovePercentage}%`;

    document.getElementById("firstName").textContent = firstName;
    document.getElementById("secondName").textContent = secondName;
} else {
    // If the necessary values are not present, redirect to another page or show an error message
    window.location.href = "../index.html"; // Replace 'error.html' with the actual error page
}
