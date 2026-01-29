import React from 'react';
import { CiCircleInfo } from 'react-icons/ci';
import { FiCalendar } from 'react-icons/fi';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { LuCopy } from 'react-icons/lu';
import { NavLink } from 'react-router';

const Appointments = () => {
    return (
        <section className='m-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10'>
                <div className='p-6 bg-accent rounded-2xl border border-info'>
                    <div>
                        <p className='text-secondary text-sm'><span><FiCalendar className='text-xl mr-3 inline text-[#51A2FF]' /></span>Total Booked</p>
                    </div>
                    <h2 className='text-2xl mt-2 mb-2'>34</h2>
                    <p className='text-sm text-[#05df72]'>+8 this week</p>
                </div>
                <div className='p-6 bg-accent rounded-2xl border border-info'>
                    <div>
                        <p className='text-secondary text-sm'><span><IoMdCheckmarkCircleOutline className='text-xl mr-3 inline text-[#05df72]' /></span>Total Booked</p>
                    </div>
                    <h2 className='text-2xl mt-2 mb-2'>28</h2>
                    <p className='text-sm text-secondary'>82% of total</p>
                </div>
                <div className='p-6 bg-accent rounded-2xl border border-info'>
                    <div>
                        <p className='text-secondary text-sm'><span><CiCircleInfo className='text-xl mr-3 inline text-[#FDC700] rotate-180' /></span>Pending</p>
                    </div>
                    <h2 className='text-2xl mt-2 mb-2'>3</h2>
                    <p className='text-sm text-secondary'>Awaiting confirmation</p>
                </div>
            </div>

            <div className='bg-linear-to-b from-[#1a1a2e] to-[#16213e] p-6 mt-6 mb-8 rounded-2xl'>
                <p>Booking Link</p>
                <div className='mt-4 flex md:flex-row flex-col gap-3 items-center'>
                    <div className='w-full'>
                        <p className='bg-[#0a0a0f80] border border-[#00ff8833] px-4 py-3 rounded-[14px]'>https://techstore.com/book?id=store123</p>
                    </div>
                    <button className='flex items-center p-2 px-3 gap-4 active'>
                        <p><LuCopy className='text-3xl text-wrap' /></p>
                        <p className='text-nowrap'> Copy Link</p>
                    </button>
                </div>
            </div>

            {/* Table  */}
            <div className="overflow-x-auto rounded-box border border-info bg-accent">
                <table className="table text-center text-sm">
                    {/* head */}
                    <thead className='[&>tr>th]:border-b [&>tr>th]:border-info'>
                        <tr className='text-white'>
                            <th className='p-5.5'>Client Name</th>
                            <th>Client Phone</th>
                            <th>Client mail</th>
                            <th>Device</th>
                            <th>Repair Type</th>
                            <th>Date</th>
                            <th>Slot no</th>
                            <th>Start Time</th>
                        </tr>
                    </thead>
                    <tbody className='[&>tr>td]:border-b [&>tr>td]:border-info text-secondary'>
                        {/* row 1 */}
                        <tr className='border-b border-info'>
                            <td className='p-5.5'>Jane.D</td>
                            <td>01960685765</td>
                            <td className='text-white'>admin@gmail.com</td>
                            <td>Apple/Iphone 13pro</td>
                            <td>Screen</td>
                            <td>02/06/2026</td>
                            <td>1</td>
                            <td>09:00</td>
                        </tr>
                        <tr className='border-b border-info'>
                            <td className='p-5.5'>Jane.D</td>
                            <td>01960685765</td>
                            <td className='text-white'>admin@gmail.com</td>
                            <td>Apple/Iphone 13pro</td>
                            <td>Screen</td>
                            <td>02/06/2026</td>
                            <td>1</td>
                            <td>09:00</td>
                        </tr>
                        <tr className='border-b border-info'>
                            <td className='p-5.5'>Jane.D</td>
                            <td>01960685765</td>
                            <td className='text-white'>admin@gmail.com</td>
                            <td>Apple/Iphone 13pro</td>
                            <td>Screen</td>
                            <td>02/06/2026</td>
                            <td>1</td>
                            <td>09:00</td>
                        </tr>
                        <tr className='border-b border-info'>
                            <td className='p-5.5'>Jane.D</td>
                            <td>01960685765</td>
                            <td className='text-white'>admin@gmail.com</td>
                            <td>Apple/Iphone 13pro</td>
                            <td>Screen</td>
                            <td>02/06/2026</td>
                            <td>1</td>
                            <td>09:00</td>
                        </tr>
                        <tr className='border-b border-info'>
                            <td className='p-5.5'>Jane.D</td>
                            <td>01960685765</td>
                            <td className='text-white'>admin@gmail.com</td>
                            <td>Apple/Iphone 13pro</td>
                            <td>Screen</td>
                            <td>02/06/2026</td>
                            <td>1</td>
                            <td>09:00</td>
                        </tr>
                        <tr className='border-b border-info'>
                            <td className='p-5.5'>Jane.D</td>
                            <td>01960685765</td>
                            <td className='text-white'>admin@gmail.com</td>
                            <td>Apple/Iphone 13pro</td>
                            <td>Screen</td>
                            <td>02/06/2026</td>
                            <td>1</td>
                            <td>09:00</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='flex justify-center mt-11'>
                <div className="join text-[#0F62FE]">
                    <input
                        className="join-item btn btn-square bg-transparent border-none shadow-none text-[#697077] text-nowrap mr-5"
                        type="radio"
                        name="options"
                        aria-label="< Previous"
                        checked="checked" />
                    <input
                        className="join-item btn btn-square bg-transparent border-none shadow-none text-[#0F62FE]"
                        type="radio"
                        name="options"
                        aria-label="1"
                        checked="checked" />
                    <input className="join-item btn bg-[#a6c8ff] border-none" type="radio" name="options" aria-label="2" />
                    <input className="join-item btn btn-square bg-transparent border-none shadow-none text-[#0F62FE]" type="radio" name="options" aria-label="3" />
                    <input className="join-item btn btn-square bg-transparent border-none shadow-none text-[#0F62FE]" type="radio" name="options" aria-label="4" />
                    <input className="join-item btn btn-square bg-transparent border-none shadow-none text-[#0F62FE]" type="radio" name="options" aria-label="5" />
                    <input className="join-item btn btn-square bg-transparent border-none shadow-none text-[#0F62FE]" type="radio" name="options" aria-label=". . ." />
                    <input className="join-item btn btn-square bg-transparent border-none shadow-none text-[#0F62FE]" type="radio" name="options" aria-label="11" />
                    <input className="join-item btn btn-square bg-transparent border-none shadow-none text-[#0F62FE] text-nowrap" type="radio" name="options" aria-label="Next >" />
                </div>
            </div>
        </section>
    );
};

export default Appointments;