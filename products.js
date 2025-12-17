// Products Database with Real Melissa Products
const products = [
    {
        id: 1,
        name: "Melissa Thong Kitten Heel",
        sku: "38068",
        price: 199.90,
        description: "A Melissa Thong Kitten Heel une a tendência do salto baixo com o conforto do Melflex. Sofisticada e moderna, é perfeita para compor looks elegantes e casuais.",
        images: [
            "assets/kitten-heel.png",
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=800&fit=crop"
        ],
        colors: [
            { name: "Rosa", hex: "#E91E63" },
            { name: "Preto", hex: "#000000" },
            { name: "Branco", hex: "#FFFFFF" }
        ],
        sizes: ["33/34", "35", "36", "37", "38", "39/40", "41", "42", "43/44"],
        unavailableSizes: []
    },
    {
        id: 2,
        name: "Melissa Sun Barra Platform II",
        sku: "38066",
        price: 219.90,
        description: "Com design versátil, a Melissa Sun Barra Platform II traz o brilho do glitter para iluminar seus passos. Conforto e estilo em uma plataforma única.",
        images: [
            "assets/sun-barra.png",
            "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&h=800&fit=crop"
        ],
        colors: [
            { name: "Prata", hex: "#C0C0C0" },
            { name: "Preto", hex: "#000000" },
            { name: "Bronze", hex: "#CD7F32" }
        ],
        sizes: ["33/34", "35", "36", "37", "38", "39/40", "41", "42", "43/44"],
        unavailableSizes: ["41/42"]
    },
    {
        id: 3,
        name: "Melissa Cross M-Lover Platform",
        sku: "37368",
        price: 279.90,
        description: "Plataforma com tiras cruzadas que garante firmeza e estilo. A Melissa Cross M-Lover é a escolha certa para quem ama altura e conforto.",
        images: [
            "assets/cross-mlover.png",
            "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=800&h=800&fit=crop"
        ],
        colors: [
            { name: "Rosa", hex: "#FFB6C1" },
            { name: "Preto", hex: "#000000" },
            { name: "Verde", hex: "#006400" },
            { name: "Bege", hex: "#F5F5DC" }
        ],
        sizes: ["33/34", "35", "36", "37", "38", "39/40", "41", "42", "43/44"],
        unavailableSizes: []
    },
    {
        id: 4,
        name: "Melissa Stripes Platform M-Lover",
        sku: "37931",
        price: 249.90,
        description: "Estilo e autenticidade na Melissa Stripes Platform. Tiras modernas e solado robusto para um visual impactante.",
        images: [
            "assets/stripes-platform.png",
            "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&h=800&fit=crop"
        ],
        colors: [
            { name: "Rosa", hex: "#FFC0CB" },
            { name: "Azul", hex: "#87CEEB" },
            { name: "Preto", hex: "#000000" }
        ],
        sizes: ["33/34", "35", "36", "37", "38", "39/40", "41", "42", "43/44"],
        unavailableSizes: []
    },
    {
        id: 5,
        name: "Melissa Eden",
        sku: "37943",
        price: 169.90,
        description: "A Melissa Eden é a slides perfeita para o dia a dia, combinando praticidade com o design inconfundível da marca (Bolsa + Chinelo).",
        images: [
            "assets/eden.png",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop"
        ],
        colors: [
            { name: "Preto", hex: "#000000" },
            { name: "Rosa", hex: "#FFB6C1" },
            { name: "Branco", hex: "#FFFFFF" }
        ],
        sizes: ["33/34", "35", "36", "37", "38", "39/40", "41", "42", "43/44"],
        unavailableSizes: ["33/34", "41/42"]
    },
    {
        id: 6,
        name: "Melissa M-Lover Thong Platform",
        sku: "37914",
        price: 249.90,
        description: "Thong platform com a assinatura M-Lover. Conforto elevado e design clean para todas as ocasiões.",
        images: [
            "assets/mlover-thong.png",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop"
        ],
        colors: [
            { name: "Bege", hex: "#F5F5DC" },
            { name: "Preto", hex: "#000000" },
            { name: "Marrom", hex: "#8B4513" }
        ],
        sizes: ["33/34", "35", "36", "37", "38", "39/40", "41", "42", "43/44"],
        unavailableSizes: ["38"]
    },

    {
        id: 7,
        name: "Melissa Cozy M-Lover Platform",
        sku: "35977",
        price: 279.90,
        description: "A Melissa Cozy M-Lover Platform é a plataforma feminina para quem ama a sensação de caminhar nas nuvens. Com palmilha em EVA texturizada, proporciona conforto prolongado.",
        images: [
            "assets/cozy-mlover.png",
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=800&fit=crop"
        ],
        colors: [
            { name: "Marrom", hex: "#8B4513" },
            { name: "Preto", hex: "#000000" },
            { name: "Bege", hex: "#F5F5DC" },
            { name: "Rosa", hex: "#FFC0CB" }
        ],
        sizes: ["33/34", "35", "36", "37", "38", "39/40", "41", "42", "43/44"],
        unavailableSizes: []
    },
    {
        id: 8,
        name: "Melissa Free Muse Platform",
        sku: "37835",
        price: 349.90,
        description: "Superleve e cheia de estilo, a Melissa Free Muse Platform traz o conforto da família Free com uma plataforma robusta e detalhe de fivela.",
        images: [
            "assets/free-muse.png",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop"
        ],
        colors: [
            { name: "Marrom", hex: "#8B4513" },
            { name: "Preto", hex: "#000000" },
            { name: "Bege", hex: "#F5F5DC" }
        ],
        sizes: ["33/34", "35", "36", "37", "38", "39/40", "41", "42", "43/44"],
        unavailableSizes: []
    },
    {
        id: 9,
        name: "Melissa Free Cross",
        sku: "37857",
        price: 279.90,
        description: "A Melissa Free Cross é a plataforma slide perfeita para quem busca conforto e leveza em um visual moderno. Com design minimalista e superleve.",
        images: [
            "assets/free-cross.png",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop"
        ],
        colors: [
            { name: "Verde", hex: "#556B2F" },
            { name: "Preto", hex: "#000000" },
            { name: "Branco", hex: "#FFFFFF" },
            { name: "Laranja", hex: "#FF4500" }
        ],
        sizes: ["33/34", "35", "36", "37", "38", "39/40", "41", "42", "43/44"],
        unavailableSizes: []
    }
];

