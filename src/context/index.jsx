import { Children, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({children}){

    const [loading, setLoading] = useState(true);
    const [productsList, setProductsList] = useState([]);
    const [singleProductDetails, setSingleProductDetails] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    async function fetchListOfProducts(){
        const apiResponse = await fetch('https://dummyjson.com/products');
        const result = await apiResponse.json();
        
        //console.log(result);
        
        if(result && result?.products){
            setProductsList(result?.products);
            setLoading(false);
        }
    }

    useEffect( () => {
        fetchListOfProducts();
        setCartItems(JSON.parse(localStorage.getItem("cartItems")) || [])
    }, []);

    function handleAddToCart(productDetails){
        //console.log(productDetails);

        console.log("hiii");
        

        let copyExistsCartItems = [...cartItems];

        const findIndexOfCurrentItem = copyExistsCartItems.findIndex( cartItems => cartItems.id === productDetails.id )

        //console.log(findIndexOfCurrentItem);

        if(findIndexOfCurrentItem === -1){
            copyExistsCartItems.push({
                ...productDetails,
                quantity: 1,
                totalPrice: productDetails?.price
            });
            //console.log(copyExistsCartItems); 
            setCartItems(copyExistsCartItems)
            localStorage.setItem("cartItems", JSON.stringify(copyExistsCartItems))
            navigate("/cart")
        }
        
    }

    function handleRemoveCartItems(getProductDetails, isFullyRemoveCart){
        console.log(getProductDetails);
        
        let copyExistsCartItems = [...cartItems];
        const findCurrentIndexOfCartItem = copyExistsCartItems.findIndex( item => item.id === getProductDetails.id);

        if(isFullyRemoveCart){
            copyExistsCartItems.splice(findCurrentIndexOfCartItem, 1);
        }else{
            copyExistsCartItems[findCurrentIndexOfCartItem] = {
                ...copyExistsCartItems,
                quantity: copyExistsCartItems[findCurrentIndexOfCartItem].quantity - 1,
                totalPrice: (copyExistsCartItems[findCurrentIndexOfCartItem].quantity - 1) * copyExistsCartItems[findCurrentIndexOfCartItem].price
            };
        }
        localStorage.setItem("cartItems", JSON.stringify(copyExistsCartItems));
        setCartItems(copyExistsCartItems);
    }

    //console.log(productsList);
    
    return (
        <ShoppingCartContext.Provider value={{ productsList, loading, setLoading, singleProductDetails, setSingleProductDetails, handleAddToCart, cartItems, handleRemoveCartItems }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider