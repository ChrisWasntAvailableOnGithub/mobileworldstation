// addToCart.js
function addToCart(id, name, price, imagePath) {
    // Use localStorage to store cart items
    const cartItems = JSON.parse(localStorage.getItem('cart')) || {};

    if (!cartItems[id]) {
        cartItems[id] = { name, price, quantity: 1, imagePath };
    } else {
        cartItems[id].quantity += 1;
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Trigger an event or provide feedback to the user if needed
    console.log(`Added ${name} to the cart!`);
}