import { Card } from '@components/Card/Card'
import React, { useEffect, useState } from 'react'
import style from './index.module.css';

const Home = () => {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    // Especificamos que usaremos window
		window
      .fetch('/api/cat')
      .then((response) => response.json())
      .then( ({data}) => {
        setProductList(data)
      })
  }, [])
  return (
    <section className={style.product}>
      {
        productList.map((item)=>(
          <Card key={item.id} image={item.image} bid={item.bid} id={item.id} name={item.name} like={item.like}/>
        ))
        }
    </section>
  )
}

export default Home 