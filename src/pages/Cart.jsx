import { useOutletContext } from "react-router";
import '../styles/cart.css'

function Cart() {
  const { cartItems, setCartItems } = useOutletContext();

 

  const removeItem = (id) => {
    const filteredItems = cartItems.filter((item) => item.id !== id);

    setCartItems(filteredItems);
  };

 

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,

    0,
  );

  

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold text-gray-500">Your cart is empty</h1>
      </div>
    );
  }

  return (
    <>
    <div className="cartContainer min-h-screen bg-gray-100 p-8">
      <div className="container">
        <div className="childContainer max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6">

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-4 text-left">Product</th>

                <th className="p-4 text-left">Price</th>

                <th className="p-4 text-left">Quantity</th>

                <th className="p-4 text-left">Total</th>

                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-4 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-contain bg-gray-100 p-2 rounded-lg"
                    />
                    <p className="font-semibold">{item.title}</p>
                  </td>
                  <td className="p-4 font-semibold text-blue-600">
                    ${item.price}
                  </td>
                  <td className="p-4">{item.quantity}</td>
                  <td className="p-4 font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg transition-all duration-300"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mt-8">
          <div className="bg-gray-200 p-6 rounded-xl w-72">
            <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>

            <div className="flex justify-between text-lg font-semibold">
              <span>Total:</span>

              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300">
              Checkout
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}

export default Cart;
