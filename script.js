
function generateLoveText() {
    const yourName = document.querySelector("#first-name").value;
    const partnerName = document.querySelector("#second-name").value;

    let firstName = yourName.replace(/\s+/g, ' ').trim().toLowerCase().charAt(0).toUpperCase() + yourName.slice(1);
    let secondName = partnerName.replace(/\s+/g, ' ').trim().toLowerCase().charAt(0).toUpperCase() + partnerName.slice(1);


    // Regular expression to check if names contain only alphabetical characters and emojis like hearts
    var nameRegex = /^[A-Za-z\s\u2764]+$/;

    if (!nameRegex.test(firstName) || !nameRegex.test(secondName)) {
        alert("Please enter valid names");
        return false; // Prevent form submission 
    }

    else {

        let ranNumber = Math.floor(Math.random() * 100) + 1;
        let animation = "";
        let paragraph = "";


        if (
            (firstName == "Junaiba karim" || firstName == "Junaiba" || firstName == "Pervez" || firstName == "Pervez Iqbal") &&
            (secondName == "Junaiba karim" || secondName == "Junaiba" || secondName == "Pervez" || secondName == "Pervez Iqbal")) {

            ranNumber = 100;
            animation = "celestial-celebration";
            paragraph = `Congratulations ${firstName} and ${secondName}! Your love has reached a perfect score of 100! 🌟✨ This calls for a celestial celebration, as your love is truly exceptional and bound for eternity.`;
            console.log(ranNumber, animation, firstName, secondName);

        } else if (ranNumber <= 5) {
            animation = "heart-flutter";

            paragraph = `Oh, the sweet whispers of love! ${firstName} and ${secondName}, your hearts are dancing with joy, creating a delightful melody of affection.`;
        } else if (ranNumber <= 10) {
            animation = "sparkle-burst";

            paragraph = `A burst of sparkles surrounds ${firstName} and ${secondName}! Your chemistry is dazzling, promising moments filled with joy and laughter.`;
        } else if (ranNumber <= 15) {
            animation = "love-wave";

            paragraph = `Love is like a gentle wave, and it's sweeping ${firstName} and ${secondName} off their feet. Enjoy the romantic ride!`;
        } else if (ranNumber <= 20) {
            animation = "moonlight-serenade";

            paragraph = `Under the moonlight, ${firstName} and ${secondName}, your love serenades the night. Let the celestial romance illuminate your hearts.`;
        } else if (ranNumber <= 25) {
            animation = "star-crossed";

            paragraph = `In the vast cosmic symphony, the stars align for ${firstName} and ${secondName}. Your love is harmonious and destined for greatness.`;
        } else if (ranNumber <= 30) {
            animation = "cupid-arrow";

            paragraph = `Cupid's arrow strikes true for ${firstName} and ${secondName}! Love is precise and aimed right at your hearts.`;
        } else if (ranNumber <= 35) {
            animation = "whirlwind-romance";

            paragraph = `Hold on tight, ${firstName} and ${secondName}! Your love is a whirlwind, sweeping you off your feet and into a magical romance.`;
        } else if (ranNumber <= 40) {
            animation = "butterfly-bliss";

            paragraph = `Fluttering butterflies surround ${firstName} and ${secondName}. Your love is a garden of blissful butterflies, bringing joy to your hearts.`;
        } else if (ranNumber <= 45) {
            animation = "twinkle-tango";

            paragraph = `In the dance of love, ${firstName} and ${secondName}, you perform the enchanting Twinkle Tango. Let the rhythm of love guide your steps.`;
        } else if (ranNumber <= 50) {
            animation = "sweet-serendipity";

            paragraph = `Fate smiles upon ${firstName} and ${secondName}. Your love story is a delightful serendipity, unfolding in the most charming way.`;
        } else if (ranNumber <= 55) {
            animation = "heartbeat-harmony";

            paragraph = `In the symphony of love, the heartbeats of ${firstName} and ${secondName} play in perfect harmony. A melody of everlasting affection.`;
        } else if (ranNumber <= 60) {
            animation = "dreamy-dazzle";

            paragraph = `Prepare for a dreamy dazzle, ${firstName} and ${secondName}! Your love sparkles with enchantment, painting a canvas of romantic dreams.`;
        } else if (ranNumber <= 65) {
            animation = "moonlit-magic";

            paragraph = `Under the moonlit sky, ${firstName} and ${secondName}, your love weaves a magical tale. Let the moonlight illuminate your romantic journey.`;
        } else if (ranNumber <= 70) {
            animation = "sunshine-sweetheart";

            paragraph = `Radiant as the sunshine, the love between ${firstName} and ${secondName} is warm and sweet. Bask in the glow of your affection.`;
        } else if (ranNumber <= 75) {
            animation = "starlight-symphony";

            paragraph = `In the celestial symphony, ${firstName} and ${secondName}, your love resonates like a beautiful starlight melody. A cosmic masterpiece.`;
        } else if (ranNumber <= 80) {
            animation = "heartstrings-harbor";

            paragraph = `In the harbor of love, the heartstrings of ${firstName} and ${secondName} find refuge. Sail away on the seas of romantic bliss.`;
        } else if (ranNumber <= 85) {
            animation = "love-lagoon";

            paragraph = `Dive into the Love Lagoon, where the hearts of ${firstName} and ${secondName} find solace in the tranquil waters of affection.`;
        } else if (ranNumber <= 90) {
            animation = "romantic-rain";

            paragraph = `In the rain of romance, ${firstName} and ${secondName}, your love showers blessings. Dance through the droplets of affection.`;
        } else if (ranNumber <= 95) {
            animation = "magnetic-attraction";

            paragraph = `Like magnets drawn together, ${firstName} and ${secondName} share a magnetic attraction. Your love is a force that cannot be denied.`;
        } else {
            animation = "eternal-echo";

            paragraph = `An eternal echo resonates between ${firstName} and ${secondName}. Your love transcends time, creating a legacy of enduring affection.`;
        }

        // Display the results in your HTML or perform other actions
        sessionStorage.setItem("animation", animation);
        sessionStorage.setItem("paragraph", paragraph);
        sessionStorage.setItem("lovePercentage", ranNumber);
        sessionStorage.setItem("firstName", firstName);
        sessionStorage.setItem("secondName", secondName);

        // Redirect to prediction.html with URL parameters
        // window.location.href = `./predict/prediction.html//?first-name=${encodeURIComponent(firstName)}&second-name=${encodeURIComponent(secondName)}/`;
    }
}

function submitForm(event) {
    event.preventDefault();  // Prevent the default form submission
    generateLoveText();  // Call the generateLoveText function
}

// Call the function to generate and display the love text

function shareOnSocial(platform) {

    let previewUrl = getPreviewUrl();
    let shareUrl;

    switch (platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(previewUrl)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(previewUrl)}`;
            break;
        case 'instagram':
            // Handle Instagram sharing logic
            alert("Instagram sharing is not directly supported. You can manually share the preview URL.");
            return;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(previewUrl)}`;
            break;
        default:
            // Handle unsupported platform or provide a default behavior
            alert("Unsupported social media platform");
            return;
    }

    window.open(shareUrl, '_blank');
}

document.addEventListener("DOMContentLoaded", function () {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Update the content of the element with the current year
    document.getElementById("currentYear").textContent = currentYear;
});

function getPreviewUrl() {
    // Adjust this function to return the URL of the preview image or content that you want to share.
    // You can use the URL of your result-container, or a specific image URL if available.
    // Example:
    return window.location.href; // Use the current page URL as the preview URL
}

function switchPopup() {
    const popup = document.querySelector('.about');
    popup.style.display = (popup.style.display === "none" || popup.style.display === "") ? "block" : "none";
}



