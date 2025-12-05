// import React from 'react'
import NavigationBar from "../components/layout/NavigationBar";

function OrderComplete() {
  return (
    <>
      <NavigationBar />
      <div className="p-6 max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Order Complete</h2>
        <p>Your order has been placed successfully!</p>
      </div>
    </>
  );
}

export default OrderComplete;
