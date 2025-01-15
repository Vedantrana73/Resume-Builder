import React, { useState } from 'react';
import SelectCategory from '../components/SelectCategory.jsx';
import image1 from '../assets/Carousel1.webp';
import image2 from '../assets/Carousel2.webp';
import image3 from '../assets/Carousel3.jpg';

function Templates() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const fresherTemplates = [image1, image2, image3, image1, image2];

    return (
        <div className='px-2 md:px-5'>
            <SelectCategory selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <div className='py-2'>
                {selectedCategory && (
                    <>
                        <h2 className='py-5 text-3xl font-bold'>{selectedCategory} Resume Templates</h2>
                        {/* Container for horizontal scrolling */}
                        <div className="flex flex-col items-center md:flex-row  gap-6 py-2 flex-wrap">
                            {fresherTemplates.map((image, index) => (
                                <div key={index} className='w-80 rounded-lg overflow-hidden h-96 border border-black'>
                                    <img src={image} className="h-96 w-80 object-fill" alt="Resume Template" />
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Templates;
