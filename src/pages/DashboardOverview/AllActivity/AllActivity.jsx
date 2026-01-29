import React from 'react';

const AllActivity = () => {
    return (
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-6 my-6'>
            <div className='flex justify-between items-start p-6 bg-accent rounded-2xl border border-info'>
                <div className='w-full'>
                    <h2 className='text-xl'>Recent Activity</h2>
                    <div className='mt-4 mb-2 bg-[#1d293d80] p-3 rounded-[10px]'>
                        <div className='flex items-start gap-3'>
                            <div className='w-2 h-2 rounded-full bg-[#05df72] mt-2'></div>
                            <div>
                                <p className='text-sm'>AI booked appointment for iPhone 13 screen repair</p>
                                <p className='text-xs text-[#7a8ba4]'>2 min ago</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 mb-2 bg-[#1d293d80] p-3 rounded-[10px]'>
                        <div className='flex items-start gap-3'>
                            <div className='w-2 h-2 rounded-full bg-[#ff8904] mt-2'></div>
                            <div>
                                <p className='text-sm'>Warm transfer to technician - Software issue</p>
                                <p className='text-xs text-[#7a8ba4]'>5 min ago</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 mb-2 bg-[#1d293d80] p-3 rounded-[10px]'>
                        <div className='flex items-start gap-3'>
                            <div className='w-2 h-2 rounded-full bg-[#05df72] mt-2'></div>
                            <div>
                                <p className='text-sm'>Quote provided for iPad battery replacement</p>
                                <p className='text-xs text-[#7a8ba4]'>8 min ago</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 mb-2 bg-[#1d293d80] p-3 rounded-[10px]'>
                        <div className='flex items-start gap-3'>
                            <div className='w-2 h-2 rounded-full bg-[#ff6467] mt-2'></div>
                            <div>
                                <p className='text-sm'>Call dropped after 12 seconds</p>
                                <p className='text-xs text-[#7a8ba4]'>15 min ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-start p-6 bg-accent rounded-2xl border border-info'>
                <div className='w-full'>
                    <h2 className='text-xl'>Top Repair Requests</h2>

                    <div className='mt-4 mb-2'>
                        <div className='flex justify-between items-center '>
                            <p>Screen Repair</p>
                            <p className='text-[#C0CCDD]'>156 requests</p>
                        </div>
                        <progress className="progress progress-gradient w-full" value="156" max="200"></progress>
                    </div>
                    <div className='mt-3 mb-2'>
                        <div className='flex justify-between items-center '>
                            <p>Battery Replacement</p>
                            <p className='text-[#C0CCDD]'>89 requests</p>
                        </div>
                        <progress className="progress progress-gradient w-full" value="89" max="200"></progress>
                    </div>
                    <div className='mt-3 mb-2'>
                        <div className='flex justify-between items-center '>
                            <p>Back Glass Repair</p>
                            <p className='text-[#C0CCDD]'>67 requests</p>
                        </div>
                        <progress className="progress progress-gradient w-full" value="67" max="200"></progress>
                    </div>
                    <div className='mt-3 mb-2'>
                        <div className='flex justify-between items-center '>
                            <p>Software Issues</p>
                            <p className='text-[#C0CCDD]'>45 requests</p>
                        </div>
                        <progress className="progress progress-gradient w-full" value="45" max="200"></progress>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllActivity;