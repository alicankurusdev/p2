import React from 'react'

const Card = (item) => {
    const{title, image,desc}=item
  return (
    <div className='card-box'>
    <div className="title">
        {title}
    </div>
    <img src={image} alt="" />
    <p className="desc">
        {desc}
    </p>
    
    
    </div>
  )
}

export default Card