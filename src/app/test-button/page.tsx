"use client";

import { useState } from "react";

export default function TestButtonPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-bold">Test Button Page</h1>
      <button
        onClick={() => {
          console.log("Button clicked!");
          setCount(count + 1);
        }}
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Click me! Count: {count}
      </button>
    </div>
  );
}
