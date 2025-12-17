// Shopping Cart Functionality

// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem('melissaCart')) || [];

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('melissaCart', JSON.stringify(cart));
    updateCartCount();
    updateCartUI();
}

// Update cart count in header
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('#cartCount, .cart-count');
    cartCountElements.forEach(el => {
        if (el) el.textContent = count;
    });
}

// Add to cart
function addToCart() {
    if (!selectedSize) {
        alert('Por favor, selecione um tamanho');
        return;
    }

    const quantity = parseInt(document.getElementById('quantity').value);

    // Check if item already in cart
    const existingIndex = cart.findIndex(item =>
        item.productId === currentProduct.id &&
        item.color === selectedColor.name &&
        item.size === selectedSize
    );

    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({
            productId: currentProduct.id,
            name: currentProduct.name,
            price: currentProduct.price,
            image: currentProduct.images[0],
            color: selectedColor.name,
            colorHex: selectedColor.hex,
            size: selectedSize,
            quantity: quantity
        });
    }

    saveCart();
    openCart();
}

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
}

// Update cart UI
function updateCartUI() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="cart-empty">Sua sacola está vazia</p>';
        if (cartTotal) cartTotal.textContent = 'R$ 0,00';
        return;
    }

    let html = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        html += `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <p class="cart-item-name">${item.name}</p>
                    <p class="cart-item-details">Cor: ${item.color} | Tam: ${item.size} | Qtd: ${item.quantity}</p>
                    <p class="cart-item-price">${formatPrice(item.price * item.quantity)}</p>
                    <button class="cart-item-remove" onclick="removeFromCart(${index})">Remover</button>
                </div>
            </div>
        `;
    });

    cartItemsContainer.innerHTML = html;
    if (cartTotal) cartTotal.textContent = formatPrice(total);
}

// Open cart sidebar
function openCart() {
    document.getElementById('cartOverlay').classList.add('open');
    document.getElementById('cartSidebar').classList.add('open');
    updateCartUI();
}

// Close cart sidebar
function closeCart() {
    document.getElementById('cartOverlay').classList.remove('open');
    document.getElementById('cartSidebar').classList.remove('open');
}

// Buy now - go directly to checkout
function buyNow() {
    if (!selectedSize) {
        alert('Por favor, selecione um tamanho');
        return;
    }

    addToCart();
    goToCheckout();
}

// Go to checkout
function goToCheckout() {
    if (cart.length === 0) {
        alert('Sua sacola está vazia');
        return;
    }
    // In a real site, this would redirect to a checkout page
    alert('Redirecionando para o checkout...\n\nEm um site real, você seria direcionado para a página de pagamento.');
}

// Format price helper
function formatPrice(value) {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function () {
    updateCartCount();
});

// Expose functions to window
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.openCart = openCart;
window.closeCart = closeCart;
window.buyNow = buyNow;

