import React from 'react'

function Templates() {
    return (
        <div>
            <div className='text-center py-2 font-semibold text-lg'>What Describes You The Best</div>
            <div className="flex w-full flex-col lg:flex-row">
                <div className="card bg-base-300 rounded-box grid h-16 flex-grow place-items-center">Fresher</div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div className="card bg-base-300 rounded-box grid h-16 flex-grow place-items-center">Experienced</div>
            </div>
        </div>
    )
}

export default Templates
