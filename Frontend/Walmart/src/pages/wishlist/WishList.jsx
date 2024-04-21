import Loader from "../../components/Loader/loader";
import WishListProduct from "../../components/WishListProduct";
import { useSelector } from "react-redux";

function WishList() {
    const isLoading = useSelector((state) => state.wishList.loading);
    const wishList = useSelector((state) => state.wishList.list);
    const token = localStorage.getItem("token");
    console.log("wishList>>>>>>>>>>>>>>.", wishList)
    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="flex flex-col items-center justify-center w-full h-screen">
                    <h1 className="font-bold text-3xl my-5">My Wish List</h1>
                    <div className="w-full md:w-10/12">
                        {wishList && wishList.length > 0 ? (
                            <>
                                <div className="border rounded-lg p-4 bg-white">
                                    {wishList.map((prod, index) => (
                                        <div key={index}>
                                            <WishListProduct
                                                product={prod}
                                                token={token}
                                            />
                                            {index < wishList.length - 1 && (
                                                <hr className="my-4" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                             
                            </>
                        ) : (
                            <h3 className="font-semibold text-center mt-8">
                                Your Wish list is empty!
                            </h3>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default WishList;
