import React, { useEffect, useState } from 'react'
import RecipeList from '../../components/RecipeList'
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'
import "./Home.css"
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  // const [recipeData, setRecipeData] = useState([])
  // const fetchData = async () => {

  //   const res = await fetch("http://localhost:3000/recipies")
  //   const data = await res.json()
  //   console.log(data)
  //   setRecipeData(data)
  // }

  // useEffect(() => {
  //   if (JSON.parse(localStorage.getItem("email") === null) && JSON.parse(localStorage.getItem("password") === null)) {
  //     navigate("/login")
  //   }
  //   else {
  //     navigate("/")
  //   }

  // }, [])
  return (
    <>
      <div className="card-wrapper">
        {/* <Card cardTitle="Pizza" />
        <Card cardTitle="burger" />
        <Card cardTitle="rice" />
        <Card /> */}
        <Card />

      </div>

    </>
  )
}

export default Home