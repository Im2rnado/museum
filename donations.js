
let donationtable, donationinput1, donationinput2, donationinput3, donationinput4, donationinput5, donationinput6, donationrIndex;

window.onload = function () {
    donationrIndex;
    donationtable = document.getElementById("donationtable");
    donationinput1 = document.getElementById("donationID");
    donationinput2 = document.getElementById("donatorName");
    donationinput3 = document.getElementById("donationAmount");
    donationinput4 = document.getElementById("donationDate");
    donationinput5 = document.getElementById("donationCountry");
    donationinput6 = document.getElementById("donationStatus");
    selectedRowToInputDonation();
};

function checkEmptyInputDonation() {
    let isEmpty = false,
        donationID = donationinput1.value,
        donatorName = donationinput2.value,
        donationAmount = donationinput3.value,
        donationDate = donationinput4.value,
        donationCountry = donationinput5.value,
        donationStatus = donationinput6.value;

    if (donationID === "") {
        alert("Donation ID Connot Be Empty");
        isEmpty = true;
    }
    else if (donatorName === "") {
        alert("Donator Name Connot Be Empty");
        isEmpty = true;
    }
    else if (donationAmount === "") {
        alert("Donation Amount Connot Be Empty");
        isEmpty = true;
    }
    else if (donationDate === "") {
        alert("Donation Date Connot Be Empty");
        isEmpty = true;
    }
    else if (donationCountry === "") {
        alert("Donation Country Connot Be Empty");
        isEmpty = true;
    }
    else if (donationStatus === "") {
        alert("Donation Status Connot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}

function selectedRowToInputDonation() {
    for (let i = 1; i < donationtable.rows.length; i++) {
        donationtable.rows[i].onclick = function () {
            // get the seected row index
            donationrIndex = this.rowIndex;
            donationinput1.value = this.cells[0].innerHTML;
            donationinput2.value = this.cells[1].innerHTML;
            donationinput3.value = this.cells[2].innerHTML;
            donationinput4.value = this.cells[3].innerHTML;
            donationinput5.value = this.cells[4].innerHTML;
            donationinput6.value = this.cells[5].innerHTML;

            window.scrollTo({ top: 500, behavior: 'smooth' });
        };
    }
}

function addNewdonationRecord() {
    // get the table by id                
    if (!checkEmptyInputDonation()) {
        let newRow = donationtable.insertRow(donationtable.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            cell4 = newRow.insertCell(3),
            cell5 = newRow.insertCell(4),
            cell6 = newRow.insertCell(5);

        // set the values into row cell's
        cell1.innerHTML = donationinput1.value;
        cell2.innerHTML = donationinput2.value;
        cell3.innerHTML = donationinput3.value;
        cell4.innerHTML = donationinput4.value;
        cell5.innerHTML = donationinput5.value;
        cell6.innerHTML = donationinput6.value;

        window.scrollTo({ top: 0, behavior: 'smooth' });
        selectedRowToInputDonation();
    }
}

function updatedonationRecord() {
    if (!checkEmptyInputDonation()) {
        donationtable.rows[donationrIndex].cells[0].innerHTML = donationinput1.value;
        donationtable.rows[donationrIndex].cells[1].innerHTML = donationinput2.value;
        donationtable.rows[donationrIndex].cells[2].innerHTML = donationinput3.value;
        donationtable.rows[donationrIndex].cells[3].innerHTML = donationinput4.value;
        donationtable.rows[donationrIndex].cells[4].innerHTML = donationinput5.value;
        donationtable.rows[donationrIndex].cells[5].innerHTML = donationinput6.value;

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

}

function deleteDonationRecord() {
    if (!checkEmptyInputDonation()) {
        donationtable.deleteRow(donationrIndex);
        donationinput1.value = "";
        donationinput2.value = "";
        donationinput4.value = "";
        donationinput5.value = "";
        donationinput6.value = "";

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}