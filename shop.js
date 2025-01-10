
let shoptable, shopinput1, shopinput2, shopinput3, shopinput4, shopinput5, shopinput6, shopinput7, shopinput8, shopinput9, shopinput10, shoprIndex;

window.onload = function () {
    shoprIndex;
    shoptable = document.getElementById("shoptable");
    shopinput1 = document.getElementById("orderID");
    shopinput2 = document.getElementById("productId");
    shopinput3 = document.getElementById("orderDate");
    shopinput4 = document.getElementById("customerName");
    shopinput5 = document.getElementById("quantity");
    shopinput6 = document.getElementById("color");
    shopinput7 = document.getElementById("totalPrice");
    shopinput8 = document.getElementById("countryOrder");
    shopinput9 = document.getElementById("shopPaymentStatus");
    shopinput10 = document.getElementById("orderStatus");
    selectedRowToInputShop();
};

function checkEmptyInputShop() {
    let isEmpty = false,
        orderID = shopinput1.value,
        productId = shopinput2.value,
        orderDate = shopinput3.value,
        customerName = shopinput4.value,
        quantity = shopinput5.value,
        color = shopinput6.value,
        totalPrice = shopinput7.value,
        countryOrder = shopinput8.value,
        shopPaymentStatus = shopinput9.value,
        orderStatus = shopinput10.value;

    if (orderID === "") {
        alert("Order ID Name Connot Be Empty");
        isEmpty = true;
    }
    else if (customerName === "") {
        alert("Customer Name Connot Be Empty");
        isEmpty = true;
    }
    else if (productId === "") {
        alert("Product ID Connot Be Empty");
        isEmpty = true;
    }
    else if (orderDate === "") {
        alert("Date Connot Be Empty");
        isEmpty = true;
    }
    else if (quantity === "") {
        alert("Quantity Connot Be Empty");
        isEmpty = true;
    }
    else if (color === "") {
        alert("Color Connot Be Empty");
        isEmpty = true;
    }
    else if (totalPrice === "") {
        alert("Price Connot Be Empty");
        isEmpty = true;
    }
    else if (countryOrder === "") {
        alert("Address Connot Be Empty");
        isEmpty = true;
    }
    else if (shopPaymentStatus === "") {
        alert("Payment Status Connot Be Empty");
        isEmpty = true;
    }
    else if (orderStatus === "") {
        alert("Order Status Connot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}

function selectedRowToInputShop() {
    for (let i = 1; i < shoptable.rows.length; i++) {
        shoptable.rows[i].onclick = function () {
            
            shoprIndex = this.rowIndex;
            shopinput1.value = this.cells[0].innerHTML;
            shopinput2.value = this.cells[1].innerHTML;
            shopinput3.value = this.cells[2].innerHTML;
            shopinput4.value = this.cells[3].innerHTML;
            shopinput5.value = this.cells[4].innerHTML;
            shopinput6.value = this.cells[5].innerHTML;
            shopinput7.value = this.cells[6].innerHTML;
            shopinput8.value = this.cells[7].innerHTML;
            shopinput9.value = this.cells[8].innerHTML;
            shopinput10.value = this.cells[9].innerHTML;

            window.scrollTo({ top: 400, behavior: 'smooth' });
        };
    }
}

function addNewRecordShop() {     
    if (!checkEmptyInputShop()) {
        let newRow = shoptable.insertRow(shoptable.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            cell4 = newRow.insertCell(3),
            cell5 = newRow.insertCell(4),
            cell6 = newRow.insertCell(5),
            cell7 = newRow.insertCell(6),
            cell8 = newRow.insertCell(7),
            cell9 = newRow.insertCell(8),
            cell10 = newRow.insertCell(9);

        cell1.innerHTML = shopinput1.value;
        cell2.innerHTML = shopinput2.value;
        cell3.innerHTML = shopinput3.value;
        cell4.innerHTML = shopinput4.value;
        cell5.innerHTML = shopinput5.value;
        cell6.innerHTML = shopinput6.value;
        cell7.innerHTML = shopinput7.value;
        cell8.innerHTML = shopinput8.value;
        cell9.innerHTML = shopinput9.value;
        cell10.innerHTML = shopinput10.value;
        
        selectedRowToInputShop();

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function updateShopRecord() {
    if (!checkEmptyInputShop()) {
        shoptable.rows[shoprIndex].cells[0].innerHTML = shopinput1.value;
        shoptable.rows[shoprIndex].cells[1].innerHTML = shopinput2.value;
        shoptable.rows[shoprIndex].cells[2].innerHTML = shopinput3.value;
        shoptable.rows[shoprIndex].cells[3].innerHTML = shopinput4.value;
        shoptable.rows[shoprIndex].cells[4].innerHTML = shopinput5.value;
        shoptable.rows[shoprIndex].cells[5].innerHTML = shopinput6.value;
        shoptable.rows[shoprIndex].cells[6].innerHTML = shopinput7.value;
        shoptable.rows[shoprIndex].cells[7].innerHTML = shopinput8.value;
        shoptable.rows[shoprIndex].cells[8].innerHTML = shopinput9.value;
        shoptable.rows[shoprIndex].cells[9].innerHTML = shopinput10.value;

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

}

function deleteShopRecord() {
    if (!checkEmptyInputShop()) {
        shoptable.deleteRow(shoprIndex);
        shopinput1.value = "";
        shopinput2.value = "";
        shopinput4.value = "";
        shopinput5.value = "";
        shopinput6.value = "";
        shopinput7.value = "";
        shopinput8.value = "";
        shopinput9.value = "";
        shopinput10.value = "";

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}