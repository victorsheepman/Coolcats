import React, { useEffect, useState } from 'react'

const Home = () => {
  const [cat, setCat] = useState([])
  useEffect(() => {
    window.fetch('api/cat')
    .then(res => res.json())
    .then(({allEntries}) => setCat(allEntries))
  }, [])
  
  return (
    <div>
      {
        cat.map(item => (
          <h1>{item.id}</h1>
        ))
      }
    </div>
  )
}

export default Home