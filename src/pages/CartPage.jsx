
import { Link } from "react-router";
import { useCart } from "../context/CardContext";
import { Trash2 } from "lucide-react"; // ✅ delete icon

const CartPage = () => {
    const {cart,  removeFromCart, clearCart, increaseQty, decreaseQty } = useCart();



  // ✅ Checkout (clear cart)
  const handleCheckout = () => {
    alert("Proceeding to payment...");
    clearCart();
  };
    
    

  return (
    <div className="container custom_container px-4 mx-auto py-12 md:py-24">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <p>No bulls in cart.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.name}
                className="w-54 h-54 object-cover border rounded"
              />

              {/* Details */}
              <div className="flex-1 px-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">Category: {item.category}</p>
                {item.detailsPdf && (
                  <Link 
                    to={item.detailsPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9E1E1D] underline text-sm mt-1 inline-block"
                  >
                    View Details PDF
                  </Link>
                )}
              </div>

              {/* Quantity Controls (centered) */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="font-semibold w-6 text-center">
                  {item.qty}
                </span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              {/* Delete icon */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-4 text-red-600 hover:text-red-800"
              >
                <Trash2 size={22} />
              </button>
            </div>
          ))}

                      <div className="flex justify-center items-center mt-6">
                             {/* Checkout button */}
          <button
            onClick={handleCheckout}
            className="btn btn-primary bg-[#9E1E1D] capitalize font-semibold text-base lg:text-lg text-white inline-block py-2.5 px-3 xl:px-6 mt-6 cursor-pointer"
          >
            Proceed to Checkout
          </button>
       </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
