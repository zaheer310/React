import React from "react";

const cartItems = [
  { id: 1, name: "Classic Burger", price: 180, qty: 2, tag: "Popular" },
  { id: 2, name: "Paneer Wrap", price: 150, qty: 1, tag: "Veg Special" },
  { id: 3, name: "Cold Coffee", price: 90, qty: 2, tag: "Beverage" },
];

const Cart = () => {
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  const deliveryFee = subtotal > 500 ? 0 : 40;
  const total = subtotal + deliveryFee;

  return (
    <div style={styles.page}>
      <div className="res-card" style={styles.card}>
        <div style={styles.header}>
          <div>
            <p style={styles.badge}>Your Order</p>
            <h2 style={styles.title}>Cart</h2>
          </div>
          <div style={styles.countBox}>{cartItems.length} items</div>
        </div>

        <div style={styles.list}>
          {cartItems.map((item) => (
            <div key={item.id} style={styles.item}>
              <div style={styles.itemInfo}>
                <div style={styles.itemIcon}>{item.name.charAt(0)}</div>
                <div>
                  <h4 style={styles.itemName}>{item.name}</h4>
                  <p style={styles.itemMeta}>{item.tag}</p>
                </div>
              </div>

              <div style={styles.qtyPrice}>
                {item.qty} × ₹{item.price}
              </div>
            </div>
          ))}
        </div>

        <div style={styles.summary}>
          <div style={styles.row}>
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div style={styles.row}>
            <span>Delivery</span>
            <span>{deliveryFee === 0 ? "Free" : `₹${deliveryFee}`}</span>
          </div>
          <div style={{ ...styles.row, ...styles.total }}>
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>

        <button style={styles.button}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: "40px 20px 70px",
    background: "#f7fbf6",
    minHeight: "70vh",
  },
  card: {
    maxWidth: "760px",
    margin: "0 auto",
    padding: "24px",
    borderRadius: "18px",
    background: "#ffffff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  badge: {
    margin: 0,
    color: "#6b8a63",
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: "0.8rem",
    letterSpacing: "0.05em",
  },
  title: {
    margin: "4px 0 0",
    color: "#2f3e2f",
  },
  countBox: {
    background: "#a0c09a",
    color: "#fff",
    padding: "8px 12px",
    borderRadius: "999px",
    fontWeight: "700",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 0",
    borderBottom: "1px solid #e9f0e6",
  },
  itemInfo: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  itemIcon: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    background: "#a0c09a",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
  },
  itemName: {
    margin: 0,
    color: "#2f3e2f",
  },
  itemMeta: {
    margin: "2px 0 0",
    color: "#7a8a74",
    fontSize: "0.9rem",
  },
  qtyPrice: {
    fontWeight: "700",
    color: "#2f3e2f",
  },
  summary: {
    marginTop: "20px",
    paddingTop: "14px",
    borderTop: "1px solid #e9f0e6",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
    color: "#4a594a",
  },
  total: {
    fontWeight: "700",
    fontSize: "1.05rem",
    color: "#2f3e2f",
    marginTop: "8px",
  },
  button: {
    marginTop: "20px",
    width: "100%",
    border: "none",
    padding: "12px 16px",
    background: "#a0c09a",
    color: "#fff",
    borderRadius: "10px",
    fontSize: "1rem",
    fontWeight: "700",
    cursor: "pointer",
  },
};

export default Cart;
