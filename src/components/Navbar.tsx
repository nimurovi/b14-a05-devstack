import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../assets/logo-text.png'
export default function Navbar() {

    return (
        <>
            <nav className='sticky top-0 z-50 bg-white border-b-2 border-gray-200'>
                <div className='container mx-auto  flex justify-between items-center p-4  '>
                     
                    <button className='lg:hidden'><GiHamburgerMenu /></button>
                    <img src={logo} alt="Logo" />

                    <ul className=' hidden  lg:flex gap-4 text-lg text-[#475569]'>
                        <li className='text-[#DB2777]'>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <div className='flex gap-2 md:gap-4'>
                        <button className='text-lg border-none p-2 text-[#475569]'>Sign In</button>
                        <button className='text-lg bg-[#D91B7E] text-white py-2 px-4  rounded-full'>Sign Up</button>
                    </div>
                </div>

            </nav>


        </>
    )
}