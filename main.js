function newsletter() {
    let email = document.getElementById("newsletterEmail").value;

    if (email == "") {
        alert("Email cannot be empty");
        return false;
    }
    else {
        alert("Thanks for subscribing to our newsletter!");
    }
}

function validateContact() {
    let username = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let enquiry = document.getElementById("question").value;

    if (username == "") {
        alert("Name cannot be empty");
        return false;
    } else if (email == "") {
        alert("Email cannot be empty");
        return false;
    } else if (enquiry == "") {
        alert("Enquiry cannot be empty");
        return false;
    }
    else {
        alert(`Thanks for submitting ${username}`);
    }
}

function validatePartner() {
    let username = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let org = document.getElementById("org").value;

    if (username == "") {
        alert("Name cannot be empty");
        return false;
    } else if (email == "") {
        alert("Email cannot be empty");
        return false;
    } else if (org == "") {
        alert("Organization cannot be empty");
        return false;
    }
}

function booking() {
    let username = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let amount = document.getElementById("amount").value;

    if (username == "") {
        alert("Name cannot be empty");
        return false;
    } else if (email == "") {
        alert("Email cannot be empty");
        return false;
    } else if (phone == "") {
        alert("Phone Number cannot be empty");
        return false;
    } else if (date == "") {
        alert("Date cannot be empty");
        return false;
    } else if (amount == "") {
        alert("Amount cannot be empty");
        return false;
    }
}

function addYears() {
    let list = document.getElementById("exp_year");

    for (k = 2024; k <= 2040; k++) {
        combo = document.createElement("option");

        combo.className = "faq-content";
        combo.textContent = k;
        combo.value = k;

        list.append(combo);
    }
}

function validateCard() {
    let username = document.getElementById("name").value;
    let number = document.getElementById("num").value;
    let ccv = document.getElementById("ccv").value;
    let month = document.getElementById("exp_month").value;
    let year = document.getElementById("exp_year").value;

    if (username == "") {
        alert("Name cannot be empty");
        return false;
    } else if (number == "") {
        alert("Card Number cannot be empty");
        return false;
    } else if (month == "") {
        alert("Expiry Month cannot be empty");
        return false;
    } else if (year == "") {
        alert("Expiry Year cannot be empty");
        return false;
    }

    if (ccv.length != 3) {
        alert("CCV must be 3 numbers");
        return false;
    }

    if (!document.getElementById("master").checked && !document.getElementById("amex").checked && !document.getElementById("visa").checked) {
        alert("Please a choose a Card Type");
        return false;
    }
}

function validateCenter() {
    let username = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let address = document.getElementById("address").value;
    let agree = document.getElementById("agree").checked;

    if (username == "") {
        alert("Name cannot be empty");
        return false;
    } else if (email == "") {
        alert("Email cannot be empty");
        return false;
    } else if (age == "") {
        alert("Age cannot be empty");
        return false;
    } else if (!document.getElementById("male").checked && !document.getElementById("female").checked) {
        alert("Gender cannot be empty");
        return false;
    } else if (address == "") {
        alert("Address cannot be empty");
        return false;
    } else if (!agree) {
        alert("Must agree to Terms and Conditions");
        return false;
    }
}

function validateReserveContinue() {
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let seats = document.getElementById("seats").value;
    let time = document.getElementById("time").value;
    let agree = document.getElementById("agree").checked;

    if (phone == "") {
        alert("Phone cannot be empty");
        return false;
    } else if (date == "") {
        alert("Date cannot be empty");
        return false;
    } else if (!document.getElementById("group1").checked && !document.getElementById("group2").checked) {
        alert("Group choice cannot be empty");
        return false;
    } else if (seats == "") {
        alert("Seats cannot be empty");
        return false;
    } else if (time == "") {
        alert("Time cannot be empty");
        return false;
    } else if (!agree) {
        alert("Must agree to Course Regulations");
        return false;
    }
}

function validateDonation() {
    let username = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let amount = document.getElementById("amount").value;
    let country = document.getElementById("country").value;

    if (username == "") {
        alert("Name cannot be empty");
        return false;
    } else if (email == "") {
        alert("Email cannot be empty");
        return false;
    } else if (phone == "") {
        alert("Phone cannot be empty");
        return false;
    } else if (amount == "") {
        alert("Amount cannot be empty");
        return false;
    } else if (country == "") {
        alert("Country cannot be empty");
        return false;
    }
}

function hostEvent() {
    let username = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let org = document.getElementById("org").value;
    let date = document.getElementById("date").value;

    if (username == "") {
        alert("Name cannot be empty");
        return false;
    } else if (email == "") {
        alert("Email cannot be empty");
        return false;
    } else if (org == "") {
        alert("Organization cannot be empty");
        return false;
    } else if (date == "") {
        alert("Date cannot be empty");
        return false;
    }
}

function addReview() {
    let username = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let rating = document.getElementById("rating").value;
    let comment = document.getElementById("comment").value;

    if (username == "") {
        alert("Name cannot be empty");
        return false;
    } else if (email == "") {
        alert("Email cannot be empty");
        return false;
    }

    if (comment == "") {
        comment = "<i>No comment</i>"
    }

    let newRow = document.getElementById("reviews-table").insertRow(-1),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3)

    // set the values into row cell's
    cell1.innerHTML = username;
    cell2.innerHTML = rating;
    cell3.innerHTML = comment;
    cell4.innerHTML = "02/01/2024";

    window.scrollTo({ top: 0, behavior: 'smooth' });

    return false;
}

function career() {
    let username = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let job = document.getElementById("job").value;
    let cv = document.getElementById("cv").value;

    if (username == "") {
        alert("Name cannot be empty");
        return false;
    } else if (email == "") {
        alert("Email cannot be empty");
        return false;
    } else if (job == "") {
        alert("Job cannot be empty");
        return false;
    } else if (cv == "") {
        alert("CV cannot be empty");
        return false;
    }
}

function signup() {
    let username = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;

    if (username == "") {
        alert("Name cannot be empty");
        return false;
    } else if (email == "") {
        alert("Email cannot be empty");
        return false;
    } else if (phone == "") {
        alert("Phone cannot be empty");
        return false;
    } else if (age == "" || age < 10) {
        alert("Age must be above 10");
        return false;
    } else if (!document.getElementById("male").checked && !document.getElementById("female").checked) {
        alert("Gender cannot be empty");
        return false;
    }


    let lowerCaseLetters = /[a-z]/g;
    if (!password.match(lowerCaseLetters)) {
        alert("Password must contain a lowercase letter");
        return false;
    }

    // Validate capital letters
    let upperCaseLetters = /[A-Z]/g;
    if (!password.match(upperCaseLetters)) {
        alert("Password must contain an upercase letter");
        return false;
    }

    // Validate numbers
    let numbers = /[0-9]/g;
    if (!password.match(numbers)) {
        alert("Password must contain a number");
        return false;
    }

    // Validate length
    if (password.length < 8) {
        alert("Password must be at least 8 characters");
        return false;
    }

    alert("Successfully signed up! Welcome " + username)
}

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == "") {
        alert("Email cannot be empty");
        return false;
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters");
        return false;
    }
}

function myaccount(row) {
    let table = document.getElementById("acctable");
    let newValue = document.getElementById("_" + row.cells[2].id).value;

    if (newValue == "") {
        alert("Cannot update an empty value")
        return false;
    }
    else {
        table.rows[row.rowIndex].cells[1].innerHTML = newValue;
        return false;
    }
}

function cancelBooking(row) {
    let table = document.getElementById("booking-table");

    if (confirm('Are you sure you want to cancel this booking?')) {
        table.deleteRow(row.rowIndex);
    }
    return false;
}

function approveEvent(row) {
    alert("Successfully approved event for " + row.cells[1].innerHTML)
    return false;
}

function cancelEvent(row) {
    let table = document.getElementById("events-table");

    if (confirm('Are you sure you want to cancel this event?')) {
        table.deleteRow(row.rowIndex);
    }
    return false;
}

function removeNewsletter(row) {
    let table = document.getElementById("newsletter-table");

    if (confirm('Are you sure you want to remove ' + row.cells[0].innerHTML)) {
        table.deleteRow(row.rowIndex);
    }
    return false;
}

function resendNewsletter(row) {
    if (confirm('Are you sure you want to resend ' + row.cells[1].innerHTML)) {
        alert("Sucessfully resent the newsletter!");
    }
    return false;
}

function sendNewsletter() {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let images = document.getElementById("images").value;

    if (title == "") {
        alert("Title cannot be empty");
        return false;
    } else if (content == "") {
        alert("Content cannot be empty");
        return false;
    }

    let table = document.getElementById("pre-newsletter-table");

    let newRow = table.insertRow(-1),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        cell5 = newRow.insertCell(4),
        cell6 = newRow.insertCell(5),
        cell7 = newRow.insertCell(6);

    cell1.innerHTML = table.rows.length - 1;
    cell2.innerHTML = title;
    cell3.innerHTML = content;
    cell4.innerHTML = "02/01/2024";
    cell5.innerHTML = images != "";
    cell6.innerHTML = 4;
    cell7.innerHTML = '<button class="contact-button-yes" onclick="return resendNewsletter(this.parentNode.parentNode)" type="submit">Resend</button>';

    window.scrollTo({ top: 600, behavior: 'smooth' });
    return false;
}

