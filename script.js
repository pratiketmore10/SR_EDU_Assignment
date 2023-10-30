$(document).ready(function() {
    $("#signup-form").submit(function(e) {
        e.preventDefault();
        
        // Get form values
        var name = $("input[name='name']").val();
        var age = $("input[name='age']").val();
        var email = $("input[name='email']").val();
        var dob = $("input[name='dob']").val();
        var contact = $("input[name='contact']").val();
        var profileImage = $("input[name='profile-image']").val();
        
        // Client-side validation
        var isValid = true;
        var ageRegex = /^\d+$/;
        var emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        var dobRegex = /^(\d{2})-(\d{2})-(\d{4})$/;
        var contactRegex = /^\d{10}$/;

        if (!age.match(ageRegex)) {
            alert("Age should contain only numbers.");
            isValid = false;
        }

        if (!email.match(emailRegex)) {
            alert("Invalid email address.");
            isValid = false;
        }

        if (!dob.match(dobRegex)) {
            alert("Invalid date of birth. Use format dd-mm-yyyy.");
            isValid = false;
        }

        if (!contact.match(contactRegex)) {
            alert("Contact number should be 10 digits.");
            isValid = false;
        }

        var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
        if (!profileImage.match(allowedExtensions)) {
            alert("Invalid profile image. Use .jpg, .jpeg, or .png format.");
            isValid = false;
        }

        if (isValid) {
            // Submit the form if it's valid
            this.submit();
        }
    });
});

