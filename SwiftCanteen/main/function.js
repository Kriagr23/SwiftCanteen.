document.addEventListener("DOMContentLoaded", function() {
    const decrementButton = document.getElementById("decrement");
    const incrementButton = document.getElementById("increment");
    const addButton = document.getElementById("add");
    const quantitySpan = document.getElementById("quantity");
    const quantityControls = document.querySelector(".quantity-controls");

    let quantity = 0;

    decrementButton.addEventListener("click", function() {
        if (quantity > 0) {
            quantity--;
            quantitySpan.textContent = quantity;
        }
    });

    incrementButton.addEventListener("click", function() {
        quantity++;
        quantitySpan.textContent = quantity;
    });

    addButton.addEventListener("click", function() {
        if (quantity === 0) {
            quantityControls.classList.remove("hidden");
            addButton.textContent = "+";
        } else {
            quantityControls.classList.add("hidden");
            addButton.textContent = "Add";
        }
    });
});
