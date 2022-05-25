import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section>
        <Helmet>
            <title>Dashboard - Milburn Tools</title>
        </Helmet>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            <h1 className="text-3xl font-bold text-red-600">Your Dashboard</h1>
          <Outlet></Outlet>
          <label
            for="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open Dashboard
          </label>
        </div>
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <Link to='/dashboard'>My Orders</Link>
            </li>
            <li>
              <Link to='addreview'>Add a review</Link>
            </li>
            <li>
              <Link to='myprofile'>My Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
