import { Card } from '@components/Card/Card';
import React from 'react'
export const getStaticProps = async ()=>{
    const response = await fetch('https://coolcats-six.vercel.app/api/cat')
    const { data: productList } = await response.json();
    return {
      props:{
        productList
      }
    }
  }
  
const cat = ({productList}) => {
    console.log(productList);
    
  return (
    <>
    <figure className='cat__hero'>
        <img src="/images/hero-coolCat.png" alt="" />
    </figure>
    <figure className='cat__user'>
        <img src="/images/logo.png" alt="" />
    </figure>
    <div className='cat__title'>
        <h1 className='title-45'>Cool Cats NFT</h1>
        <p className='sub-medium'>Creado por CoolCatsContract</p>
    </div>
    <div className='cat__products'>
        {
            productList.map((item)=>(
                <Card key={item.id} image={item.image} bid={item.bid} id={item.id} name={item.name} like={item.like}/>
            ))
        }
    </div> 
     </>
  )
}

export default cat;