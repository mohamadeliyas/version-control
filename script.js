// script.js

window.onload = function() {
    const p = document.querySelector('p');

    const button = document.createElement('button');
    button.textContent = "Change Text";

    button.style.display = "block";
    button.style.margin = "20px auto";
    button.style.padding = "10px 20px";
    button.style.fontSize = "1rem";
    button.style.cursor = "pointer";

    p.insertAdjacentElement('afterend', button);

    button.addEventListener('click', function() {
        p.textContent = "The paragraph text has been changed by JavaScript!";
    });
};
