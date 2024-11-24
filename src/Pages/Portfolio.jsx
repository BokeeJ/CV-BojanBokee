

function Portfolio() {
    return (
        <div className="bg-[url('/tastatura.webp')] bg-cover bg-center  flex flex-col  relative">
            <div className='relative m-10'>

                <h1 className='text-[30px] text-white font-bokor ml-10 '>Portfolio</h1>
                <hr className='border-blue-600 mt-2 w-[60%] absolute ml-10' />


            </div>
            <div className='flex justify-center mt-10'>
                <img className='p-5 w-[80%] lg:w-[60%] rounded-4xl' src="/ZekaCV.webp" alt="Portfolio" />
            </div>
        </div>
    )
}

export default Portfolio