// Get product from URL
function getProductFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id')) || 1;
    return products.find(p => p.id === productId) || products[0];
}

// Current selections
let currentProduct = null;
let selectedColor = null;
let selectedSize = null;

// Initialize product page
function initProductPage() {
    currentProduct = getProductFromUrl();

    // Update page
    document.getElementById('productTitle').textContent = currentProduct.name;
    document.getElementById('breadcrumbProduct').textContent = currentProduct.name;
    document.getElementById('productSku').textContent = `SKU: ${currentProduct.sku}`;
    document.getElementById('productPrice').textContent = formatPrice(currentProduct.price);
    document.getElementById('productInstallments').textContent = `ou 3x de ${formatPrice(currentProduct.price / 3)}`;
    document.getElementById('pixPrice').textContent = formatPrice(currentProduct.price * 0.95);
    document.getElementById('productDescription').textContent = currentProduct.description;

    // Add waning message element dynamically if it doesn't exist
    const qtySelector = document.querySelector('.quantity-selector');
    if (qtySelector && !document.getElementById('qty-warning')) {
        const warning = document.createElement('p');
        warning.id = 'qty-warning';
        warning.style.color = 'red';
        warning.style.fontSize = '12px';
        warning.style.marginTop = '5px';
        warning.style.display = 'none';
        warning.textContent = 'Apenas 2 unidades por cadastro';
        qtySelector.parentNode.appendChild(warning);
    }

    // Main image
    document.getElementById('mainImage').src = currentProduct.images[0];
    document.getElementById('mainImage').alt = currentProduct.name;

    // Thumbnails
    const thumbsContainer = document.getElementById('galleryThumbs');
    thumbsContainer.innerHTML = '';
    currentProduct.images.forEach((img, index) => {
        const thumb = document.createElement('div');
        thumb.className = `gallery-thumb ${index === 0 ? 'active' : ''}`;
        thumb.innerHTML = `<img src="${img}" alt="${currentProduct.name}">`;
        thumb.onclick = () => {
            document.getElementById('mainImage').src = img;
            document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        };
        thumbsContainer.appendChild(thumb);
    });

    // Colors
    const colorsContainer = document.getElementById('colorOptions');
    colorsContainer.innerHTML = '';
    currentProduct.colors.forEach((color, index) => {
        const colorBtn = document.createElement('button');
        colorBtn.className = `color-option ${index === 0 ? 'selected' : ''}`;
        colorBtn.style.background = color.hex;
        if (color.hex === '#FFFFFF') {
            colorBtn.style.border = '1px solid #ddd';
        }
        colorBtn.onclick = () => selectColor(color, colorBtn);
        colorsContainer.appendChild(colorBtn);
    });
    selectedColor = currentProduct.colors[0];
    document.getElementById('selectedColor').textContent = selectedColor.name;

    // Sizes
    const sizesContainer = document.getElementById('sizeOptions');
    sizesContainer.innerHTML = '';
    currentProduct.sizes.forEach(size => {
        const sizeBtn = document.createElement('button');
        sizeBtn.className = 'size-option';
        sizeBtn.textContent = size;
        if (currentProduct.unavailableSizes.includes(size)) {
            sizeBtn.classList.add('unavailable');
        } else {
            sizeBtn.onclick = () => selectSize(size, sizeBtn);
        }
        sizesContainer.appendChild(sizeBtn);
    });

    // Update page title
    document.title = `${currentProduct.name} | Melissa Loja Oficial`;
}

