document.addEventListener("DOMContentLoaded", () => {
  const expenseNameInput = document.getElementById("expenseName");
  const expenseAmountInput = document.getElementById("expenseAmount");
  const submitBtn = document.getElementById("submit");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");

  // Local Storage se data load karein ya empty array rakhein
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  // Pehle se saved data dikhane ke liye
  renderExpenses();

  submitBtn.addEventListener("click", () => {
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);

    if (name !== "" && !isNaN(amount) && amount > 0) {
      const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount,
      };

      expenses.push(newExpense);
      saveToLocalStorage();
      renderExpenses();

      // Inputs khali karein
      expenseNameInput.value = "";
      expenseAmountInput.value = "";
    } else {
      alert("Sahi name aur amount daalein!");
    }
  });

  function renderExpenses() {
    expenseList.innerHTML = "";

    expenses.forEach((expense) => {
      const li = document.createElement("li");
      li.classList.add("newLi");
      li.innerHTML = `
        <span class="exp-name">${expense.name}</span>
        <span class="exp-amt">$${expense.amount.toFixed(2)}</span>
        <button class="delete-btn" data-id="${expense.id}">Delete</button>
      `;
      expenseList.appendChild(li);
    });

    updateTotal();
  }

  function updateTotal() {
    const total = expenses.reduce((sum, item) => sum + item.amount, 0);
    totalAmountDisplay.textContent = total.toFixed(2);
  }

  function saveToLocalStorage() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  // Delete button functionality
  expenseList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const id = parseInt(e.target.getAttribute("data-id"));
      expenses = expenses.filter((expense) => expense.id !== id);
      saveToLocalStorage();
      renderExpenses();
    }
  });
});
