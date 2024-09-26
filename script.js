function calculateDiscount() {
    // Get the price and discount percentage values
    const price = document.getElementById('price').value;
    const discount = document.getElementById('discount').value;
  
    // // Validate inputs
    // if (isNaN(price) || isNaN(discount) || price <= 0 || discount < 0) {
    //   document.getElementById('result').textContent = "Please enter valid numbers!";
    //   return;
    // }
  
    // Calculate the discount amount and final price
    const discountAmount = (discount / 100) * price;
    const finalPrice = price - discountAmount;
  
    console.log(finalPrice)
    // Display the result
    // document.getElementById('result').textContent = `Final Price after ${discount}% discount: $${finalPrice}.00`;
  }
  


  