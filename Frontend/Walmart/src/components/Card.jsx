import React from "react";
import { CiHeart } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cart";

// import { fetchProducts } from "../store/slices/product";

const Card = ({ prdId, photo, title, price }) => {
  // const { products } = useSelector((state) => state.products);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //     dispatch(fetchProducts());
  // }, [dispatch]);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(prdId, 1));
  };

  return (
    <div className="relative flex flex-col w-full h-auto">
      <img src={photo} alt="" className="w-[160px] h-[160px] " />
      <div className="flex flex-col w-[13rem] mb-2 ">
        <p className="font-bold text-[#2A8703] text-[18px]">Now {price}</p>
        <p className="text-[16px] text-[#46474a] overflow-hidden w-auto whitespace-normal line-clamp-2">
          {title}
        </p>
      </div>
      <div className="absolute top-1 left-[8rem] z-40 w-[28px] h-[28px]  flex items-center justify-center bg-white rounded-full">
        <CiHeart className="text-[24px]" />
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black"
      >
        <AiOutlinePlus />
        Add
      </button>
      <div className="flex text-center items-center"></div>
    </div>
  );
};

export default Card;
