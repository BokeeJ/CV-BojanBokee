import React from 'react'

function Project() {
    return (
        <div className='bg-black p-5'>
            <div className='ml-20'>
                <h2 className='text-blue-600'>#Must See</h2>
                <h1 className='text-2xl text-white'>Projects</h1>
                <hr className='border-blue-600 mt-2 w-[60%]' />
            </div>
            <div className='flex justify-between mt-5 m-5 lg:flex-row flex-col gap-5 items-center'>
                <div className='rounded-2xl'>
                    <h1 className='text-2xl text-orange-300 rounded-t-2xl text-center w-[300px] bg-black'><a href='https://www.laappetit.rs/' target='_blank'>LaAppetit</a></h1>
                    <img className='w-[300px] h-[500px] rounded-b-2xl' src="/laappetit.webp" alt="laappetit" />
                </div>
                <div>
                    <h1 className='text-2xl text-orange-300 text-center w-[300px] rounded-t-2xl bg-black'><a href='https://www.Proauto.rs/' target='_blank'>ProAuto</a></h1>
                    <img className='w-[300px] h-[500px] rounded-b-2xl' src="/proauto.webp" alt="proauto" />
                </div>
                <div className='w-[300px] h-[540px] justify-center flex flex-col bg-black items-center rounded-2xl'>
                    <h1 className='text-2xl text-orange-300 text-center w-[300px] bg-black '>Destilerija Achillea <br />QRscanMenu</h1>
                    <img className='w-[150px] h-[150px]' src="/Achillea.png" alt="achillea" />
                </div>
            </div>
        </div>
    )
}

export default Project