import React from 'react'

function SelectCategory({selectedCategory ,setSelectedCategory}) {
    return (
        <div>
            <div className='text-center pb-2 font-semibold text-lg'>What Describes You The Best</div>
            <div className="flex w-full flex-col lg:flex-row text-base md:text-lg lg:text-2xl">
                <div className={`card rounded-box grid h-10 md:h-14 flex-grow place-items-center font-semibold ${selectedCategory==='Fresher'?'bg-accent text-accent-content':'bg-base-300'} cursor-pointer transition-colors duration-200`} onClick={()=>setSelectedCategory('Fresher')}>Fresher</div>
                <div className="divider lg:divider-horizontal  m-1">OR</div>
                <div className={`card rounded-box grid h-10 md:h-14 flex-grow place-items-center font-semibold ${selectedCategory==='Experienced'?'bg-accent text-accent-content':'bg-base-300'} cursor-pointer transition-colors duration-200`} onClick={()=>setSelectedCategory('Experienced')}>Experienced</div>
            </div>
        </div>
    )
}

export default SelectCategory
