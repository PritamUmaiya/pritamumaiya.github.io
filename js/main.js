document.addEventListener("DOMContentLoaded", () => {
    // Add typing effect to the infoMessage element
    const infoMessage = document.getElementById("infoMessage");
    const message = "Under construction.. Check back soon.";

    let index = 0;
    function typeMessage() {
        if (index < message.length) {
            infoMessage.textContent += message.charAt(index);
            index++;
            setTimeout(typeMessage, 100); // Adjust typing speed here
        }
    }
    typeMessage();
});