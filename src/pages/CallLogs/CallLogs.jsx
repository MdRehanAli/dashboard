import React from 'react';
import { FaRegClock } from 'react-icons/fa6';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { IoCallOutline } from 'react-icons/io5';

const CallLogs = () => {
    return (
        <section className='m-6'>
            <div className='p-6 bg-accent rounded-2xl border border-info'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='w-full flex-1'>
                        <label className="input bg-[#1D293D] rounded-[10px] border border-info outline-info mr-8 w-full">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" className="grow" placeholder="Search by phone number, issue type..." />
                        </label>
                    </div>
                    <div className='flex gap-5 justify-end'>
                        <div className='w-full md:w-fit'>
                            <select defaultValue="All Type" className="select bg-[#1D293D] rounded-[10px] border border-info outline-info mr-8 w-full">
                                <option disabled={true}>All Type</option>
                                <option>This Month</option>
                                <option>This Year</option>
                                <option>Today</option>
                            </select>
                        </div>
                        <div className='w-full md:w-fit'>
                            <select defaultValue="All Issues" className="select bg-[#1D293D] rounded-[10px] border border-info outline-info mr-8 w-full">
                                <option disabled={true}>All Issues</option>
                                <option>This Month</option>
                                <option>This Year</option>
                                <option>Today</option>
                            </select>
                        </div>
                        <div className='w-full md:w-fit'>
                            <select defaultValue="Today" className="select bg-[#1D293D] rounded-[10px] border border-info outline-info mr-8 w-full">
                                <option disabled={true}>Today</option>
                                <option>This week</option>
                                <option>This Month</option>
                                <option>This Year</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call List & Call Details */}
            <div className='flex flex-col md:flex-row gap-6 mt-6'>
                <div className='bg-accent rounded-2xl border border-info w-full'>
                    <div className='flex flex-col md:flex-row md:justify-start md:items-start justify-between items-center'>
                        <div className='w-full'>
                            <h2 className='text-xl border-b border-info py-4 pl-4'>Call List</h2>
                            <div className='mx-4 mt-4 mb-3'>
                                <div className='flex justify-between items-start'>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-fit p-2.5 bg-linear-to-b from-[#2B7FFF] to-[#00B8DB] rounded-[14px]'>
                                            <IoCallOutline className='text-2xl' />
                                        </div>
                                        <div>
                                            <p>+1 (555) 345-6789</p>
                                            <p className='text-secondary text-sm mt-1'>2025-12-16 • 09:42 AM</p>
                                        </div>
                                    </div>
                                    <div className='bg-[#00C9504D] w-fit rounded-[10px] border border-[#05DF72] px-3 py-1.25'>
                                        <p className='text-[#05DF72] text-xs'>AI Resolved</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 mt-4'>
                                    <div className='flex items-center gap-1 text-secondary flex-wrap text-sm'>
                                        <FaRegClock />
                                        <p>5:23</p>
                                    </div>
                                    <div className='flex items-center gap-1 text-secondary flex-wrap text-sm'>
                                        <IoMdCheckmarkCircleOutline />
                                        <p>Escalated to technician</p>
                                    </div>
                                    <div className='bg-[#2B7FFF33] w-fit rounded-sm px-2 py-1'>
                                        <p className='text-[#51A2FF] text-sm'>Screen</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-accent rounded-2xl border border-info w-full'>
                    <div className='flex flex-col md:flex-row md:justify-start md:items-start justify-between items-center'>
                        <div className='w-full'>
                            <h2 className='text-xl border-b border-info py-4 pl-4'>Call Details</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallLogs;