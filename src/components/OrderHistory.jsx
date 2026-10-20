function OrderHistory() {
  return (
    <div className="order-card">
      <h2>Order History</h2>

      <div className="order">
        <h3>Order #090</h3>
        <p>Product: Bluetooth Speaker</p>
        <p>Price: ₹999</p>
        <span className="status delivered">Delivered</span>
      </div>

      <div className="order">
        <h3>Order #091</h3>
        <p>Product: Keyboard</p>
        <p>Price: ₹1,299</p>
        <span className="status delivered">Delivered</span>
      </div>
    </div>
  );
}

export default OrderHistory;