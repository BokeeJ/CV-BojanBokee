import React from 'react'

function Mid() {
    return (
        <div className='bg-black w-full h-full flex justify-between items-center'>

            <div className='justify-center mx-auto text-center'>
                <h1 className='text-white text-5xl font-extrabold font-rob'>Bojan Drazić</h1>
                <p className='text-xl font-rob text-white p-5'>
                    React developer ready for any challenge, at your service...
                </p>
            </div>
            <div className='w-[50%] h-[50%] flex justify-center my-20'>
                <img className='h-full w-[50%] rounded ' src="/img.webp" alt="workingProgress" />
            </div>

        </div>
    )
}

export default Mid