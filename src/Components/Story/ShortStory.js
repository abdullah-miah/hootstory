import React from 'react';

const ShortStory = () => {
    return (
        <div className='mt-8'>
            <div className='p-4 rounded-lg bg-white banner gap-4 flex '>
            <div>
                <h1 className='text-xl font-bold'>This text is for our article title, sometime it should be long as like this</h1>
            <div className='flex justify-between'>
               
                <div className='flex justify-between mt-3 '>
                <img src='https://i.ibb.co/NFt7nVd/IMG-1243-copy-5.png'></img>
                <h1 className='ml-3'>Michael Scott</h1>
                </div>
               <div className='flex justify-center items-center'> 
               <img src='https://i.ibb.co/DLJxcRV/Group-538.png'></img>
                <span  className='ml-3'>Travel for explore</span></div>
            </div>
            <div id='background-color'></div>
            <span style={{color:"#bcb8b1"}} className='text-xl'>Nov 4, 2019 | 2 min read</span>
            <span style={{color: "#707070"}} className='text-xl ml-4'>Nov 4, 2019 | 2 min read</span>
            </div>
            <div>
                <img src='https://i.ibb.co/DYDqNJV/Mask-Group-18.png'></img>
            </div>
        </div>
        </div>
    );
};

export default ShortStory;