import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { comingOrdersAction } from "../../store/slices/orders";

const UserComingOrders = () => {
    const user = useSelector((state) => state.user.user);
    const orders = useSelector((state) => state.orders.comingOrders);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log("user coming orders", orders);
  
    let value = orders?.length;
    useEffect(() => {
      dispatch(comingOrdersAction(user._id));
      console.log(user);
      console.log(orders);
    }, []);
  return (
    <>
      {orders && orders.length > 0 ? (
        <div className="flex justify-center items-center p-1 m-0 gap-y-1 overflow-x-auto">
          {orders.map((order) => (
            <div
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              key={order._id}
              onClick={() => {
                navigate(`/Order/${order._id}`);
              }}
            >
              <div className="border rounded-lg shadow-md p-4 cursor-pointer transition duration-300 hover:shadow-xl w-[250px] flex">
                <p className="text-lg font-semibold mb-2 mr-2">
                  Address
                  <br />
                  {order.shippingAddress?.street}
                </p>
                <p className="text-lg mb-2 mr-2">
                  Price
                  <br />
                  {order.amount}
                </p>
                <p className="text-lg">
                  Payment Status
                  <br />
                  {order.paymentStatus}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-center mt-10">There are no orders yet.</h1>
      )}
    </>
  );
};

export default UserComingOrders;
