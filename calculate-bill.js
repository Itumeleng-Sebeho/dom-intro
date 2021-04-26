var billStringElement = document.querySelector(".billString");
var calculateBtnElement = document.querySelector(".billString");
var billTotalElement = document.querySelector(".billString");

function calculateBtnClicked(){
    // logic goes here
}

calculateBtn.addEventListener('click', calculateBtnClicked);

function calculateBtnClicked(){
    // get the string entered in the textArea
    var billString = billStringField.value;
    //split the string
    var billItems = billString.split(",");
    // a variable for the total phone bill.
    var billTotal = 0;
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
    
    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;
}

function calculateBtnClicked(){
    // get the string entered in the textArea
    var billString = billStringField.value;   
    //round to two decimals
    var roundedBillTotal = totalPhoneBill(billString);
    billTotalElement.innerHTML = roundedBillTotal;
}