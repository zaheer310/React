import React from "react";

const Error = () => {
  return (
    <div style={styles.page}>
      <div className="res-card" style={styles.card}>
        <h1 style={styles.title}>Oops! Something went wrong</h1>
        <p style={styles.text}>
          The page you are looking for could not be loaded. Please try again or go back home.
        </p>
        <a href="/" style={styles.button}>
          Go to Home
        </a>
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: "40px 20px 70px",
    background: "#f7fbf6",
    minHeight: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    maxWidth: "500px",
    width: "100%",
    textAlign: "center",
    padding: "30px",
    borderRadius: "16px",
    background: "#ffffff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  },
  title: {
    color: "#2f3e2f",
    marginBottom: "10px",
  },
  text: {
    color: "#5d6b5d",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  button: {
    display: "inline-block",
    background: "#a0c09a",
    color: "#fff",
    textDecoration: "none",
    padding: "10px 16px",
    borderRadius: "999px",
    fontWeight: "700",
  },
};

export default Error;
