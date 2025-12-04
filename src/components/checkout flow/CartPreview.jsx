import { useCartStore } from "../../store/cartStore";
import CartItem from "./CartItem";



function CartPreview() {
  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  return (
    <>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {items.length === 0 && <p>No items in cart.</p>}
        {items.map((item) => (
          <CartItem key={item.id} item={item} onRemove={removeItem} />
        ))}
      </div>
    </>
  );
}

export default CartPreview