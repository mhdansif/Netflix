import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "white", // White background
        color: "black",           // Black text
        padding: "15px 0",        // Vertical padding
        textAlign: "center",      // Centered text
        width: "100%",            // Full width
        position: "fixed",        // Stick to bottom
        bottom: 0,
        left: 0,
        boxShadow: "0 -2px 5px rgba(0,0,0,0.1)" // subtle shadow
      }}
    >
      MOHAMED ANSIF &copy; 2025. All rights reserved.
    </footer>
  );
};

export default Footer;