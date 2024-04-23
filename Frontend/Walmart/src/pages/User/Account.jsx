// import { useEffect } from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";

// function UserProfile() {
//   const user = useSelector((state) => state.user.user);

//   useEffect(() => {}, []);

//   return (
//     <div className="container mx-auto py-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div className="flex flex-col justify-start space-y-4">
//           <h5 className="text-lg font-semibold">Manage My Account</h5>
//           <ul className="space-y-2">
//             <li>
//               <NavLink
//                 to="/userprofile/"
//                 className="block text-blue-600 hover:underline"
//                 activeClassName="font-bold"
//               >
//                 My Profile
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/userprofile/address"
//                 className="block text-blue-600 hover:underline"
//                 activeClassName="font-bold"
//               >
//                 Address Book
//               </NavLink>
//             </li>
//           </ul>
//           <h5 className="text-lg font-semibold">Orders</h5>
//           <ul className="space-y-2">
//             <li>
//               <NavLink
//                 to="/userprofile/pastOrders"
//                 className="block text-blue-600 hover:underline"
//                 activeClassName="font-bold"
//               >
//                 Past Orders
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/userprofile/upcomingOrders"
//                 className="block text-blue-600 hover:underline"
//                 activeClassName="font-bold"
//               >
//                 Upcoming Orders
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="orderReviews"
//                 className="block text-blue-600 hover:underline"
//                 activeClassName="font-bold"
//               >
//                 Reviews
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//         <div className="flex justify-center items-center">
//           <div className="w-full md:w-4/5">
//             <Outlet />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserProfile;
