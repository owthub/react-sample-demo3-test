import { useContext, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../context";

function SingleProductPage(){

    const {id} = useParams();
    const navigate = useNavigate();
    const {singleProductDetails, setSingleProductDetails, loading, setLoading, handleAddToCart} = useContext(ShoppingCartContext)

    async function fetchSingleProductDetails(){
        const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
        const result = await apiResponse.json();
        if(result) {
            setSingleProductDetails(result)
            setLoading(false)
        }
    }

    useEffect( () => {
        fetchSingleProductDetails();
    }, [id]);

    //console.log(singleProductDetails);

    // function handleNavigateToCartPage(){
    //     navigate("/cart")
    // }

    if(loading) return <h3>Loading, please wait</h3>
    
    return <>
        <div>
            <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
                <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm p-6">
                    <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                        <div className="px-4 py-10 rounded shadow-lg relative">
                            <img 
                            className="w-4/5 rounded object-cover"
                            src={singleProductDetails?.thumbnail}
                            title={singleProductDetails?.title}
                            />
                        </div>
                        <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
                            {
                                singleProductDetails?.images?.length > 0 ? 
                                singleProductDetails?.images.map( (imageItem) => (
                                    <div className="rounded-xl md-4 shadow-md" key={imageItem}>
                                        <img 
                                        src={imageItem}
                                        className="w-24 cursor-pointer" 
                                        alt="Product Secondary Images"
                                        />
                                    </div>
                                ) )
                                : null
                            }
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-extrabold text-[#333333]">
                            {singleProductDetails?.title}
                        </h2>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <p className="text-xl font-bold">
                                ${singleProductDetails?.price}
                            </p>
                        </div>
                        <div>
                            <button onClick={ () => handleAddToCart(singleProductDetails) } className="mt-5 min-w-[200px] px-4 py-3 border border-[#333] bg-transparent text-sm font-semibold rounded">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SingleProductPage;