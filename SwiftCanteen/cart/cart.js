const addButton = document.getElementById('add-button');
const cartButton = document.getElementById('cart-button');
const cartList = document.getElementById('cart-list');
let cartItems = [];

addButton.addEventListener('click', () => {
    const itemName = document.querySelector('.main-text h5').textContent;
    const itemQuantity = document.getElementById('quantity').textContent;

    if (itemQuantity > 0) {
        cartItems.push({ name: itemName, quantity: itemQuantity });
        updateCartDisplay();
    }
});

cartButton.addEventListener('click', () => {
    displayCart();
});

function updateCartDisplay() {
    cartList.innerHTML = ''; // Clear previous cart items
    cartItems.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} x${item.quantity}`;
        cartList.appendChild(cartItem);
    });
}

function displayCart() {
    // You can implement how you want to display the cart here (e.g., as a modal or in a separate page)
    // For this example, we are updating the cart items in the existing list.
    updateCartDisplay();
}