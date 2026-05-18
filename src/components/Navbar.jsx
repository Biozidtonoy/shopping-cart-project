import { Link } from "react-router"
import '../styles/navbar.css'

function Navbar({cartItems}) {
    const totalQuantity = cartItems.reduce(

        (total, item) => total + item.quantity,

        0
    );
  return (
    <>
    <div className="navbar flex justify-around p-4">
        <div className="compName">
            <h1 className="text-3xl font-bold">Shopping Cart</h1>
        </div>
        <nav >
            <ul className="flex gap-5 text-2xl ">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link className="cart" to="/cart">Cart
                {
                    totalQuantity > 0 && (
                        <div className="text-blue-400 font-bold">{totalQuantity}</div>
                    )
                }
                </Link></li>
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Navbar