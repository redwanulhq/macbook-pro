// single button's event hendelers
document.getElementById("memory-16gb").addEventListener("click", function () {
    variation("memory", 180);
});
document.getElementById("memory-8gb").addEventListener("click", function () {
    variation("memory", 0);
});
document.getElementById("storage-256gb").addEventListener("click", function () {
    variation("storage", 0);
});
document.getElementById("storage-512gb").addEventListener("click", function () {
    variation("storage", 100);
});
document.getElementById("storage-1tb").addEventListener("click", function () {
    variation("storage", 180);
});
document.getElementById("delivery-free").addEventListener("click", function () {
    variation("delivery", 0);
});
document.getElementById("delivery-extra").addEventListener("click", function () {
    variation("delivery", 20);
});

// Core function
function variation(variationType, value) {
    const variationCost = document.getElementById(variationType + "-cost");
    variationCost.innerText = value;
    subTotal();
    document.getElementById("promo-btn").disabled = false;
    document.getElementById("promo-message").innerText = "";
}

// subtotal caltulation
function subTotal() {
    const mainCost = parseInt(document.getElementById("main-cost").innerText);
    const memoryTotalCost = parseInt(document.getElementById("memory-cost").innerText);
    const storageTotalCost = parseInt(document.getElementById("storage-cost").innerText);
    const deliveryTotalCost = parseInt(document.getElementById("delivery-cost").innerText);
    let totalCost = document.getElementById("total-cost");
    const subTotalCost = document.getElementById("sub-total-cost");
    const newSubTotalCost = mainCost + memoryTotalCost + storageTotalCost + deliveryTotalCost;
    subTotalCost.innerText = newSubTotalCost;
    totalCost.innerText = newSubTotalCost;
}

// Function for promo
function promo() {
    const promoInput = document.getElementById("promo-input");
    const promoInputValue = promoInput.value;
    const totalCost = document.getElementById("total-cost");
    let totalCostNumber = parseInt(totalCost.innerText);
    if (promoInputValue == "stevekaku") {
        totalCostNumber = totalCostNumber - totalCostNumber / 5;
        totalCost.innerText = totalCostNumber;
        promoInput.value = "";
        document.getElementById("promo-btn").disabled = true;
        // promo success message
        document.getElementById("promo-message").innerText = "congratulations, 20% promo applied";
        document.getElementById("promo-message").style.color = "green";
    } else if (promoInputValue != "") {
        // promo invalid message
        document.getElementById("promo-message").innerText = 'Sorry "' + promoInputValue + '" is an invalid promo code';
        document.getElementById("promo-message").style.color = "red";
    }
}
