//import { Catedory } from '@components/Category/Catedory';
import { Category } from '@components/Category/Category';
import React, { useEffect, useState } from 'react'

const explore = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
      // Especificamos que usaremos window
          window
        .fetch('/api/hero')
        .then((response) => response.json())
        .then(({data}) => {
          setCategory(data[2]);
        })
    }, [])
  return (
    <>
        <figure className='explore__poster'>
            <img src="/images/explore__header.png" alt="" />
        </figure>
        <header className='explore__header'>
            <h1 className='title-45'>Explore Collections</h1>
            <nav className='explore__nav'>
                <ul className='explore__nav__items'>
                    <li className='sub-bold'>Tendencias</li>
                    <li className='sub-bold'>Cima</li>
                    <li className='sub-bold'>Arte</li>
                    <li className='sub-bold'>Música</li>
                    <li className='sub-bold'>Nombre de dominio</li>
                    <li className='sub-bold'>Mundos virtuales</li>
                    <li className='sub-bold'>Cartas coleccionables</li>
                </ul>
            </nav>
        </header>
        <div className='explore__container'>
            {
                category.map(item=>(
                        <Category key={item.id} title={item.title} creator={item.creator}  description={item.description} poster={item.poster} perfil={item.perfil} />
                    )
                
                )
            }
        </div>
    </>
  )
}

export default explore;