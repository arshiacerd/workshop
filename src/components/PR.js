import React, { Component, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PR = ({Component}) => {
  const navigate = useNavigate()
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("email") === null) && JSON.parse(localStorage.getItem("password") === null)) {
      navigate("/login")
    }
    else {
      navigate("/")
    }

  }, [])
  return (
   <Component />
  )
}

export default PR