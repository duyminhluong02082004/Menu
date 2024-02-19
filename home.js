document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("information-form");
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");

    form.addEventListener("submit", function(event) {
        var name = nameInput.value.trim();
        var email = emailInput.value.trim();
        var nameError = document.getElementById("name-error");
        var emailError = document.getElementById("email-error");

        nameError.textContent = "";
        emailError.textContent = "";

        if (name === "") {
            nameError.textContent = "Vui lòng điền vào trường này";
            nameError.style.display = "block";
            event.preventDefault(); 
        }

        if (email === "") {
            emailError.textContent = "Vui lòng điền vào trường này";
            emailError.style.display = "block";
            event.preventDefault(); 
        }
    });

    
    emailInput.addEventListener("input", function() {
        
        nameInput.value = emailInput.value;
    });

    
    nameInput.addEventListener("input", function() {
        
        emailInput.value = nameInput.value;
    });
});