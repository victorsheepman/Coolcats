import React from 'react'

export const Category = ({title, creator, description, poster, perfil}) => {
  return (
    <div className='category'>
      <figure className='category__image'>
        <img src={poster} alt="" />
      </figure>
      <figure className='category__perfil'>
        <img src={perfil} alt="" />
      </figure>
      <div className='category__body'>
        <h2 className='sub-bold'>
          {title}
        </h2>
        <p className='body-16'>por <strong>{creator}</strong></p>
        <span className='body-16'>{description}</span>
      </div>
    </div>
  )
}
