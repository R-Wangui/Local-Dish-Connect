// import React from 'react'
import { Link } from "react-router-dom";
import DeliveryOptions from "../components/checkout flow/DeliveryOptions";
import OrderSummary from "../components/checkout flow/OrderSummary";
import NavigationBar from "../components/layout/NavigationBar";

function CheckoutPage() {
  return (
    <>
      <NavigationBar />
      <div className="p-6 max-w-xl mx-auto">
        <DeliveryOptions />
        <OrderSummary />
        <Link
          to="/payment"
          className="block bg-blue-600 text-white py-3 rounded-lg mt-4 text-center"
        >
          Continue to Payment
        </Link>
      </div>
    </>
  );
}

export default CheckoutPage;
