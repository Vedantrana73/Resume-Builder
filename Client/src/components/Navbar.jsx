import logo from '../assets/Builder.png'
import { BiUser } from 'react-icons/bi'

function Navbar() {
  return (
    <nav className='flex border border-black justify-between px-4 py-1 w-screen'>
        <div className='flex items-center space-x-2'>
            <div className=''>
                <img src={logo} alt="" className='h-20 w-20'/>
            </div>  
            <div className='font-serif text-3xl font-semibold'>
                Resume Builder
            </div>
        </div>
        <div className='flex items-center w-1/3 text-lg'>
            <ul className='flex justify-between  items-center w-full'>
                <li>Home</li>
                <li>About Us</li>
                <li className='border-2 border-black flex items-center justify-center rounded-full text-black'><BiUser size={44}/></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
