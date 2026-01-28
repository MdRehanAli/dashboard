import React from 'react';

const CallTrends = () => {
    return (
        <section className='my-6'>
            <div className='p-6 bg-accent rounded-2xl border border-info'>
                <div className='flex flex-col md:flex-row md:justify-start md:items-start justify-between items-center'>
                    <div className='w-full'>
                        <h2 className='text-xl'>Call Trends - This Week</h2>
                        <p className='text-secondary text-sm mt-1 mb-6'>Total: 472 calls</p>
                    </div>
                    <div className='w-full md:w-fit'>
                        <select defaultValue="This week" className="select bg-[#1D293D] rounded-[10px] border border-info outline-info md:mr-4 w-full md:w-fit">
                            <option disabled={true}>This week</option>
                            <option>This Month</option>
                            <option>This Year</option>
                            <option>Today</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallTrends;