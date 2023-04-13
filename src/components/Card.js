import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import "./Card.css"
const Card = (props) => {
  const navigate = useNavigate()
  const [store, setStore] = useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setStore(json))
  },[])
 const viewItem=(id)=>{
   navigate("/itemDetail2/" + id)
 
 }
  return (
    <div className='card-wrapper'>
 {
      store &&  
      store.map((data,index)=>(
        <div className="card" style={{width:"18rem"}} key={data.id}>
        <img src={data.image} className="card-img-top card-img " alt="..."  />
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.category}</p>
        <button  className="btn btn-primary" onClick={()=>viewItem(data.id)}>view items  </button>
  
        </div>
      ))
    }
    </div>
   
  //   <div className="card" style={{width:"18rem"}}>
  //   <img src={logo} className="card-img-top card-img " alt="..."  />
  //   <div className="card-body">
  //     <h5 className="card-title">{props.cardTitle}</h5>
  //     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //     <button  className="btn btn-primary" onClick={addtoCart}>Add to Cart</button>
  //   </div>
  // </div>
  )
}

export default Card