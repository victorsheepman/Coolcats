import React from 'react'

export const Colection = ({id, image, title, price, point}) => {
  return (
    <div className='colection'>
        <div className='colection__container'>
            <span className='body-16'>{id}</span>
            <figure className='colection__image'>
                <img src={image}  alt="" />
            </figure>
            <div className='colection__body'>
                <p className='body-16-bold'>{title}</p>
                <span className='body-16-bold'>
                    {price}
                </span>
            </div> 
        </div>
        <p className='body-16 colection__point'>{point}</p>
    </div>
  )
}