function selectColor(color, btn) {
    selectedColor = color;
    document.getElementById('selectedColor').textContent = color.name;
    document.querySelectorAll('.color-option').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}

function selectSize(size, btn) {
    selectedSize = size;
    document.querySelectorAll('.size-option').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}

function changeQty(delta) {
    const input = document.getElementById('quantity');
    const warningMsg = document.getElementById('qty-warning');
    let value = parseInt(input.value) + delta;

    if (value < 1) value = 1;

    // Limit to 2
    if (value > 2) {
        value = 2;
        if (warningMsg) warningMsg.style.display = 'block';
    } else {
        if (warningMsg) warningMsg.style.display = 'none';

        // Hide warning if user decreases back to 2 or 1
        if (value <= 2 && warningMsg) {
            warningMsg.style.display = 'none';
        }
    }

    // Additional check if user tries to manually type > 2 (though simple logic here handles buttons)
    input.value = value;
}

function formatPrice(value) {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
}

function toggleAccordion(btn) {
    btn.classList.toggle('open');
    const content = btn.nextElementSibling;
    content.classList.toggle('show');
}

function calculateShipping() {
    const cep = document.getElementById('cepInput').value.replace(/\D/g, '');
    const result = document.getElementById('shippingResult');

    if (cep.length !== 8) {
        result.innerHTML = '<span style="color: red;">CEP inválido</span>';
        return;
    }

    // Simulate shipping calculation
    result.innerHTML = `
        <p><strong>PAC:</strong> R$ 15,90 - 5 a 10 dias úteis</p>
        <p><strong>SEDEX:</strong> R$ 29,90 - 2 a 4 dias úteis</p>
        <p class="free"><strong>FRETE GRÁTIS</strong> para compras acima de R$299</p>
    `;
}

// Initialize on load
if (document.getElementById('productTitle')) {
    initProductPage();
}

// ------ Filtering & Pagination Logic (Home Page) ------

let visibleCount = 4;
let currentFilteredProducts = products; // Default to all products

// Initialize Home Page Logic
function initHome() {
    visibleCount = 4;
    currentFilteredProducts = products;
    updateProductGrid();

    // Attach Load More listener
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        // Remove existing listener to avoid duplicates if re-run
        const newBtn = loadMoreBtn.cloneNode(true);
        loadMoreBtn.parentNode.replaceChild(newBtn, loadMoreBtn);

        newBtn.addEventListener('click', () => {
            visibleCount += 4;
            updateProductGrid();
        });
    }
}

// Initialize New Arrivals Page Logic (Fixed 4 items)
function initNovidades() {
    // Only first 4 items
    currentFilteredProducts = products.slice(0, 4);

    // Render them
    renderProducts(currentFilteredProducts);

    // Hide Load More Button permanently
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = 'none';
        loadMoreBtn.parentElement.style.display = 'none';
    }
}

// Update Grid based on current state
function updateProductGrid() {
    const productsToShow = currentFilteredProducts.slice(0, visibleCount);
    renderProducts(productsToShow);
    updateLoadMoreButton();
}

