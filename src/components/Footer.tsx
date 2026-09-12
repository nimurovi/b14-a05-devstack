import logo from '../assets/logo-text.png'

export default function Footer() {

    return (
        <>
            <div className='border-t-1  border-t-[#94A3B8] mt-20 mb-8 '>
                <div className=' container mx-auto p-4 mt-8 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4'>
                    <div className='grid justify-items-center md:justify-items-start text-[#475569] gap-5 col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2'>
                        <img src={logo} alt="logo bangla" />
                        <p className='text-center md:text-start'>Curated tools, technologies, and resources for developers building <br />
                            modern software.</p>
                        <ul className='flex mt-5 gap-4 font-bold'>
                            <li>Github</li>
                            <li>Twitter</li>
                            <li>Linkedin</li>
                        </ul>

                    </div>
                     


                        <div className='hidden md:grid text-[#475569] gap-2'>
                            <h1 className='font-bold'>PRODUCT</h1>
                            <p>Home</p>
                            <p>Technologies</p>
                            <p>Project</p>
                        </div>
                        <div className='hidden md:grid text-[#475569] gap-2'>
                            <h1 className='font-bold'>COMPANEY</h1>
                            <p>about</p>
                            <p>Contact</p>
                            <p>Careers</p>
                        </div>
                        <div className='hidden md:flex flex-col text-[#475569] gap-5'>
                            <h1 className='font-bold '>LEGAL</h1>
                            <p>Privacy policy</p>
                            <p>Terms of service</p>

                        </div>
                     
                </div>
                <div className='container mx-auto text-[#475569] p-4 mt-12  border-t-1  border-t-[#94A3B8] flex justify-between items-center'>
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className='flex gap-4'>
                        <p className='text-[#475569]'>Privecy</p>
                        <p>Terms</p>
                    </div>
                </div>

            </div>
        </>
    )
}