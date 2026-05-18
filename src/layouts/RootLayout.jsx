import { useState } from "react"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router"


function RootLayout() {
    const [cartItems, setCartItems] = useState([]);
  return (
    <>
    <Navbar cartItems={cartItems}/>

    <Outlet context={{cartItems, setCartItems}}/>
    </>
  )
}

export default RootLayout