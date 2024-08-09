import { Fragment, useContext } from "react";
import { ShoppingCartContext } from "../../context";

function CartTile({singleCartItem}){

    const {handleRemoveCartItems} = useContext(ShoppingCartContext)

    return (
        <Fragment>
            <div className="grid grid-cols-3 items-start gap5">
                <div className="col-span-2 flex items-start gap-4">
                    <div className="w-28 h-28 max-sm:w-20 shrink-0 bg-gray-800">
                        <img 
                        src={singleCartItem?.thumbnail} 
                        alt={singleCartItem?.title} 
                        className="w-full h-full object-contain"
                        />
                    </div>
                    <div>
                        <h3 className="text-base font-bold text-gray-900">{singleCartItem?.title}</h3>
                        <button onClick={() => handleRemoveCartItems(singleCartItem, true)} className="text-sm px-4 bg-black text-white font-extrabold">Remove</button>
                    </div>
                </div>
                <div className="ml-auto">
                    <h3 className="text-lf font-bold text-gray-900">${singleCartItem?.totalPrice}</h3>
                    <div className="mt-3">
                        <button disabled={singleCartItem?.quantity == 1} onClick={() => handleRemoveCartItems(singleCartItem, false)} className="disabled:opacity-65 border border-[#000]">-</button>
                        <button className="border border-[#000]">+</button>
                    </div>
                </div>
            </div>
            <hr className="border-gray-500"/>
        </Fragment>
    );
}

export default CartTile;