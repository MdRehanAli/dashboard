import React from 'react';
import { FaRegClock } from 'react-icons/fa6';
import { FiPlayCircle } from 'react-icons/fi';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { IoCallOutline, IoDocumentTextOutline } from 'react-icons/io5';

const CallLogs = () => {
    return (
        <section className='m-6'>
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
                            <option>AI Resolved</option>
                            <option>Appointment</option>
                            <option>Dropped</option>
                        </select>
                    </div>
                    <div className='w-full md:w-fit'>
                        <select defaultValue="All Issues" className="select bg-[#1D293D] rounded-[10px] border border-info outline-info mr-8 w-full">
                            <option disabled={true}>All Issues</option>
                            <option>Software</option>
                            <option>Screen</option>
                            <option>Battery</option>
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

            {/* Call List & Call Details */}
            {/* Call List */}
            <div className='flex flex-col md:flex-row items-start gap-6 mt-6'>
                <div className='bg-accent rounded-2xl border border-info w-full'>
                    <div className='flex flex-col md:flex-row md:justify-start md:items-start justify-between items-center'>
                        <div className='w-full'>
                            <h2 className='text-xl border-b border-info pt-4 pl-4'>Call List</h2>


                            <div className='border-b border-info'>
                                <div className='flex justify-between items-start mx-4 mt-4 mb-3 flex-wrap '>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-fit p-2.5 bg-linear-to-b from-[#2B7FFF] to-[#00B8DB] rounded-[14px]'>
                                            <IoCallOutline className='text-2xl' />
                                        </div>
                                        <div>
                                            <p className='text-lg'>+1 (555) 345-6789</p>
                                            <p className='text-secondary text-sm mt-1'>2025-12-16 • 09:42 AM</p>
                                        </div>
                                    </div>
                                    <div className='bg-linear-to-r from-[#00c95033] to-[#00bc7d33] w-fit rounded-[10px] border border-[#00c9504d] px-3 py-1.25'>
                                        <p className='text-[#05DF72] text-xs'>AI Resolved</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 mt-4 flex-wrap  mx-4 mb-3 '>
                                    <div className='flex items-center gap-1 text-secondary text-sm'>
                                        <FaRegClock />
                                        <p>5:23</p>
                                    </div>
                                    <div className='flex items-center gap-1 text-secondary text-sm'>
                                        <IoMdCheckmarkCircleOutline />
                                        <p>Quote Provided</p>
                                    </div>
                                    <div className='bg-[#2B7FFF33] w-fit rounded-sm px-2 py-1'>
                                        <p className='text-[#51A2FF] text-sm'>Screen</p>
                                    </div>
                                </div>
                            </div>

                            <div className='border-b border-info'>
                                <div className='flex justify-between items-start mx-4 mt-4 mb-3 flex-wrap '>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-fit p-2.5 bg-linear-to-b from-[#2B7FFF] to-[#00B8DB] rounded-[14px]'>
                                            <IoCallOutline className='text-2xl' />
                                        </div>
                                        <div>
                                            <p className='text-lg'>+1 (555) 345-6789</p>
                                            <p className='text-secondary text-sm mt-1'>2025-12-16 • 09:42 AM</p>
                                        </div>
                                    </div>
                                    <div className='bg-linear-to-r from-[#ff690033] to-[#fb2c3633] w-fit rounded-[10px] border border-[#fb2c3633] px-3 py-1.25'>
                                        <p className='text-[#FF8904] text-xs'>Warm Transfer</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 mt-4 flex-wrap  mx-4 mb-3 '>
                                    <div className='flex items-center gap-1 text-secondary text-sm'>
                                        <FaRegClock />
                                        <p>5:23</p>
                                    </div>
                                    <div className='flex items-center gap-1 text-secondary text-sm'>
                                        <IoMdCheckmarkCircleOutline />
                                        <p>Escalated to technician</p>
                                    </div>
                                    <div className='bg-[#2B7FFF33] w-fit rounded-sm px-2 py-1'>
                                        <p className='text-[#51A2FF] text-sm'>Software</p>
                                    </div>
                                </div>
                            </div>


                            <div className='border-b border-info'>
                                <div className='flex justify-between items-start mx-4 mt-4 mb-3 flex-wrap '>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-fit p-2.5 bg-linear-to-b from-[#2B7FFF] to-[#00B8DB] rounded-[14px]'>
                                            <IoCallOutline className='text-2xl' />
                                        </div>
                                        <div>
                                            <p className='text-lg'>+1 (555) 345-6789</p>
                                            <p className='text-secondary text-sm mt-1'>2025-12-16 • 09:42 AM</p>
                                        </div>
                                    </div>
                                    <div className='bg-linear-to-r from-[#2b7fff33] to-[#00B8DB33] w-fit rounded-[10px] border border-[#2B7FFF4D] px-3 py-1.25'>
                                        <p className='text-[#51A2FF] text-xs'>Appointment</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 mt-4 flex-wrap  mx-4 mb-3 '>
                                    <div className='flex items-center gap-1 text-secondary text-sm'>
                                        <FaRegClock />
                                        <p>5:23</p>
                                    </div>
                                    <div className='flex items-center gap-1 text-secondary text-sm'>
                                        <IoMdCheckmarkCircleOutline />
                                        <p>Appointment Booked</p>
                                    </div>
                                    <div className='bg-[#2B7FFF33] w-fit rounded-sm px-2 py-1'>
                                        <p className='text-[#51A2FF] text-sm'>Battery</p>
                                    </div>
                                </div>
                            </div>


                            <div className='border-b border-info'>
                                <div className='flex justify-between items-start mx-4 mt-4 mb-3 flex-wrap '>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-fit p-2.5 bg-linear-to-b from-[#2B7FFF] to-[#00B8DB] rounded-[14px]'>
                                            <IoCallOutline className='text-2xl' />
                                        </div>
                                        <div>
                                            <p className='text-lg'>+1 (555) 345-6789</p>
                                            <p className='text-secondary text-sm mt-1'>2025-12-16 • 09:42 AM</p>
                                        </div>
                                    </div>
                                    <div className='bg-linear-to-r from-[#FF150033] to-[#FB2C3633] w-fit rounded-[10px] border border-[#FF69004D] px-3 py-1.25'>
                                        <p className='text-[#FF0404] text-xs'>Dropped</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 mt-4 flex-wrap  mx-4 mb-3 '>
                                    <div className='flex items-center gap-1 text-secondary text-sm'>
                                        <FaRegClock />
                                        <p>5:23</p>
                                    </div>
                                    <div className='flex items-center gap-1 text-secondary text-sm'>
                                        <IoMdCheckmarkCircleOutline />
                                        <p>Call Dropped</p>
                                    </div>
                                    <div className='bg-[#2B7FFF33] w-fit rounded-sm px-2 py-1'>
                                        <p className='text-[#51A2FF] text-sm'>Unknown</p>
                                    </div>
                                </div>
                            </div>

                            <div className='border-b border-info'>
                                <div className='flex justify-between items-start mx-4 mt-4 mb-3 flex-wrap '>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-fit p-2.5 bg-linear-to-b from-[#2B7FFF] to-[#00B8DB] rounded-[14px]'>
                                            <IoCallOutline className='text-2xl' />
                                        </div>
                                        <div>
                                            <p className='text-lg'>+1 (555) 345-6789</p>
                                            <p className='text-secondary text-sm mt-1'>2025-12-16 • 09:42 AM</p>
                                        </div>
                                    </div>
                                    <div className='bg-linear-to-r from-[#00c95033] to-[#00bc7d33] w-fit rounded-[10px] border border-[#00c9504d] px-3 py-1.25'>
                                        <p className='text-[#05DF72] text-xs'>AI Resolved</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 mt-4 flex-wrap  mx-4 mb-3 '>
                                    <div className='flex items-center gap-1 text-secondary text-sm'>
                                        <FaRegClock />
                                        <p>5:23</p>
                                    </div>
                                    <div className='flex items-center gap-1 text-secondary text-sm'>
                                        <IoMdCheckmarkCircleOutline />
                                        <p>Quote Provided</p>
                                    </div>
                                    <div className='bg-[#2B7FFF33] w-fit rounded-sm px-2 py-1'>
                                        <p className='text-[#51A2FF] text-sm'>Screen</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Call Details  */}
                <div className='bg-accent rounded-2xl border border-info w-full'>
                    <div className=''>
                        <h2 className='text-xl border-b border-info py-4 pl-4'>Call Details</h2>
                        <div className='p-6'>

                            <div className=''>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div>
                                        <p className='text-secondary text-sm mb-1'>Phone Number</p>
                                        <p className='text-lg'>+1 (555) 345-6789</p>
                                    </div>
                                    <div>
                                        <p className='text-secondary text-sm mb-1'>Duration</p>
                                        <p className='text-lg'>4:32</p>
                                    </div>
                                    <div>
                                        <p className='text-secondary text-sm mb-1'>Date & Time</p>
                                        <p className='text-lg'>2025-12-16 10:45 AM</p>
                                    </div>
                                    <div>
                                        <p className='text-secondary text-sm mb-1'>Issue Type</p>
                                        <p className='text-lg'>Screen</p>
                                    </div>
                                </div>
                                <div className='my-6'>
                                    <p className='text-secondary text-sm mb-1'>Call Type</p>
                                    <div className='bg-linear-to-r from-[#00c95033] to-[#00bc7d33] w-fit rounded-[10px] border border-[#00c9504d] px-3 py-1.25'>
                                        <p className='text-[#05DF72] text-sm'>AI Resolved</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-secondary text-sm mb-1'>Outcome</p>
                                    <p className=''>Quote provided</p>
                                </div>
                            </div>

                            <div>
                                <button className='p-4 w-full bg-linear-to-r from-[#ad46ff33] to-[#f6339a33] text-[#c27aff] rounded-[14px] my-6 flex justify-center items-center'>
                                    <span className='mr-2'><FiPlayCircle /></span>
                                    <span className=''>Play Audio Recording</span>
                                </button>
                                <div className='flex items-center gap-2 flex-wrap mb-3'>
                                    <IoDocumentTextOutline className='text-[#51A2FF] text-xl' />
                                    <p>Conversation Transcript</p>
                                </div>
                                <div className='p-4 bg-[#1d293d80] rounded-[14px] text-xs'>
                                    <div className=''>
                                        <p className='text-[#05DF72] mb-1 text-sm'>AI Assistant:</p>
                                        <p>Thank you for calling UBreakiFix! How can I help you today?</p>
                                    </div>
                                    <div className='mt-3'>
                                        <p className='text-[#51a2ff] mb-1 text-sm'>Customer:</p>
                                        <p>Hi, my iPhone 13 screen is cracked. How much would it cost to repair?</p>
                                    </div>
                                    <div className='mt-3'>
                                        <p className='text-[#05DF72] mb-1 text-sm'>AI Assistant:</p>
                                        <p>I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?</p>
                                    </div>
                                    <div className='mt-3'>
                                        <p className='text-[#51a2ff] mb-1 text-sm'>Customer:</p>
                                        <p>Yes, please! When are you available?</p>
                                    </div>
                                    <div className='mt-3'>
                                        <p className='text-[#05DF72] mb-1 text-sm'>AI Assistant:</p>
                                        <p>Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallLogs;