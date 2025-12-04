import React from "react";
import PropTypes from "prop-types";
import { useCartStore } from "../../store/cartStore";

function PaymentMethod({ amount, onSuccess }) {
  const [open, setOpen] = React.useState(false);
  const phone = useCartStore((s) => s.phoneNumber);
  const setPhone = useCartStore((s) => s.setPhone);

  const simulateSTK = () => {
    setTimeout(() => {
      const mpesaRef = "MPESA" + Math.floor(Math.random() * 999999);
      onSuccess(mpesaRef);
      setOpen(false);
    }, 2000);
  };
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full bg-green-600 text-white py-3 rounded-lg mt-6"
      >
        Pay with M-Pesa
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Complete Payment</h3>

            <label className="block mb-3">
              Phone Number
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border p-2 rounded mt-1"
                placeholder="2547XXXXXXXX"
              />
            </label>

            <button
              onClick={simulateSTK}
              className="bg-green-600 text-white w-full py-2 rounded-lg"
            >
              Simulate STK Push (Ksh {amount})
            </button>
          </div>
        </div>
      )}
    </>
  );
}

PaymentMethod.propTypes = {
  amount: PropTypes.number.isRequired,
  onSuccess: PropTypes.func.isRequired,
};


export default PaymentMethod