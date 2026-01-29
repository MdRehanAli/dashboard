import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router';

const Profile = () => {
    return (
        <section className='m-6'>
            <div className='flex gap-16 border-b border-info pb-4 md:text-2xl'>
                <Link>Profile</Link>
                <Link>Password Settings</Link>
            </div>
            <div className='mt-10 text-xl'>
                <p>Profile Image</p>
                <div className='flex items-end gap-2 relative'>
                    <img className='w-25.5 rounded-full mt-4'
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />

                    <Link to="" className='p-2 bg-[#7aa3cc] rounded-lg absolute w-fit left-18 -bottom-2'><FiEdit /></Link>
                </div>

                <div className='mt-14'>
                    <form className="card-body p-0">
                        <fieldset className="fieldset flex flex-col md:flex-row md:gap-14">
                            <div className='flex-1'>
                                <label className="label mb-2">Full Name</label>
                                <input type="email" className="input w-full bg-[#0a0a0f80] border border-[#00ff8833] outline-[#00ff8833] rounded-[14px]" placeholder="Store Name" />
                                <label className="label mb-2 mt-6">Store Name</label>
                                <input type="password" className="input w-full bg-[#0a0a0f80] border border-[#00ff8833] outline-[#00ff8833] rounded-[14px]" placeholder="Ubreakfix Store" />
                            </div>
                            <div className='flex-1'>
                                <label className="label mb-2">Email</label>
                                <input type="email" className="input w-full bg-[#0a0a0f80] border border-[#00ff8833] outline-[#00ff8833] rounded-[14px]" placeholder="jane@gmail.com" />
                                <label className="label mb-2 mt-6">Store Address</label>
                                <input type="password" className="input w-full bg-[#0a0a0f80] border border-[#00ff8833] outline-[#00ff8833] rounded-[14px]" placeholder="123 Main Street, New York" />
                            </div>

                        </fieldset>
                        <button className="btn bg-[#00C950] border-none text-white mt-20 w-full md:w-1/2 mx-auto shadow-none rounded-2xl text-2xl py-6">Save</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Profile;