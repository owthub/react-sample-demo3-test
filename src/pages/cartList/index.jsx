import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { useNavigate } from "react-router-dom";
import CartTile from "./CartTile";

function CartListPage(){
    const {cartItems} = useContext(ShoppingCartContext)
    const navigate = useNavigate()
    
    return <>
        <div className="max-w-5xl mx-auto max-md:max-w-xl py-4">
            <h1 className="text-2xl font-bold text-gray-800 text-center">My Cart Page</h1>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="md:col-span-2 space-y-4">
                    {
                        cartItems?.length ? 
                          cartItems.map( (singleCartItem) => (
                            <CartTile singleCartItem={singleCartItem} />
                          ))
                        : <h3>Cart is Empty</h3>
                    }
                </div>
                <div className="bg-gray-100 rounded-sm p-4 h-max">
                    <h3 className="text-xl font-extrabold text-gray-950 border-gray-300">
                        Order Summary
                    </h3>
                    <ul className="text-gray-700 mt-4">
                        <p className="flex flex-wrap gap-4 text-sm font-bold">
                            Total <span></span>
                        </p>
                    </ul>
                    <div className="mt-5 gap-2 flex">
                        <button className="text-sm px-4 bg-black text-white font-extrabold">Checkout</button>
                        <button onClick={ () => navigate("/products") } className="text-sm px-4 bg-black text-white font-extrabold">Continue Shopping</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default CartListPage;