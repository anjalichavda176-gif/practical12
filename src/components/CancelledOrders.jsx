function CancelledOrders() {
  return (
    <div className="order-card">
      <h2>Cancelled Orders</h2>

      <div className="order">
        <h3>Order #080</h3>
        <p>Product: Gaming Mouse</p>
        <p>Price: ₹799</p>
        <span className="status cancelled">Cancelled</span>
      </div>

      <div className="order">
        <h3>Order #081</h3>
        <p>Product: USB Cable</p>
        <p>Price: ₹299</p>
        <span className="status cancelled">Cancelled</span>
      </div>
    </div>
  );
}

export default CancelledOrders;