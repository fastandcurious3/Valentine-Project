document.addEventListener("DOMContentLoaded", function () {
    let noClickCount = 0;
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");
    const firstGif = document.getElementById("firstGif");
    const secondGif = document.getElementById("secondGif");
    const finalMessage = document.getElementById("finalMessage");

    // Prompts for the "No" button
    const noPrompts = [
        "Are you sure?", "You might regret it.", "Mmakwena!😩",
        "Come on, don’t be shy pookie.", "Imagine all the fun we could have.",
        "I promise it will be worth it.", "Come on babygirl. You're killing meeeee.",
        "Just say yes. What do you have to lose?", "You’re making me sound like a BEG!",
        "I made this especially for you.", "You’re breaking my heart.💔",
        "BRO!😑 Say yes and make my day.", "You actually have no choice now. You're gonna say yes."
    ];

    // Handle No Button Click
    noButton.addEventListener("click", function () {
        if (noClickCount < noPrompts.length) {
            noButton.textContent = noPrompts[noClickCount]; // Change text inside the button
            noClickCount++; // Increase counter

            // Make Yes Button Grow Gradually
            let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
            yesButton.style.fontSize = (currentSize + 5) + "px"; // Increase font size
        }

        // After last No prompt, hide No button completely
        if (noClickCount === noPrompts.length) {
            noButton.style.display = "none"; // Hide no button
        }
    });

    // Handle Yes Button Click
    yesButton.addEventListener("click", function () {
        firstGif.style.display = "none"; // Hide first GIF
        secondGif.style.display = "block"; // Show second GIF
        finalMessage.style.display = "block"; // Show final mesage
        noButton.style.display = "none"; // Hide No button
        yesButton.style.sidplay  = "none"; // Hide Yes button
        document.getElementById("promptText"). style.display = "none"; // Hide "Will you be my Valentine"
        document.getElementById("yesButton").style.display = "none"
        
    });
});