import React from 'react';
import { FaHome, FaList, FaPlus } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="container mx-auto">
            <div className="flex md:flex-row flex-col">
                <div className="bg-purple-600 w-full md:w-1/5 h-screen md:sticky md:top-0 md:left-0">
                    <ul className="menu text-white">

                        
                            <>
                                <li><NavLink to='/dashboard/userProfile'>
                                    <FaHome></FaHome>
                                    My Profile
                                </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/addTask'>
                                        <FaPlus></FaPlus>
                                        Add Task
                                    </NavLink>
                                </li>
                                <li><NavLink to='/dashboard/myTasks'>
                                    <FaList></FaList>
                                    My Tasks
                                </NavLink>
                                </li>
                            </>
                        

                        {/* shared */}
                        <div className='divider'></div>
                        <li><NavLink to='/'>
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                        </li>

                        
                    </ul>
                </div>
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;