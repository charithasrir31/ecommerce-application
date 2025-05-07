let registeredUser = null; // Holds registered user
let user = {
    username: "",
    email: "",
    phone: "",
    address: ""
  };
  
  const products = [
    { id: 1, name: "Laptop Pro 15\"", price: 999.99, category: "Electronics", image: "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D" },
    { id: 2, name: "Men's T-Shirt", price: 19.99, category: "Clothing", image: "https://images.meesho.com/images/products/344388183/wvxcv_400.webp" },
    { id: 3, name: "Women stylish flat footwear", price: 40.99, category:"Footwear", image: "https://inc5shop.com/cdn/shop/products/600619_BEIGE_65d81c76-8df1-4184-ae10-ce341da675e6.jpg?v=1744878913&width=533"},
    { id: 4, name: "Running Shoes", price: 59.99, category: "Footwear", image: "https://bersache.com/cdn/shop/files/WhatsAppImage2024-05-08at13.24.46.jpg?v=1741007464&width=1080" },
    { id: 5, name: "Smart Watch", price: 129.99, category: "Electronics", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLJ3ref_VW_34FR+watch-case-42-aluminum-jetblack-nc-s10_VW_34FR+watch-face-42-aluminum-jetblack-s10_VW_34FR?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=SmNOTU80TDhXckVBUGdaWWZTZVBXcDNqbENGcEFFTlJVaXJwL2VzdGxEMU9NU1VZS1dIdzdkNjZzejNRdFdUZzBnRnJNVU50TjZtbUN3ZjYvVksrL1FtTHNhRmRKQkE2OXJHRVEvRTFWdXVoSHlqYUY2YWdsek45M29HTWxyVHhWNEM0ZHZzMzMzajJiOGZuamRiTE9rUVN3R3VxZWhYYXgwOHljYmZFMXBocmMyRTN3NCt6QkoxaUdRb0FBay9VYktGTHdENW9lYUFnak5pcy9ReEdDVGFYRW5lZTlQWUFSemFVTERGOFVXQ0pMTGI4QWxGbG1DY25rS1FILzcyQg" },
    { id: 6, name: "Winter Jacket", price: 59.99, category: "Clothing", image: "https://m.media-amazon.com/images/I/71llERwkjWL._AC_UY350_.jpg"},
    { id: 7, name: "Wireless Earbuds", price: 49.99, category: "Electronics", image: "https://m.media-amazon.com/images/I/614VGnQmTpL._SY355_.jpg"},
    { id: 8, name: "Bluetooth Speaker", price: 39.99, category: "Electronics", image: "https://excellentphoto.ca/cdn/shop/files/IQWAVEL_5.webp?v=1723149077&width=1200" },
    { id: 9, name: "Vacuum Cleaner", price: 89.99, category: "Home", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/vacuum-cleaner/h/i/h/-original-imah4n6ykqngsq6h.jpeg?q=20&crop=false" },
    { id: 10, name: "Wireless Mouse", price: 29.99, category: "Electronics", image: "https://m.media-amazon.com/images/I/31kSpToKi8L._SX300_SY300_QL70_FMwebp_.jpg"},
    { id: 11, name: "Sneakers", price: 55.99, category: "Footwear", image: "https://www.frenchblossom.com/cdn/shop/products/Caval-Basket-Sunny-Night-Detail_1080x.jpg?v=1604090470"},
    { id: 12, name: "Sofa Cushion Set", price: 39.99, category: "Home", image: "https://ik.imagekit.io/2xkwa8s1i/img/Premium_Cushion_Cover/Set5/Omega/Grey/2.jpg?tr=w-1200"},
    { id: 13, name: "Formal Shirt", price: 29.99, category: "Clothing", image: "https://assets.ajio.com/medias/sys_master/root/20241109/0tsd/672e8ecbf9b8ef490b102542/ikon_fashion_brown_solid_regular_fit_shirt.jpg"},
    { id: 14, name: "Women's Plain Work Shirts", price: 45.99, category: "Clothing", image: "https://m.media-amazon.com/images/I/51nIHi7R08L._SX385_.jpg"},
    { id: 15, name: "Showpiece shelf stand for wall", price: 70.99, category: "Home", image: "https://m.media-amazon.com/images/I/61kV7F9kVuL._AC_UF894,1000_QL80_.jpg"}
  ];
  
  let cart = [];
  let wishlist = [];
  let orders = [];
  
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const wishlistItems = document.getElementById("wishlistItems");
  const orderList = document.getElementById("orderList");
  const checkoutButton = document.getElementById("checkoutButton");
  const checkoutMessage = document.getElementById("checkoutMessage");
  
  function renderProducts(productList) {
    if (!Array.isArray(productList)) {
      console.error("renderProducts expects an array");
      return;
    }
  
    const productListEl = document.getElementById("productList");
    productListEl.innerHTML = "";
  
    productList.forEach(product => {
      const col = document.createElement("div");
      col.className = "col-md-4";
      col.innerHTML = `
        <div class="card product-card">
          <img src="${product.image}" class="card-img-top product-img" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">$${product.price.toFixed(2)}</p>
            <button class="btn btn-primary btn-sm" onclick="addToCart(${product.id})">Add to Cart</button>
            <button class="btn btn-outline-secondary btn-sm" onclick="addToWishlist(${product.id})"><i class="bi bi-heart"></i></button>
          </div>
        </div>
      `;
      productListEl.appendChild(col);
    });
  
    document.getElementById("productCount").textContent = `${productList.length} item(s) found`;
  }
  
  document.getElementById("searchInput").addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);
  });
  
  function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (product) cart.push(product);
    updateCart();
  }
  
  function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
    if (cart.length === 0) {
      cartItems.innerHTML = `<p class="text-muted">Your cart is empty</p>`;
    } else {
      cart.forEach(item => {
        total += item.price;
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
          <div class="d-flex justify-content-between">
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
          </div>`;
        cartItems.appendChild(div);
      });
    }
    cartTotal.textContent = `$${total.toFixed(2)}`;
    checkoutButton.disabled = cart.length === 0;
  }
  
  function addToWishlist(id) {
    const product = products.find(p => p.id === id);
    if (product && !wishlist.some(w => w.id === id)) {
      wishlist.push(product);
      updateWishlist();
    }
  }
  
  function updateWishlist() {
    wishlistItems.innerHTML = "";
    wishlist.forEach(item => {
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center";
      li.innerHTML = `${item.name} <button class="btn btn-sm btn-outline-danger" onclick="removeFromWishlist(${item.id})"><i class="bi bi-x"></i></button>`;
      wishlistItems.appendChild(li);
    });
  }
  
  function removeFromWishlist(id) {
    wishlist = wishlist.filter(item => item.id !== id);
    updateWishlist();
  }
  
  checkoutButton.addEventListener("click", () => {
    if (cart.length > 0) {
      orders.push(...cart);
      cart = [];
      updateCart();
      updateOrders();
      checkoutMessage.classList.remove("d-none");
      setTimeout(() => checkoutMessage.classList.add("d-none"), 3000);
    }
  });
  
  function updateOrders() {
    orderList.innerHTML = "";
    if (orders.length === 0) {
      orderList.innerHTML = `<li class="list-group-item">No orders yet</li>`;
    } else {
      orders.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
          <div>
            <strong>Order #${1000 + index + 1}</strong> - ${item.name} - <span class="text-success">Placed</span>
          </div>
          <button class="btn btn-sm btn-danger" onclick="cancelOrder(${index})">Cancel</button>
        `;
        orderList.appendChild(li);
      });
    }
  }
  
  function cancelOrder(index) {
    if (confirm("Are you sure you want to cancel this order?")) {
      orders.splice(index, 1);
      updateOrders();
    }
  }
  
  // Category Filtering
  if (document.querySelectorAll(".category-btn")) {
    document.querySelectorAll(".category-btn").forEach(btn => {
      btn.addEventListener("click", function () {
        const selectedCategory = this.textContent.trim();
        document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
        this.classList.add("active");
        const filtered = selectedCategory === "All"
        ? products
        : products.filter(p => p.category === selectedCategory);
        renderProducts(filtered);
      });
    });
  }
  
  // AUTHENTICATION LOGIC - FIXED
  
  function handleRegister() {
    const username = document.getElementById("registerUsername").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value.trim();
  
    if (!username || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }
  
    registeredUser = { username, email, password };
    user.username = username;
    user.email = email;
    user.phone = "Not Provided";
    user.address = "Not Provided";
  
    alert("Registered successfully!");
    bootstrap.Modal.getInstance(document.getElementById("registerModal")).hide();
    new bootstrap.Modal(document.getElementById("loginModal")).show();
    updateAccountInfo();
  }
  
  function handleLogin() {
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const alertBox = document.getElementById("loginAlert");
  
    if (!username || !password) {
      alertBox.classList.remove("d-none");
      return;
    }
  
    if (!registeredUser) {
      alert("No user registered yet. Please register first.");
      return;
    }
  
    if (username === registeredUser.username && password === registeredUser.password) {
      alertBox.classList.add("d-none");
      alert("Logged in successfully!");
  
      user.username = registeredUser.username;
      user.email = registeredUser.email;
  
      document.getElementById("logoutButton").classList.remove("d-none");
      document.getElementById("loginButton").classList.add("d-none");
      document.getElementById("registerButton").classList.add("d-none");
  
      updateAccountInfo();
      bootstrap.Modal.getInstance(document.getElementById("loginModal")).hide();
    } else {
      alert("Invalid username or password. Please try again.");
    }
  }
  
  function logout() {
    user = { username: "", email: "", phone: "", address: "" };
    alert("Logged out successfully!");
  
    document.getElementById("logoutButton").classList.add("d-none");
    document.getElementById("loginButton").classList.remove("d-none");
    document.getElementById("registerButton").classList.remove("d-none");
  
    updateAccountInfo();
  }
  
  function switchToRegister() {
    bootstrap.Modal.getInstance(document.getElementById("loginModal")).hide();
    new bootstrap.Modal(document.getElementById("registerModal")).show();
  }
  
  function switchToLogin() {
    bootstrap.Modal.getInstance(document.getElementById("registerModal")).hide();
    new bootstrap.Modal(document.getElementById("loginModal")).show();
  }
  
  function updateAccountInfo() {
    document.getElementById("accountName").value = user.username || "";
    document.getElementById("accountEmail").value = user.email || "";
    document.getElementById("accountPhone").value = user.phone || "";
    document.getElementById("accountAddress").value = user.address || "";
  }
  
  document.getElementById("editAccountModal").addEventListener("show.bs.modal", () => {
    document.getElementById("editPhone").value = user.phone;
    document.getElementById("editAddress").value = user.address;
  });
  
  function saveAccountDetails() {
    const phone = document.getElementById("editPhone").value.trim();
    const address = document.getElementById("editAddress").value.trim();
    const phoneRegex = /^[0-9]{6,15}$/; // Allow 6-15 digits

if (!phoneRegex.test(phone)) {
  alert("Please enter a valid phone number (digits only).");
  return;
}

    if (!phone || !address) {
      alert("Please enter both phone and address.");
      return;
    }
  
    user.phone = phone;
    user.address = address;
  
    updateAccountInfo();
    bootstrap.Modal.getInstance(document.getElementById("editAccountModal")).hide();
    alert("Account details updated!");
  }
  
  // Initial render
  renderProducts(products);
  updateCart();
  updateWishlist();
  updateOrders();
  // Theme Toggle Logic
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-theme");
  themeToggle.innerHTML = '<i class="bi bi-moon"></i>';
}

// Toggle theme on click
themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  if (body.classList.contains("light-theme")) {
    themeToggle.innerHTML = '<i class="bi bi-moon"></i>';
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.innerHTML = '<i class="bi bi-brightness-high"></i>';
    localStorage.setItem("theme", "dark");
  }
});
