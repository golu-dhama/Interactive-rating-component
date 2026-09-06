// ==================================================
// 01. DOM ELEMENTS
// ==================================================

const ratingButtons = document.querySelectorAll(".rt-btn");
const submitButton = document.querySelector("button[type='submit']");

const ratingCard = document.querySelector(".rating-card");
const thankYouState = document.querySelector(".thank-you-state");
const selectedRating = document.querySelector(".selected-rating");


// ==================================================
// 02. RATING STATE
// ==================================================

let currentRating = null;


// ==================================================
// 03. RATING BUTTON SELECTION
// ==================================================

ratingButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Pehle sab buttons se selected class remove
        ratingButtons.forEach(function (btn) {
            btn.classList.remove("selected");
        });

        // Click kiye hue button ko selected karo
        button.classList.add("selected");

        // Selected rating store karo
        currentRating = button.textContent;
    });

});


// ==================================================
// 04. SUBMIT BUTTON
// ==================================================

submitButton.addEventListener("click", function () {

    // Agar user ne rating select nahi ki
    if (currentRating === null) {
        return;
    }

    // Selected rating show karo
    selectedRating.textContent = `You selected ${currentRating} out of 5`;

    // Rating card hide
    ratingCard.style.display = "none";

    // Thank-you state show
    thankYouState.style.display = "flex";
});