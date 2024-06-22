import React from 'react'
import { CiMail } from "react-icons/ci";

function Contact() {
    return (
        <div>
            <div className='ml-20 mt-7'>
                <h2 className='text-blue-600'>#Contact</h2>
                <h1 className='text-2xl text-white font-rob'>Available on the following networks</h1>
                <hr className='border-blue-600 mt-2 w-[60%]' />
            </div>
            <div className='flex justify-around p-10'>
                <div className='w-10 h-10'>
                    <a href='https://www.instagram.com/bokeeJ/' target='_blank'><img src="/instagram.png" alt="insta" /></a>
                </div>
                <div className='w-10 h-10'>
                    <a href='https://sr-rs.facebook.com/people/Bojan-Drazic/pfbid02vNwPBvPsg4YH1UJssV1SKwSUACTQ3yiMgj6wCVaZuPMefcmwAGtzo6ixNLbSMj8Yl/' target='_blank'><img src="/facebook.png" alt="face" /></a>
                </div>
                <div className='w-10 h-10'>
                    <a href='https://www.linkedin.com/in/bojan-drazic-b78935210/' target='_blank'><img src="/linkedin.png" alt="linkedin" /></a>
                </div>
                <div className='w-10 h-10'>
                    <a className='text-2xl text-white' href="mailto:bokeejusthard@gmail.com"><CiMail size={40} color='white' /></a>
                </div>
            </div>

        </div>
    )
}

export default Contact