document.addEventListener("DOMContentLoaded", () => {
  const ExpenseName = document.getElementById("expenseName");
  const ExpenseAmount = document.getElementById("expenseAmount");
  const SubmitBtn = document.getElementById("submit");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");

  let expenses = [];
  let totalAmount = calculateTotal();

  SubmitBtn.addEventListener("click", (e) => {
    const expenseValue = String(ExpenseName.value);
    const expenseAmountValue = parseInt(ExpenseAmount.value);

    const list = document.createElement("li");
    list.classList.add("newLi");
    list.textContent = `${expenseValue} - ${expenseAmountValue}`;
    expenseList.appendChild(list);
  });

  function calculateTotal() {}
});
