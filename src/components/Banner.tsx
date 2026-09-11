
import bannerImg from '../assets/banner-stack.png'
export default function Banner() {

    return (
        <>
            <div className='container mx-auto grid grid-cols-2 gap-4 justify-between items-center p-4 mt-8'>
                <div className='flex flex-col gap-10'>
                    <h1 className='text-3xl font-extrabold'>Build Your Ideal <br />
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Development Stack</span> </h1>
                    <p className='text-lg text-[#475569]'>Explore frontend, backend, database, and tooling options, <br />
                        compare them side by side, and put together the stack that fits your <br/>
                        next project.</p>
                    <div className='flex gap-4'>
                        <button className='w-[170px] h-[42px] bg-gradient-to-r text-white from-pink-500 to-violet-500   rounded-md mt-4'>Explore Technologies</button>
                        <button className='w-[170px] h-[42px] text-[#475569] border border-gray-300 rounded-md mt-4'>Learn More</button>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={bannerImg} alt="Banner" />
                </div>
            </div>
        </>
    )
}