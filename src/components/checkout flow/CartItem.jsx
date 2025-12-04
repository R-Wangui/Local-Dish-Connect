import PropTypes from "prop-types";
// import { useCartStore } from '../../store/cartStore';

function CartItem({ item, onRemove }) {
  return (
    <>
      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow mb-3">
        <div>
          <p className="font-medium">{item.name}</p>
          <p className="text-gray-600">Ksh {item.price}</p>
        </div>
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:underline"
        >
          Remove
        </button>
      </div>
    </>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItem;
