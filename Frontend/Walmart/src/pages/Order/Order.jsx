import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { oneOrderAction } from "../../store/slices/order";
import { RiCustomerService2Line, RiLoopRightFill } from "react-icons/ri";

function Order() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const order = useSelector((state) => state.oneOrder.oneOrder);
  const date = new Date(order.createdAt);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(oneOrderAction(id));
  }, []);
  console.log("This orderrrrrrrrrrr",order);
  return (
    <div className="container mx-auto my-6">
      <h2 className="text-2xl font-bold mb-3">Review your order</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-4">
          <h5 className="text-lg font-semibold mb-2">Shipping Address</h5>
          {!order.shippingAddress ? (
            <p className="placeholder-glow text-gray-400">Loading...</p>
          ) : (
            <>
            <p className="mb-1">Street: {order.items.thumbnail}</p>
              <p className="mb-1">Street: {order.shippingAddress.street}</p>
              <p className="mb-1">Area: {order.shippingAddress.area}</p>
              <p className="mb-1">City: {order.shippingAddress.city}</p>
              <p className="mb-1">Country: {order.shippingAddress.country}</p>
            </>
          )}
        </div>
        <div className="border rounded-lg p-4">
          <h5 className="text-lg font-semibold mb-2">Order Details</h5>
          {!order ? (
            <p className="placeholder-glow text-gray-400">Loading...</p>
          ) : (
            <>
              <p className="mb-1">Order Placed At: {date.toDateString()}</p>
              <p className="mb-1">Order Price: ${order.amount}</p>
              <p className="mb-1">Order Status: {order.status}</p>
              <p className="mb-1">Order Payment Status: {order.paymentStatus}</p>
            </>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {order.items &&
          order.items.length > 0 &&
          order.items.map((item, index) => (
            <div className="border rounded-lg p-4" key={index}>
              <h5 className="text-lg font-semibold mb-2">{item.title}</h5>
              <img src={item.thumbnail} className="w-[300px]"/>
              <p className="mb-1">Product Price: ${item.price}</p>
              <p className="mb-1">Rating: {item.rating}</p>
              <p className="mb-1">Description: {item.description}</p>
              <button
                className="btn btn-outline-warning w-1/2 mx-auto mt-3"
                onClick={() => {
                  navigate(`Details/${item._id}`);
                }}
              >
                View Product
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Order;
