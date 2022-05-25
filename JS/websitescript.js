function purchaseAlert() {
    let popup = document.getElementById('alertContainer');
    popup.innerHTML = '<div class="alert alert-beige alert-dismissible fade show sticky" style="display: none;" id="showAlert" role="alert">Item has been ordered.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

    let popupInner = document.getElementById('showAlert');
    popupInner.style.display = "block";

    setTimeout("hidePurchaseAlert()", 3000);
}

function hidePurchaseAlert() {
    let popup = document.getElementById('showAlert');
    popup.style.display = "none";
}

function openSlider() {
    document.getElementById('sliderEdit').style.width = "100%";
    document.getElementById('sliderBTN').style.display = "none";
    document.getElementById('profileAvatar').style.display = "none";
    let btns = document.getElementsByClassName('sliderLandingBTN');
    btns[0].style.display = "block";
    btns[1].style.display = "block";
}

function closeSlider() {
    document.getElementById('sliderEdit').style.width = "0%";
    document.getElementById('sliderBTN').style.display = "block";
    document.getElementById('profileAvatar').style.display = "none";
    let btns = document.getElementsByClassName('sliderLandingBTN');
    btns[0].style.display = "none";
    btns[1].style.display = "none";
}

function displayOrders() {
    if (orders.length == 0) {
        document.getElementById("orderOutput").innerHTML = "No orders have been made.";
    }
    else {
        orders.forEach(function (element) {
            document.getElementById('orderOutput').innerHTML += "<p> Name: " + element.Name + "</p>";
            document.getElementById('orderOutput').innerHTML += "<p> Price: &#128;" + element.Price + "</p>";
            document.getElementById('orderOutput').innerHTML += "<p> Quantity: " + element.Quantity + "</p>";
            document.getElementById('orderOutput').innerHTML += "<img class='ordersIMGSize' src='" + element.Image + "'>";
            document.getElementById('orderOutput').innerHTML += "<hr/>";
        });
    }
}

function sendMail(){
    let email = document.getElementById("contactEmail").value;
    let subject = "Comment Receipt";
    let body = "Client Sent: " + document.getElementById("contactComment").value;
    window.location.href = "mailto:broadwayclothing.inc@gmail.com?subject="+subject+"&body="+body;
}



