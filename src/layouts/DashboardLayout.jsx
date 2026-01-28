import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoCallOutline, IoHomeSharp } from 'react-icons/io5';
import { FiCalendar } from 'react-icons/fi';
import { LuSettings } from 'react-icons/lu';
import { SlEnergy } from 'react-icons/sl';

const DashboardLayout = () => {
    const location = useLocation();

    const title = {
        "/": "Dashboard Overview",
        "/call-logs": "Call Logs",
        "/appointments": "Appointments",
        "/settings": "Settings"
    }
    const DynamicTitle = title[location.pathname];

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <nav className="navbar w-full bg-accent">
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        {/* Sidebar toggle icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className=" inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                    </label>
                    <div className='flex justify-between items-center w-full'>
                        <div className="px-4">{DynamicTitle}</div>
                        <div className='flex items-center gap-10'>
                            <div className=''><IoMdNotificationsOutline className='text-[32px]' />
                            </div>
                            <img className='w-20 h-20 rounded-full'
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                </nav>
                {/* Page content here */}
                <Outlet></Outlet>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-accent is-drawer-close:w-18 is-drawer-open:w-64">
                    <div className='flex items-center justify-center mt-9.5 mb-17.5 w-full'>
                        <div style={{ background: 'linear-gradient(180deg, rgba(0,255,136,1), rgba(0,212,255,1) 100%)' }} className=' p-3 rounded-[14px]'>
                            <SlEnergy className=' text-[32px] text-[#0A0A0F]' />
                        </div>
                    </div>
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow gap-7">
                        {/* List item */}
                        <li>
                            <NavLink to="/" className="is-drawer-close:tooltip is-drawer-close:tooltip-right items-center gap-4" data-tip="Homepage">
                                {/* Home icon */}
                                <IoHomeSharp className=" inline-block text-[32px]" />
                                <span className="font-medium is-drawer-close:hidden">Dashboard Overview</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/call-logs" className="is-drawer-close:tooltip is-drawer-close:tooltip-right items-center gap-4" data-tip="Homepage">
                                {/* Home icon */}
                                <IoCallOutline className=" inline-block text-[32px]" />
                                <span className="font-medium is-drawer-close:hidden">Call Logs</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/appointments" className="is-drawer-close:tooltip is-drawer-close:tooltip-right items-center gap-4" data-tip="Homepage">
                                {/* Home icon */}
                                <FiCalendar className=" inline-block text-[32px]" />
                                <span className="font-medium is-drawer-close:hidden">Appointments</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/settings" className="is-drawer-close:tooltip is-drawer-close:tooltip-right items-center gap-4" data-tip="Homepage">
                                {/* Home icon */}
                                <LuSettings className=" inline-block text-[32px]" />
                                <span className="font-medium is-drawer-close:hidden">Settings</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;