import React from 'react'
import { Link } from 'react-router-dom'
import "./RecipeList.css"
const RecipeList = ({ data }) => {
    return (
        <>
        <div className='card-wrapper'>
        {
                data.map((data, index) => {
                    return (
                       <div key={index} className='card'>
                       <img src={data.imageURL} alt="" />
                       <h3>{data.name}</h3>
                       <p>{data.timers[3]}</p>
                       <div>{data.steps}</div>
                       <Link to={`/recipe/${data.id}`}>Cooking Time</Link>

                       </div>
                    )
                })
            }
        </div>
           

        </>
    )
}

export default RecipeList