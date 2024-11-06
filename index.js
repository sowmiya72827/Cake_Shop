
// Parse query parameters
const urlParams = new URLSearchParams(window.location.search);
const itemName = urlParams.get('itemName');
const itemPrice = urlParams.get('itemPrice');
const itemOriginalPrice = 1499.00; // Hardcoded original price for example

// Check for null values and display only if they are available
if (itemName) {
    document.getElementById('itemName').textContent = itemName;
}

// Display original price and discounted price
if (itemPrice) {
    document.getElementById('itemPrice').textContent = `$${parseFloat(itemPrice).toFixed(2)}`;
}

document.getElementById('itemOriginalPrice').textContent = `$${itemOriginalPrice.toFixed(2)}`;

// Set the product image
document.getElementById('itemImage').src = "images/1.png"; // Replace with the correct image path if necessary

// Add extra details about the product
document.getElementById('extraDetails').textContent = "This cake is perfect for all celebrations and is made with the finest ingredients.";

// Handle form submission
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const customerName = document.getElementById('customerName').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const quantity = document.getElementById('quantity').value;
    const address = document.getElementById('address').value;
    const orderDate = document.getElementById('orderDate').value;
    const totalPrice = (parseFloat(itemPrice) * quantity).toFixed(2); // Calculate total price

    const orderDetails = {
        name: customerName,
        mobile: mobileNumber,
        quantity: quantity,
        price: totalPrice,
        address: address,
        date: orderDate
    };

    console.log('Order submitted:', orderDetails);
    document.getElementById('message').textContent = `Order placed successfully! Total price: $${totalPrice}`;
});

