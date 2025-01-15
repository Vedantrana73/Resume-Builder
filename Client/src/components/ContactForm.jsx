import React from 'react'
import { BiUser } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'

function ContactForm() {
    return (
        <form className='space-y-3 w-full'>
            <h1 className='text-2xl py-3 font-bold'>Have Questions? Contact Us</h1>

            <label className="input input-bordered flex items-center gap-4 lg:max-w-4xl">
                <span className='text-lg'><BiUser /></span>
                <input type="text" className="grow" placeholder="Name" />
            </label>

            <label className="input input-bordered flex items-center gap-4 lg:max-w-4xl">
                <span><MdEmail /></span>
                <input type="email" className="grow" placeholder="Email" />
            </label>

            <label className='flex'>
                <textarea className="textarea textarea-bordered w-full h-48 lg:max-w-4xl" placeholder="Message"></textarea>
            </label>

            <div>
                <button className='btn btn-outline rounded-box px-7 text-lg'>Submit</button>
            </div>
        </form>
    )
}

export default ContactForm
