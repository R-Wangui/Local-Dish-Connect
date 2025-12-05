import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import OrderSummary from "../components/checkout flow/OrderSummary";
import PaymentMethod from "../components/checkout flow/PaymentMethod";
import {
  createOrder,
  createTransaction,
  completeTransaction,
} from "../services/checkoutService";
import NavigationBar from "../components/layout/NavigationBar";

function PaymentPage() {
  const navigate = useNavigate();
  const items = useCartStore((s) => s.items);
  const delivery = useCartStore((s) => s.deliveryMethod);
  const phone = useCartStore((s) => s.phoneNumber);
  const userId = "firebase-user-id-example"; // TODO replace with auth

  const subtotal = items.reduce((a, b) => a + b.price, 0);
  const deliveryFee = delivery === "home" ? 200 : 0;
  const total = subtotal + deliveryFee;

  const handleSuccess = async (mpesaRef) => {
    const orderId = await createOrder({
      userId,
      phoneNumber: phone,
      items,
      delivery,
      payment: "mpesa",
      amount: total,
    });

    const txId = await createTransaction({
      userId,
      phoneNumber: phone,
      orderId,
      amount: total,
    });

    await completeTransaction(txId, orderId, mpesaRef);

    useCartStore.getState().clearCart();

    navigate(`/order-complete?orderId=${orderId}`);
  };

  return (
    <>
      <NavigationBar />
      <div className="p-6 max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">M-Pesa Payment</h2>
        <OrderSummary />
        <PaymentMethod amount={total} onSuccess={handleSuccess} />
      </div>
    </>
  );
}

export default PaymentPage;