// Update Load More Button Visibility
function updateLoadMoreButton() {
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (!loadMoreBtn) return;

    if (visibleCount >= currentFilteredProducts.length) {
        loadMoreBtn.style.display = 'none';
        loadMoreBtn.parentElement.style.display = 'none'; // Hide container too
    } else {
        loadMoreBtn.style.display = 'inline-block';
        loadMoreBtn.parentElement.style.display = 'block';
    }
}

// Render products to grid 
function renderProducts(productsToRender) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    grid.innerHTML = '';

    if (productsToRender.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">Nenhum produto encontrado com os filtros selecionados.</p>';
        return;
    }

    productsToRender.forEach(product => {
        const productCard = document.createElement('article');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <a href="product.html?id=${product.id}" class="product-link">
                <div class="product-image">
                    <img src="${product.images[0]}" alt="${product.name}">
                    <button class="favorite-btn" aria-label="Favoritar" onclick="event.preventDefault();">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-colors">
                        ${product.colors.map(c =>
            `<span class="color-dot" style="background: ${c.hex}; ${c.hex === '#FFFFFF' ? 'border: 1px solid #ddd' : ''}"></span>`
        ).join('')}
                    </div>
                    <p class="product-price">${formatPrice(product.price)}</p>
                    <p class="product-installments">ou 3x de ${formatPrice(product.price / 3)}</p>
                </div>
            </a>
        `;
        grid.appendChild(productCard);
    });
}

// Filter State
let activeFilters = {
    price: [],
    size: [],
    color: []
};

// Toggle Filter Sidebar
const filterBtn = document.querySelector('.filter-btn');
const filterOverlay = document.querySelector('.filter-overlay');
const filterSidebar = document.querySelector('.filter-sidebar');
const closeFilterBtn = document.querySelector('.close-filter');

function openFilter() {
    filterOverlay.classList.add('active');
    filterSidebar.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeFilter() {
    filterOverlay.classList.remove('active');
    filterSidebar.classList.remove('active');
    document.body.style.overflow = '';
}

if (filterBtn) filterBtn.addEventListener('click', openFilter);
if (closeFilterBtn) closeFilterBtn.addEventListener('click', closeFilter);
if (filterOverlay) filterOverlay.addEventListener('click', closeFilter);

// Size Filter Selection
const sizeItems = document.querySelectorAll('.size-filter-item');
sizeItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        updateActiveFilters();
    });
});

// Color Filter Selection
const colorItems = document.querySelectorAll('.color-filter-item');
colorItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        updateActiveFilters();
    });
});

// Price Filter Selection
const priceInputs = document.querySelectorAll('input[name="price"]');
priceInputs.forEach(input => {
    input.addEventListener('change', updateActiveFilters);
});

// Update active filters object
function updateActiveFilters() {
    // Sizes
    activeFilters.size = Array.from(document.querySelectorAll('.size-filter-item.active'))
        .map(el => el.dataset.value);

    // Colors
    activeFilters.color = Array.from(document.querySelectorAll('.color-filter-item.active'))
        .map(el => el.dataset.value);

    // Prices
    activeFilters.price = Array.from(document.querySelectorAll('input[name="price"]:checked'))
        .map(el => el.value);
}

// Apply Filters
function applyFilters() {
    let filtered = products.filter(product => {
        // Filter by Size (OR logic within sizes)
        const sizeMatch = activeFilters.size.length === 0 ||
            product.sizes.some(size => activeFilters.size.includes(size));

        // Filter by Color (OR logic within colors)
        const colorMatch = activeFilters.color.length === 0 ||
            product.colors.some(c => activeFilters.color.includes(c.name));

        // Filter by Price (OR logic within ranges)
        const priceMatch = activeFilters.price.length === 0 ||
            activeFilters.price.some(range => {
                const [min, max] = range.split('-').map(Number);
                return product.price >= min && product.price <= max;
            });

        return sizeMatch && colorMatch && priceMatch;
    });

    // Update global state
    currentFilteredProducts = filtered;
    visibleCount = 4; // Reset visible count on filter apply

    updateProductGrid(); // This handles rendering and button visibility
    closeFilter();
}

// Clear Filters
function clearFilters() {
    // Reset inputs
    document.querySelectorAll('.size-filter-item').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.color-filter-item').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('input[name="price"]').forEach(el => el.checked = false);

    // Reset state
    activeFilters = { price: [], size: [], color: [] };

    // Reset to all products
    currentFilteredProducts = products;
    visibleCount = 4;

    updateProductGrid();
    closeFilter();
}
