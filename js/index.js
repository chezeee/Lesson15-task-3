class Payment {
  /**
   * @param {number} amount
   */
  constructor(amount) {
    this.amount = amount;
  }

  // your code
}

// Sample usage - do not modify
const payment = new Payment(10); // 10 USD
payment.amount; // 1000 (value in cents)

payment.amount = 7; // 7 USD
payment.amount; // 700 (value in cents)
