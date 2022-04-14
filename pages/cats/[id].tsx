import { Detail } from '@components/Detail/Detail';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export const getStaticPaths = async () =>{
  const response = await fetch('https://coolcats-six.vercel.app/api/cat')
  const { data: productList } = await response.json();

  const paths = productList.map(({id})=>({
    params:{
      id
    }
  }))
  return{
    paths,
    fallback: false
  }
}
export const getStaticPropse = async ({ params })=>{
  const id = params?.id as string;
  const response = await fetch(`https://coolcats-six.vercel.app/api/cat/${id}`)
  const { data: productList} = await response.json();
  console.log(productList);
}
const Cat = ({product}) => {
  console.log(product);
  
  const [cat, setCat] = useState(null)
    const {
        query: { id },
    } = useRouter();    
    useEffect(() => {
      if(id){
        window
          .fetch(`/api/cat/${id}`)
          .then((response) => response.json())
          .then((entry) => {           
            setCat(entry)
          })
      }
    }, [])  
  return (
    <>
      { cat == null ? <h1> </h1> : <Detail id={cat.id} image={cat.image} like={cat.like} attributes={cat.attributes} /> }    
    </>
    
  )
}

export default Cat;
