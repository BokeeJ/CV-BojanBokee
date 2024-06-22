import React from 'react'

function About() {
    return (
        <div className='ml-20'>
            <div >
                <h2 className='text-blue-600'>#Need You Know</h2>
                <h1 className='text-2xl text-white'>About Me And My Design</h1>
                <hr className='border-blue-600 mt-2 w-[60%]' />
            </div>
            <div className='w-[60%] mt-10'>
                <p className='text-xl text-white p-3'> <span className='text-orange-300 text-2xl'>As a web designer</span>, I create websites and QR codes by combining various programming languages and design tools. I use <span className='text-orange-300 text-2xl'>HTML, Tailwind, JavaScript, and React</span> , which enable me to implement all of this and ensure everything is responsive on mobile phones. My focus is on fulfilling clients' desires, ensuring mutual satisfaction, and fostering long-term cooperation. I strive to stay updated with the latest trends and advancements in web design technology. </p>
            </div>
            <button className='text-[16px] border border-blue-600 p-3 m-5'><span className='font-bold text-white'>Contact me</span></button>
        </div>
    )
}

export default About