import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { userAction } from "../../store/slices/user";
function UserProfile() {
  const user = useSelector((state) => state.user.user);
  const [decodedToken, setDecodedToken] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token); // Fix the function name here
      console.log(">>>>>>>>>>>>>>>>>>>user", decoded);
      setDecodedToken(decoded);
    }
  }, []);

  useEffect(() => {
    if (decodedToken && decodedToken.id) { // Ensure decodedToken is not null before accessing its properties
      dispatch(userAction(decodedToken.id)); // Pass decodedToken.id instead of user
    }
  }, [decodedToken, dispatch]);

  return (
    <div className="container mx-auto py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-start space-y-4">
          <h5 className="text-lg font-semibold">Manage My Account</h5>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/userprofile/"
                className="block text-blue-600 hover:underline"
                activeClassName="font-bold"
              >
                My Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/userprofile/address"
                className="block text-blue-600 hover:underline"
                activeClassName="font-bold"
              >
                Address Book
              </NavLink>
            </li>
          </ul>
          <h5 className="text-lg font-semibold">Orders</h5>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/userprofile/pastOrders"
                className="block text-blue-600 hover:underline"
                activeClassName="font-bold"
              >
                Past Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/userprofile/upcomingOrders"
                className="block text-blue-600 hover:underline"
                activeClassName="font-bold"
              >
                Upcoming Orders
              </NavLink>
            </li>
     
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full md:w-4/5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
