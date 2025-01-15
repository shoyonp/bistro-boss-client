import React from "react";
import {
  FaAd,
  FaBars,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: get isAdmin value from the database
  const [isAdmin] = useAdmin()

  return (
    <div className="flex">
      {/* dashboadr side bar */}
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <h2>BISTRO BOSS</h2>
        <h3>Restaurant</h3>
        <ul className="menu">
          {isAdmin ? (
            <>
            <li>
            <NavLink to="/dashboard/adminHome">
              <FaHome></FaHome> Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addItems">
              <FaUtensils></FaUtensils> Add Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageItems">
              <FaList></FaList> Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaBook></FaBook> Manage Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/users">
              <FaUsers></FaUsers> All Users
            </NavLink>
          </li></>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart> My Cart({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaAd></FaAd> Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaList></FaList> My Booking
                </NavLink>
              </li>
            </>
          )}
          {/* shared navlinks */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaBars></FaBars> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaShop></FaShop> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope></FaEnvelope> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