function deleteAccount(row) {
    let table = document.getElementById("accounts-table");

    if (confirm("Are you sure you want to delete " + row.cells[0].innerHTML + "'s account?")) {
        table.deleteRow(row.rowIndex);
    }
    return false;
}

function backendSignup() {
    let username = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;
    let gender = "";

    if (document.getElementById("male").checked) {
        gender = "Male";
    } else if (document.getElementById("female").checked) {
        gender = "Female";
    }

    if (username == "") {
        alert("Name cannot be empty");
        return false;
    } else if (email == "") {
        alert("Email cannot be empty");
        return false;
    } else if (phone == "") {
        alert("Phone cannot be empty");
        return false;
    } else if (gender == "") {
        alert("Gender cannot be empty");
        return false;
    } else if (age == "" || age < 10) {
        alert("Age must be above 10");
        return false;
    }

    let lowerCaseLetters = /[a-z]/g;
    if (!password.match(lowerCaseLetters)) {
        alert("Password must contain a lowercase letter");
        return false;
    }

    // Validate capital letters
    let upperCaseLetters = /[A-Z]/g;
    if (!password.match(upperCaseLetters)) {
        alert("Password must contain an upercase letter");
        return false;
    }

    // Validate numbers
    let numbers = /[0-9]/g;
    if (!password.match(numbers)) {
        alert("Password must contain a number");
        return false;
    }

    // Validate length
    if (password.length < 8) {
        alert("Password must be at least 8 characters");
        return false;
    }

    let table = document.getElementById("accounts-table");

    let newRow = table.insertRow(-1),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        cell5 = newRow.insertCell(4),
        cell6 = newRow.insertCell(5);

    cell1.innerHTML = username;
    cell2.innerHTML = email;
    cell3.innerHTML = phone;
    cell4.innerHTML = gender;
    cell5.innerHTML = age;
    cell6.innerHTML = '<button class="contact-button-no" onclick="return deleteAccount(this.parentNode.parentNode)"  type="submit">Delete</button>';

    window.scrollTo({ top: 0, behavior: 'smooth' });
    return false;
}

function respondYes(row) {
    alert("Successfully responded with a 'Yes' to " + row.cells[1].innerHTML)
    return false;
}

function respondNo(row) {
    alert("Successfully responded with a 'No' to " + row.cells[1].innerHTML)
    return false;
}

function deleteReview(row) {
    let table = document.getElementById("reviews-table");

    if (confirm("Are you sure you want to delete " + row.cells[0].innerHTML + "'s review?")) {
        table.deleteRow(row.rowIndex);
    }
    return false;
}

function submitReview() {
    let username = document.getElementById("userName").value;
    let rating = document.getElementById("rating").value;
    let comment = document.getElementById("comment").value;

    if (username == "") {
        alert("Name cannot be empty");
        return false;
    } else if (rating == "") {
        alert("Rating cannot be empty");
        return false;
    } 

    if (comment == "") {
        comment = "<i>No comment</i>"
    }

    let table = document.getElementById("reviews-table");

    let newRow = table.insertRow(-1),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        cell5 = newRow.insertCell(4);

    cell1.innerHTML = username;
    cell2.innerHTML = rating;
    cell3.innerHTML = comment;
    cell4.innerHTML = "03/01/2024";
    cell5.innerHTML = '<button class="contact-button-no" onclick="return deleteReview(this.parentNode.parentNode)" type="submit">Delete</button>';

    window.scrollTo({ top: 0, behavior: 'smooth' });
    return false;
}

function validateShopPayment() {
    let username = document.getElementById("fullName").value;
    let email = document.getElementById("Email").value;
    let tel = document.getElementById("Tel").value;
    let country = document.getElementById("country").value;
    let city = document.getElementById("city").value;
    let address = document.getElementById("address").value;

    if (username == "") {
        alert("Name cannot be empty");
        return false;
    } else if (email == "") {
        alert("Email cannot be empty");
        return false;
    } else if (tel == "") {
        alert("Phone Number cannot be empty");
        return false;
    } else if (country == "") {
        alert("Country cannot be empty");
        return false;
    } else if (city == "") {
        alert("City cannot be empty");
        return false;
    } else if (address == "") {
        alert("Address cannot be empty");
        return false;
    } else if (!document.getElementById("checkbox1").checked && !document.getElementById("checkbox2").checked && !document.getElementById("checkbox3").checked) {
        alert("Shipping Method cannot be empty");
        return false;
    }
}