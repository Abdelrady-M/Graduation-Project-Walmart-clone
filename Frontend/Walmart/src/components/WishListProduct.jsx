import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa6";
import {
    moveToCartAction,
    removeFromWishAction,
} from "../store/slices/wishList";

function WishListProduct({ product }) {
    const dispatch = useDispatch();

    function moveToCart(id) {
        dispatch(moveToCartAction(id));
    }

    function removeFromWishList(id) {
        dispatch(removeFromWishAction(id));
    }

    return (
        <div className="w-full flex flex-wrap">
            <div className="flex flex-col md:w-6/12 w-full">
                <div className="bg-light-subtle flex flex-col p-1 overflow-hidden" style={{ width: "7.75rem", height: "7.75rem" }}>
                    <img src={product._id.thumbnail} alt="" className="h-full m-auto overflow-hidden object-cover w-full" />
                </div>
                <div className="flex flex-col col-9 px-2">
                    <h4>{product._id.title}</h4>
                    <p className="text-secondary">details: {product._id.description}</p>
                </div>
            </div>
            <div className="flex flex-col md:w-6/12 w-full md:flex-row items-center">
                <div className="mb-2 md:mb-0 mr-5">
                    <button onClick={() => moveToCart(product._id._id)} className="rounded-pill px-5 py-3 bg-blue-500 text-white">
                        Move To Cart
                    </button>
                </div>
                <div>
                    <button onClick={() => removeFromWishList(product._id._id)} className="rounded-pill px-5 py-3 bg-red-500 text-white flex items-center">
                        <FaTrash className="text-danger mr-2" />
                        <span>Remove</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

WishListProduct.propTypes = {
    product: PropTypes.object.isRequired,
};

export default WishListProduct;
