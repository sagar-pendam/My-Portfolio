import React from 'react'

function Spinner() {
    return (
       
        <div className="flex justify-center items-center mt-20   gap-2">
        <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
        <div className='text-white'>Loading</div>
    </div>
        
    )
}

export default Spinner
