import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemDetail = () => {
  const { id } = useParams()
  const [item, setItem] = useState("")
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/' + id)
      .then(res => res.json())
      .then(json => console.log(json))
  }, [])
  return (
    <div>
      {
        item &&
        <div className="card " style={{ width: "18rem" }}>


          <p className="card-text">{item.description}</p>
        </div>
      }

    </div>
  )
}

export default ItemDetail