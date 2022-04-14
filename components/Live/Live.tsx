import React from 'react'
import styles from './Live.module.scss';
export const Live = ({title, color, image, sentence}) => {
  return (
    <div className='live' >
        <figure className='live__image'>
            <img src={image} alt="" />
        </figure>
        <div className='live__body' style={{background: color}}>
            <h1 className='sub-bold'>{title}</h1>
            <p className='body-16'>
              {sentence}
            </p>
          <button className='live__btn'>
            <p className='body-16'>Live</p>
          </button>
        </div>
        
    </div>
  )
}
