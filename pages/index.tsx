import { Card } from '@components/Card/Card'
import { Colection } from '@components/Colection/Colection';
import { Live } from '@components/Live/Live';
import React, { useEffect, useState } from 'react'


/*export const getStaticProps = async ()=>{
  const response = await fetch('https://coolcats-six.vercel.app/api/cat')
  const { data: productList } = await response.json();
  return {
    props:{
      productList
    }
  }
}

*/
/*

  boceto
    <section className={style.product}>
      {
        productList.map((item)=>(
          <Card key={item.id} image={item.image} bid={item.bid} id={item.id} name={item.name} like={item.like}/>
        ))
      }
      
    </section>*/







const Home = ({productList}) => {
  const [data, setData] = useState([])
  const [coletions, setColetions] = useState([])

  useEffect(() => {
    // Especificamos que usaremos window
		window
      .fetch('/api/hero')
      .then((response) => response.json())
      .then(({data}) => {
        setData(data[0]);
        setColetions(data[1])
      })
  }, [])
  return (
    <>
    <section className='hero'>
      <div className='hero__wrapper'>
        <article className='hero__title'>
          <h1 className='title-45'>Descubra, recopile y venda NFT extraordinarios</h1>
          <h3 className='sub-medium'>en el primer y más grande mercado de NFT del mundo</h3>
          <button className='hero__button'>
            <span className='body-16-bold'>Explorar</span>
          </button>
        </article>
        <div className='hero__card'>
          <figure>
            <img src="/images/hero-card.png" alt="" />
          </figure>
          <div className='hero__user'>
              <figure >
                <img src="/images/user.png" alt="" />
              </figure>
              <span>
                <h5 className='body-16-bold'>Tiny Dancer #2</h5>
                <p className='body-14'>Aidan Tooth</p>
              </span>
          </div>
        </div>
      </div>
    </section>
    <section className='product'>
      {
      
        data.map(item=>(
          <Live key={item.id} title={item.title} color={item.color} image={item.image} sentence={item.parraph} />
        ))  
            
      }
    </section>
    <section className='colections'>
      <h2 className='sub-bold'>Las mejores colecciones sobre <span>Los últimos 7 días</span></h2>
      <div className='colections__container'>
          {
            coletions.map(item=>(
              <Colection id={item.id} title={item.title} image={item.image} price={item.price} point={item.point} />
            ))
          }
      </div>
    </section>
    </>
  )
}

export default Home; 