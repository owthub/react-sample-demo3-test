import { useNavigate } from "react-router-dom";

function ProductTile({singleProductTile}){

    const navigate = useNavigate()

    function handleNavigateProductDetailsPage(productId){
        //console.log(productId);
        navigate(`/products-details/${productId}`);
    }

    return <>
        <div key={singleProductTile?.id} className="relative group border border-cyan-700 p-6 cursor-pointer">
            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                <img 
                src={singleProductTile?.thumbnail} 
                alt={singleProductTile?.title} 
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                />
            </div>
            <div className="flex items-start justify-between mt-4 space-x-4">
                <h3 className="font-bold text text-gray-900 sm:text-sm md:text-base">
                    <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">{singleProductTile?.title}</p>
                </h3>
            </div>
            <div className="text-right">
                <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]">${singleProductTile?.price}</p>
            </div>
            <button onClick={() => handleNavigateProductDetailsPage(singleProductTile?.id) } className="px-5 mt-5 w-full rounded-none bg-black text-white font-bold text-lg">View Details</button>
        </div>
    </>
}
export default ProductTile;