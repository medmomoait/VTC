
document.getElementById("booking-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Réservation envoyée ! Le paiement va suivre.");
});

document.getElementById("stripe-pay").addEventListener("click", function() {
  alert("Paiement Stripe simulé - clé test.");
});

// PayPal integration (test mode)
paypal.Buttons({
  createOrder: function(data, actions) {
    return actions.order.create({
      purchase_units: [{
        amount: { value: '60.00' }
      }]
    });
  },
  onApprove: function(data, actions) {
    return actions.order.capture().then(function(details) {
      alert('Paiement approuvé par ' + details.payer.name.given_name);
    });
  }
}).render('#paypal-button-container');
