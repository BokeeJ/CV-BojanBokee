import React from 'react'

function Mid() {
    return (
        <div className='bg-black w-full h-full flex justify-between items-center'>

            <div className='justify-center mx-auto text-center'>

                <p className='lg:text-2xl font-rob text-white p-5'>
                    React developer ready for any challenge, at your service...<br />create a QR menu for your cafe or restaurant and make your stay easier for your guests...
                </p>
            </div>
            <div className='w-[50%] h-[50%] flex justify-center my-20'>
                <img className='h-full w-[50%] rounded ' src="/meniQr.webp" alt="workingProgress" />
            </div>

        </div>
    )
}

export default Mid