import { CiMail } from "react-icons/ci";

function Contact() {
    return (
        <div className='flex flex-col'>
            <div className='ml-20 mt-7 flex flex-col '>
                <h2 className='text-blue-600'>#Contact</h2>
                <h1 className='text-[30px] text-white font-bokor'>Available on the following networks</h1>
                <hr className='border-blue-600 mt-2 w-[60%]' />
            </div>
            <div className='flex justify-around p-10 flex-col gap-5'>
                <div className='w-10 h-10'>
                    <a href='https://www.instagram.com/bokeeJ/' className='font-bold flex items-center gap-2 text-white' target='_blank'>
                        <img src="/instagram.png" alt="insta" />
                        <h2>Instagram</h2>
                    </a>
                </div>
                <div className='w-10 h-10'>
                    <a href='https://sr-rs.facebook.com/people/Bojan-Drazic/pfbid02vNwPBvPsg4YH1UJssV1SKwSUACTQ3yiMgj6wCVaZuPMefcmwAGtzo6ixNLbSMj8Yl/' target='_blank' className='flex items-center gap-2 text-white font-bold'><img src="/facebook.png" alt="face" />
                        <h2>Facebook</h2>
                    </a>
                </div>
                <div className='w-10 h-10'>
                    <a href='https://www.linkedin.com/in/bojan-drazic-b78935210/' target='_blank' className='flex items-center gap-2 text-white font-bold'>
                        <img src="/linkedin.png" alt="linkedin" />
                        <h2>Linkedin</h2>
                    </a>
                </div>
                <div className='w-10 h-10 flex gap-2 items-center text-white font-bold'>
                    <a className='text-2xl  text-white' href="mailto:bokeejusthard@gmail.com" >
                        <CiMail size={40} color='white' />

                    </a>
                    <h2>Mail</h2>
                </div>
            </div>

        </div>

    )
}

export default Contact