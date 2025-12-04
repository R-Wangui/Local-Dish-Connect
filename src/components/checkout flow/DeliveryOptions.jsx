import { useCartStore } from "../../store/cartStore";

function DeliveryOptions() {
    const delivery = useCartStore((s) => s.deliveryMethod);
    const setDelivery = useCartStore((s) => s.setDelivery);
  return (
    <>
      <div className="p-4 bg-white shadow rounded-lg mb-4">
        <h3 className="font-semibold mb-2">Delivery Options</h3>
        {[
          { id: "pickup", label: "Pickup (Free)" },
          { id: "home", label: "Home Delivery (Ksh 200)" },
        ].map((o) => (
          <label key={o.id} className="block mb-2">
            <input
              type="radio"
              className="mr-2"
              checked={delivery === o.id}
              onChange={() => setDelivery(o.id)}
            />
            {o.label}
          </label>
        ))}
      </div>
    </>
  );
}


export default DeliveryOptions;