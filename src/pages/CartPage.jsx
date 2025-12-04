import CartPreview from "../components/checkout flow/CartPreview";
import { Link } from "react-router-dom";

function CartPage() {
  return (
    <>
      <div className="p-6 max-w-xl mx-auto">
        <CartPreview />
        <Link
          to="/checkout"
          className="block bg-blue-600 text-white py-3 rounded-lg mt-4 text-center"
        >
          Proceed to Checkout
        </Link>
      </div>
    </>
  );
}

export default CartPage