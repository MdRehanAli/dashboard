import React from 'react';
import { FaArrowRightArrowLeft, FaRegClock } from 'react-icons/fa6';
import { FiCalendar } from 'react-icons/fi';
import { GiCancel } from 'react-icons/gi';
import { IoCallOutline } from 'react-icons/io5';
import { LiaRobotSolid } from 'react-icons/lia';
import CallTrends from './CallTrends/CallTrends';
import AllActivity from './AllActivity/AllActivity';

const DashboardOverview = () => {
    return (
        <section className='m-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='flex justify-between items-start p-6 bg-accent rounded-2xl border border-info'>
                    <div>
                        <p className='text-secondary text-sm'>Total Calls Today</p>
                        <h2 className='text-[30px] mt-2 mb-4'>127</h2>
                        <p className='text-sm text-[#05df72]'>+12%</p>
                    </div>
                    <div className='w-fit p-3 bg-linear-to-b from-[#2B7FFF] to-[#00B8DB] rounded-[14px]'>
                        <IoCallOutline className='text-2xl'/>
                    </div>
                </div>
                <div className='flex justify-between items-start p-6 bg-accent rounded-2xl border border-info'>
                    <div>
                        <p className='text-secondary text-sm'>AI-Handled Calls</p>
                        <h2 className='text-[30px] mt-2 mb-4'>98</h2>
                        <p className='text-sm text-[#05df72]'>+77%</p>
                    </div>
                    <div className='w-fit p-3 bg-linear-to-b from-[#AD46FF] to-[#F6339A] rounded-[14px]'>
                        <LiaRobotSolid className='text-2xl'/>
                    </div>
                </div>
                <div className='flex justify-between items-start p-6 bg-accent rounded-2xl border border-info'>
                    <div>
                        <p className='text-secondary text-sm'>Warm Transfer</p>
                        <h2 className='text-[30px] mt-2 mb-4'>23</h2>
                        <p className='text-sm text-[#05df72]'>+18%</p>
                    </div>
                    <div className='w-fit p-3 bg-linear-to-b from-[#FF6900] to-[#FB2C36] rounded-[14px]'>
                        <FaArrowRightArrowLeft className='text-2xl'/>
                    </div>
                </div>
                <div className='flex justify-between items-start p-6 bg-accent rounded-2xl border border-info'>
                    <div>
                        <p className='text-secondary text-sm'>Appointments Booked</p>
                        <h2 className='text-[30px] mt-2 mb-4'>34</h2>
                        <p className='text-sm text-[#05df72]'>+8%</p>
                    </div>
                    <div className='w-fit p-3 bg-linear-to-b from-[#00C950] to-[#00BC7D] rounded-[14px]'>
                        <FiCalendar className='text-2xl'/>
                    </div>
                </div>
                <div className='flex justify-between items-start p-6 bg-accent rounded-2xl border border-info'>
                    <div>
                        <p className='text-secondary text-sm'>Missed/Failed Calls</p>
                        <h2 className='text-[30px] mt-2 mb-4'>6</h2>
                        <p className='text-sm text-[#fd244a]'>-3%</p>
                    </div>
                    <div className='w-fit p-3 bg-linear-to-b from-[#FB2C36] to-[#FF2056] rounded-[14px]'>
                        <GiCancel className='text-2xl'/>
                    </div>
                </div>
                <div className='flex justify-between items-start p-6 bg-accent rounded-2xl border border-info'>
                    <div>
                        <p className='text-secondary text-sm'>Avg Call Duration</p>
                        <h2 className='text-[30px] mt-2 mb-4'>3:42</h2>
                        <p className='text-sm text-[#05df72]'>+15%</p>
                    </div>
                    <div className='w-fit p-3 bg-linear-to-b from-[#615FFF] to-[#2B7FFF] rounded-[14px]'>
                        <FaRegClock className='text-2xl'/>
                    </div>
                </div>
            </div>

            <CallTrends></CallTrends>

            <AllActivity></AllActivity>
        </section>
    );
};

export default DashboardOverview;