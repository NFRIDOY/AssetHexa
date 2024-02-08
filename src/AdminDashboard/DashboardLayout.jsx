import { Link, NavLink, Outlet } from "react-router-dom";
import home from "../assets/logo/logo.png";
import money from "../lottie/Animation - 1706022352528.json";
import Lottie from "lottie-react";
import { MdOutlineDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import { ImBlog } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";

import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import { IoMdBusiness } from "react-icons/io";
const DashboardLayout = () => {
    return (
        <div>

<div className=" h-screen bg-base-300">
      <div className="drawer lg:drawer-open  mx-auto bg-white  rounded-2xl min-h-[calc(100vh-32px)]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col   ">
          {/* Page content here */}
          <div className="lg:ml-10 ">
            <Outlet></Outlet>
          </div>
          <label
            htmlFor="my-drawer-2"
            className=" absolute top-0  justify-start flex w-20 mx-auto  drawer-button lg:hidden"
          >
            <AiOutlineMenu className="text-2xl m-4 "></AiOutlineMenu>
          </label>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <div className="w-60 h-screen bg-white justify-center  flex flex-col ">
            <div>
              <div className="w-48  rounded-lg lg:mt-3">
                <figure>
                  <Link to="/">
                    <img src={home} alt="" />
                  </Link>
                </figure>
              </div>
              <ul className="menu text-lg  space-y-2 h-[380px]  rounded-lg mt-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-black flex px-4 gap-3 items-center bg-[#00EC25] p-2 rounded-xl  pr-4"
                      : "flex px-4 p-2 items-center mr-4 gap-3"
                  }
                  to="/AdminDashboard/AdminOverview"
                >
                  <MdOutlineDashboard /> Overview
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-black flex px-4 gap-3 items-center bg-[#00EC25] p-2 rounded-xl  pr-4"
                      : "flex px-4 p-2 items-center mr-4 gap-3"
                  }
                  to="/AdminDashboard/BusinessVerification"
                >
                  <IoMdBusiness />
                  Verify Business
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-black flex px-4 gap-3 items-center bg-[#00EC25] p-2 rounded-xl  pr-4"
                      : "flex px-4 p-2 items-center mr-4 gap-3"
                  }
                  to="/AdminDashboard/userVerification"
                >
                  <FaUserAlt />
                  verify User
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-black flex px-4 gap-3 items-center bg-[#00EC25] p-2 rounded-xl  pr-4"
                      : "flex px-4 p-2 items-center mr-4 gap-3"
                  }
                  to="/AdminDashboard/BlogVerification"
                >
                  <ImBlog />
                  verify Blogs
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-black flex px-4 gap-3 items-center bg-[#00EC25] p-2 rounded-xl  pr-4"
                      : "flex px-4 p-2 items-center mr-4 gap-3"
                  }
                  to="/dashboard/addBlog"
                >
                  <CgProfile />
                  Add Blog
                </NavLink>
               
                {/* <NavLink
									className={({ isActive }) =>
										isActive
											? "text-black flex px-4 gap-3 items-center bg-[#00EC25] p-2 rounded-xl  pr-4"
											: "flex px-4 p-2 items-center mr-4 gap-3"
									}
									to="/dashboard/addBlog"
								>
									<MdOutlineDashboard /> Add Blog
								</NavLink> */}
              </ul>
            </div>

            <div className="p-2  rounded-lg mt-4">
              <div className="mx-auto ">
                <Lottie
                  className=" w-[150px] md:[w-150px] lg:w-[180px]"
                  animationData={money}
                  loop={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>        </div>
    );
};

export default DashboardLayout;