"use client";

import { useState } from "react";

export function TestButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    console.log("Test button clicked!");
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        style={{
          padding: "8px 16px",
          backgroundColor: "#2563eb",
          color: "white",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Test Button
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            zIndex: 1000,
          }}
        >
          <h2>Test Modal</h2>
          <p>This is a test modal that appears when you click the button.</p>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
}
