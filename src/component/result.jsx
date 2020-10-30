import React from 'react'

const Result =()=>{
    return(
        <div className="d-flex">
        <p className='text-black-50'> about {0} result found</p>
        <p className='text-black-50 ml-auto'>{1} page of {100}</p>
        </div>
    )
}

export default Result