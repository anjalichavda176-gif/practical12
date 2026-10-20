function CurrentOrders() {
  return (
    <div className="order-card">
      <h2>Current Orders</h2>

      <div className="order">
        <h3>Order #101</h3>
        <p>Product: Wireless Headphones</p>
        <p>Price: ₹1,499</p>
        <span className="status current">Processing</span>
      </div>

      <div className="order">
        <h3>Order #102</h3>
        <p>Product: Smart Watch</p>
        <p>Price: ₹2,499</p>
        <span className="status current">Shipped</span>
      </div>
    </div>
  );
}

export default CurrentOrders;