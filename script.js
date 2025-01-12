let usedPromoCode = null; 

function applyPromoCode() {
    const promoCodeInput = document.getElementById("promo-code").value;
    const subtotal = calculateSubtotal();  
    let discount = 0;


    if (usedPromoCode === promoCodeInput) {
        displayMessage("You have already used this promo code.");
        return;
    }

    switch (promoCodeInput) {
        case "ostad10":
            discount = subtotal * 0.10;  
            usedPromoCode = promoCodeInput;
            break;
        case "ostad5":
            discount = subtotal * 0.05;  
            usedPromoCode = promoCodeInput;
            break;
        default:
            displayMessage("Invalid promo code. Please try again.");
            return;
    }


  const finalTotal = subtotal - discount;


  updateCartSummary(subtotal, discount, finalTotal);


  displayMessage(Promo code applied! Discount: $${discount.toFixed(2)});
}


function displayMessage(message) {
  alert(message);  
}


function updateCartSummary(subtotal, discount, finalTotal) {
  document.getElementById("subtotal").innerText = subtotal.toFixed(2);
  document.getElementById("discount").innerText = discount.toFixed(2);
  document.getElementById("final-total").innerText = finalTotal.toFixed(2);
}

function calculateSubtotal() {

  return 100.00;
}