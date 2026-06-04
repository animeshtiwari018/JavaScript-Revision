document.addEventListener("DOMContentLoaded", () => {
  const cartItems = document.getElementById("cart-items");
  const subtotalEl = document.getElementById("subtotal");
  const taxEl = document.getElementById("tax");
  const totalEl = document.getElementById("total");
  const TAX_RATE = 0.05;

  function parsePrice(el) {
    return (
      parseFloat(
        el.getAttribute("data-price") ||
          el.textContent.replace(/[^0-9\.]/g, ""),
      ) || 0
    );
  }

  function updateTotals() {
    const products = cartItems.querySelectorAll(".product");
    let subtotal = 0;
    products.forEach((p) => {
      const price = parsePrice(p.querySelector(".product-price"));
      const qty = parseInt(p.querySelector(".qty").value || 1, 10);
      subtotal += price * qty;
    });
    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax;
    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    taxEl.textContent = `$${tax.toFixed(2)}`;
    totalEl.textContent = `$${total.toFixed(2)}`;
  }

  function onQuantityChange(e) {
    const input =
      e.target.closest(".product")?.querySelector(".qty") || e.target;
    if (!input) return;
    let val = parseInt(input.value, 10) || 1;
    if (val < 1) val = 1;
    input.value = val;
    updateTotals();
  }

  function removeProduct(btn) {
    const product = btn.closest(".product");
    if (!product) return;
    product.remove();
    updateTotals();
  }

  // delegation for buttons
  cartItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("qty-increase")) {
      const input = e.target.closest(".product").querySelector(".qty");
      input.value = parseInt(input.value || 1, 10) + 1;
      updateTotals();
    }
    if (e.target.classList.contains("qty-decrease")) {
      const input = e.target.closest(".product").querySelector(".qty");
      input.value = Math.max(1, parseInt(input.value || 1, 10) - 1);
      updateTotals();
    }
    if (e.target.classList.contains("remove")) {
      removeProduct(e.target);
    }
  });

  // delegation for direct input changes
  cartItems.addEventListener("change", (e) => {
    if (e.target.classList.contains("qty")) onQuantityChange(e);
  });

  // checkout
  const checkout = document.getElementById("checkout-button");
  checkout.addEventListener("click", () => {
    const total = totalEl.textContent || "$0.00";
    alert(`Checkout - Total amount: ${total}`);
  });

  // initial calc
  updateTotals();
});
