import { Detail } from '@components/Detail/Detail';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Cat = () => {
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
      { cat==null ? <h1> </h1> : <Detail id={cat.id} image={cat.image} like={cat.like} attributes={cat.attributes} /> }    
    </>
    
  )
}

export default Cat;
