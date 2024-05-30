function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tab" and remove the class "active"
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
//add button
// Get modal element
var modal = document.getElementById("myModal");
// Get button that opens the modal
var btn = document.getElementById("openModalBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// Get the submit button inside the modal
var submitBtn = document.getElementById("submitEntry");

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks the submit button, add the new entry and close the modal
submitBtn.onclick = function () {
    // Get the value of the input field
    var newEntryValue = document.getElementById("newEntry").value;
    // Get the select menu
    var select = document.getElementById("mySelect");

    // Create a new option element
    var option = document.createElement("option");
    option.value = newEntryValue;
    option.text = newEntryValue;

    // Add the new option to the select menu
    select.appendChild(option);

    // Clear the input for next use
    document.getElementById("newEntry").value = "";

    // Close the modal
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
//sumbit messege
document
    .getElementById("submitForm")
    .addEventListener("click", function (event) {
        if (event.target.id === "infoSubmit") {
            event.preventDefault();
            const messageElement = document.getElementById(
                "confirmationMessage"
            );
            messageElement.style.display = "block";
            messageElement.innerHTML = "افزودن خدمات با موفقیت انجام شد";
        }
    });
//toggle buttons
document.getElementById("toggleSwitch").addEventListener("change", function () {
    var content = document.getElementById("contentToToggle");
    if (this.checked) {
        // Enable content
        content
            .querySelectorAll("input, button, select, textarea")
            .forEach(function (element) {
                element.disabled = false;
            });
    } else {
        // Disable content
        content
            .querySelectorAll("input, button, select, textarea")
            .forEach(function (element) {
                element.disabled = true;
            });
    }
});
