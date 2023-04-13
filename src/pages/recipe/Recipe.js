import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const Recipe = () => {
  const { id } = useParams()
  const [recipeData, setRecipeData] = useState("")
  const fetchData = async () => {

    const res = await fetch(`http://localhost:3000/recipe/${id}`)
    const data = await res.json()

    setRecipeData(data)
    //  console.log(data)
  }
  
  

  useEffect(() => {
     fetchData()
    

  }, [])
  return (
    <>

      {
        recipeData &&
        <h3 >{recipeData.title}</h3>

      }


    </>
  )
    }

export default Recipe