import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import ProductTile from "../../components/productTile";

function ProductListPage(){

    const { productsList, loading } = useContext(ShoppingCartContext)
    //console.log(productsList);

    if(loading) return <h3>Loading Products, please wait...</h3>
    
    return <>
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-3xl font-extralight text-gray-950">Our Featured Products</h2>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 sm:grid-cols-4">
                    {
                        productsList?.length > 0 ? 
                        productsList.map( (singleProduct) => <ProductTile singleProductTile={singleProduct} /> )
                        : <h3>No Products Found</h3>
                    }
                </div>
            </div>
        </section>
    </>
}

export default ProductListPage;