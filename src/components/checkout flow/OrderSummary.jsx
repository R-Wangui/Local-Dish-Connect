import { useCartStore } from "../../store/cartStore";

function OrderSummary() {

    const items = useCartStore((s) => s.items);
    const delivery = useCartStore((s) => s.deliveryMethod);

    const subtotal = items.reduce((a, b) => a + b.price, 0);
    const deliveryFee = delivery === "home" ? 200 : 0;
    const total = subtotal + deliveryFee;

  return (
    <>
      <div className="p-4 bg-white shadow rounded-lg">
        <p>Subtotal: Ksh {subtotal}</p>
        <p>Delivery: Ksh {deliveryFee}</p>
        <h4 className="font-semibold mt-2">Total: Ksh {total}</h4>
      </div>
    </>
  );
}

export default OrderSummary;
