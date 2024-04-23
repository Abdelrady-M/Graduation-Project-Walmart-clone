import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { pastOrdersAction } from "../../store/slices/orders";
import { userAction } from "../../store/slices/user";

const UserOrders = () => {
  let orders = useSelector((state) => state.orders.pastOrders);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let value = orders?.length;

  useEffect(() => {
    dispatch(pastOrdersAction(user._id));
    console.log(user);
    console.log(orders);
  }, [orders, user]);

  return (
    <div className="container mx-auto px-4 py-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {value ? (
          orders.map((order) => (
            <div
              className="cursor-pointer"
              key={order._id}
              onClick={() => {
                navigate(`/Order/${order._id}`);
              }}
            >
              <div className="bg-white shadow-md p-4 rounded-lg">
                <div className="text-center">
                  <p className="text-lg font-semibold mb-2">Address</p>
                  <p className="text-gray-600">{order.shippingAddress.street}</p>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between items-center">
                  <div className="text-center">
                    <p className="text-lg font-semibold mb-2">Price</p>
                    <p className="text-gray-600">{order.amount}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold mb-2">Payment Status</p>
                    <p className="text-gray-600">{order.paymentStatus}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-semibold">You haven't placed any orders yet!</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserOrders;
