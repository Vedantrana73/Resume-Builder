import { NavLink, useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/Builder.png'
import { BiHome, BiPlus, BiUser } from 'react-icons/bi'
import '../App.css'
function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div className="fixed top-0 left-0 bg-white navbar px-3">
            <div>
                <img src={logo} alt="" className='w-16 h-16 md:w-20 md:h-20 lg:h-20 lg:w-24 cursor-pointer px-1' />
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost text-2xl md:text-3xl">Resume Builder</a>
            </div>

            {/* //Hidden For Small Device */}
            <div className="hidden lg:flex justify-between gap-6">
                <div className='cursor-pointer'>
                    <div className='space-x-3'>
                        <NavLink to='/' className={({ isActive }) => `text-lg btn btn-ghost ${isActive ? 'link-success' : 'link-neutral'}`}>
                            Home
                        </NavLink>

                        <NavLink to='/templates' className={({ isActive }) => `text-lg btn btn-ghost ${isActive ? 'link-success' : 'link-neutral'}`}>
                            Templates
                        </NavLink>

                        <NavLink to='/contact-us' className={({ isActive }) => `text-lg btn btn-ghost ${isActive ? 'link-success' : 'link-neutral'}`}>
                            Contact Us
                        </NavLink>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <BiUser size={44} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
                        <li>
                            <NavLink to='/profile' className={({ isActive }) => `${isActive ? 'link-success' : 'link-neutral'}`}>
                                Profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/settings' className={({ isActive }) => `${isActive ? 'link-success' : 'link-neutral'}`}>
                                Settings
                            </NavLink>
                        </li>
                        <li>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* For Small Devices */}
            <div className="fixed bottom-0 bg-white z-auto lg:hidden btm-nav ">
                <button className={`${location.pathname==='/'?'active':''} text-2xl  md:text-3xl `} onClick={()=>navigate('/')}>
                    <BiHome />
                </button>
                <button className={`${location.pathname==='/templates'?'active':''} text-2xl md:text-3xl bg-white`} onClick={()=>navigate('/templates')}>
                    <BiPlus/>
                </button>
                <button className={`${location.pathname==='/profile'?'active':''} text-2xl md:text-3xl`} onClick={()=>navigate('/profile')}>
                    <BiUser />
                </button>
            </div>
        </div>
    )
}

export default Navbar
