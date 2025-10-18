// script.js

window.onload = function() {
    const p = document.querySelector('p');

    // Create the button element
    const button = document.createElement('button');
    button.textContent = "Change Text";

    // Style the button
    button.style.display = "block";
    button.style.margin = "20px auto";
    button.style.padding = "10px 20px";
    button.style.fontSize = "1rem";
    button.style.cursor = "pointer";

    // Insert button right after the paragraph
    p.insertAdjacentElement('afterend', button);

    // Add a click event listener to the button
    button.addEventListener('click', function() {
        p.textContent = "The paragraph text has been changed by JavaScript!";
    });
};
