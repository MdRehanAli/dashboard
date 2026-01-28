import React from 'react';

const AllActivity = () => {
    return (
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-6 my-6'>
            <div className='flex justify-between items-start p-6 bg-accent rounded-2xl border border-info'>
                <div>
                    <h2 className='text-xl'>Recent Activity</h2>
                </div>
            </div>
            <div className='flex justify-between items-start p-6 bg-accent rounded-2xl border border-info'>
                <div>
                    <h2 className='text-xl'>Top Repair Requests</h2>
                </div>
            </div>
        </section>
    );
};

export default AllActivity;