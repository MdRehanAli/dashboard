import React from 'react';
import { Link } from 'react-router';

const Settings = () => {
    return (
        <section className='m-6'>
            <div className='flex gap-16 border-b border-info pb-4 md:text-2xl'>
                <Link to="/settings/profile">Profile</Link>
                <Link>Password Settings</Link>
            </div>
            <div className='mt-10 text-xl'>
                <p>Profile Image</p>
                <div className='flex items-end gap-2'>
                    <img className='w-25.5 rounded-full mt-4'
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />

                    <Link to="/settings/profile" className='px-3 py-2 active text-white text-xs'>Edit Profile</Link>
                </div>

                <div className="overflow-x-auto rounded-box mt-10">
                    <table className="table text-sm md:w-1/3 text-white">
                        <tbody className='[&>tr>td]:border-b [&>tr>td]:border-info'>
                            {/* row 1 */}
                            <tr className='border-b border-info'>
                                <td className='py-5.5'>Full Name:</td>
                                <td>Jane D.</td>
                            </tr>
                            <tr className='border-b border-info'>
                                <td className='py-5.5'>Email:</td>
                                <td>jane@gmail.com</td>
                            </tr>
                            <tr className='border-b border-info'>
                                <td className='py-5.5'>Store Name:</td>
                                <td>Ubreakfix Store</td>
                            </tr>
                            <tr className='border-b border-info'>
                                <td className='py-5.5'>Store Address:</td>
                                <td>123 Main Street, New York, NY 10001</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Settings;