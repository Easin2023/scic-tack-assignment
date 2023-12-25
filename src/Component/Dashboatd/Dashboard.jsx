import React from "react";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-4">
          <Link to="/dashboard/addTodo">
            <li className="btn w-2/3 mb-2">Add Todo</li>
          </Link>
          <Link to="/dashboard/seeTodo">
            <li className="btn w-2/3 mb-2">Todo</li>
          </Link>
          <Link to="/dashboard/TackComplete">
            <li className="btn w-2/3 mb-2">complete</li>
          </Link>
          <Link to="/">
            <li className="btn w-2/3 mb-2">Home</li>
          </Link>
        </div>
        <div className="col-span-8">
          <Outlet />
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
