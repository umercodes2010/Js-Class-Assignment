// Getting HTML Elements

let productImage = document.getElementById("productImage");

let productName = document.getElementById("productName");

let description = document.getElementById("description");

let price = document.getElementById("price");

let buyBtn = document.getElementById("buyBtn");

let changeImageBtn = document.getElementById("changeImageBtn");

let nameInput = document.getElementById("nameInput");

let welcomeBtn = document.getElementById("welcomeBtn");

let welcomeMessage = document.getElementById("welcomeMessage");

let changeProductBtn = document.getElementById("changeProductBtn");


// -----------------------------------
// 1. Buy Now Button
// -----------------------------------

buyBtn.onclick = function () {

    description.innerText =
        "Thank you for buying these headphones! Your order has been placed.";

};


// -----------------------------------
// 2. Change Headphone Image
// -----------------------------------

changeImageBtn.onclick = function () {

    productImage.src =
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600";

};


// -----------------------------------
// 3. Welcome Button
// -----------------------------------

welcomeBtn.onclick = function () {

    let userName = nameInput.value;

    if (userName === "") {

        welcomeMessage.innerText =
            "Please enter your name.";

    } else {

        welcomeMessage.innerText =
            "Welcome, " + userName + "!";

    }

};


// -----------------------------------
// 4. Mouse Over
// -----------------------------------

productImage.onmouseover = function () {

    productImage.src =
        "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600";

};


// -----------------------------------
// 5. Mouse Out
// -----------------------------------

productImage.onmouseout = function () {

    productImage.src =
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600";

};


// -----------------------------------
// 6. Change Product Details
// -----------------------------------

changeProductBtn.onclick = function () {

    productName.innerText =
        "Wireless Bluetooth Headphones";

    description.innerText =
        "Enjoy powerful bass, clear sound and a comfortable wireless listening experience.";

    price.innerText =
        "$120";

};