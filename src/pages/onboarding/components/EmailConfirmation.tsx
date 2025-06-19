// import React from 'react'
import envelope from '../../../assets/images/open-envelope.png'

const EmailConfirmation = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-6 p-20 bg-white w-4/5 mx-auto text-center max-w-[964px]'>
            <div>
                <img src={envelope} alt="mail" className='animate-bounce' />
            </div>
            <p className="text-black-1 font-bold text-3xl">Email Confirmation</p>
            <p className="text-black-1 font-semibold text-xl">We have sent an email to{" "}<span className='text-blue-3'>n****e@e***e.com</span>{" "}to confirm the validity of our email address. After receiving the email follow the link provided to be redirected to take your assessments.</p>
        </div>
    )
}

export default EmailConfirmation