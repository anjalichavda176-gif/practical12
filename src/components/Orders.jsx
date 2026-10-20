import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import CurrentOrders from "./CurrentOrders.jsx";
import OrderHistory from "./OrderHistory.jsx";
import CancelledOrders from "./CancelledOrders.jsx";

function Orders() {
  return (
    <div className="orders-container">
      <h1>Order Management</h1>

      <nav className="order-nav">
        <NavLink to="current">Current Orders</NavLink>
        <NavLink to="history">Order History</NavLink>
        <NavLink to="cancelled">Cancelled Orders</NavLink>
      </nav>

      <Routes>
        <Route index element={<Navigate to="current" replace />} />
        <Route path="current" element={<CurrentOrders />} />
        <Route path="history" element={<OrderHistory />} />
        <Route path="cancelled" element={<CancelledOrders />} />
      </Routes>
    </div>
  );
}

export default Orders;