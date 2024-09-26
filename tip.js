function calculateTip() {
    // Get the bill amount and tip percentage values
    const bill = parseFloat(document.getElementById('bill').value);
    const tipPercent = parseFloat(document.getElementById('tip').value);
  
    // Validate inputs
    if (isNaN(bill) || bill <= 0) {
      document.getElementById('result').textContent = "Please enter a valid bill amount!";
      return;
    }
  
    // Calculate the tip amount and the total bill with tip
    const tipAmount = (tipPercent / 100) * bill;
    const totalBill = bill + tipAmount;
  
    // Display the result
    document.getElementById('result').textContent = `Tip Amount: $${tipAmount.toFixed(2)}, Total Bill: $${totalBill.toFixed(2)}`;
  }
  