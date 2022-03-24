import { useRouter } from 'next/router'
import React from 'react'

const Cat = () => {
    const {
        query: { id },
      } = useRouter();
  return (
    <div>
        <h1>{id}</h1>
    </div>
  )
}

export default Cat;
