import React from "react";

const Contact = () => {
  return (
    <div style={styles.page}>
      <div className="res-card" style={styles.card}>
        <p style={styles.badge}>Contact Us</p>
        <h1 style={styles.title}>We’d love to hear from you</h1>
        <p style={styles.text}>
          Whether you have a question about your order, want to partner with us,
          or just want to share feedback, we are always happy to help.
        </p>

        <div style={styles.infoBox}>
          <div>
            <h3 style={styles.heading}>Email</h3>
            <p style={styles.infoText}>zaheer@foodieexpress.com</p>
          </div>
          <div>
            <h3 style={styles.heading}>Phone</h3>
            <p style={styles.infoText}>+91 98765 43210</p>
          </div>
          <div>
            <h3 style={styles.heading}>Address</h3>
            <p style={styles.infoText}>123 Food Street, Hyderabad</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: "40px 20px 70px",
    background: "#6b8a63",
    minHeight: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "6px",
    borderRadius: "2%"
  },
  card: {
    maxWidth: "650px",
    width: "100%",
    padding: "30px",
    borderRadius: "16px",
    background: "#ffffff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    
  },
  badge: {
    margin: 0,
    color: "#6b8a63",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    fontSize: "0.8rem",
  },
  title: {
    color: "#2f3e2f",
    margin: "8px 0 10px",
  },
  text: {
    color: "#5d6b5d",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  infoBox: {
    display: "grid",
    gap: "12px",
  },
  heading: {
    margin: "0 0 4px",
    color: "#2f3e2f",
  },
  infoText: {
    margin: 0,
    color: "#5d6b5d",
  },
};

export default Contact;
