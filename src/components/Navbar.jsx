import { Link } from "react-router"
import '../styles/navbar.css'

function Navbar() {
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
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Navbar