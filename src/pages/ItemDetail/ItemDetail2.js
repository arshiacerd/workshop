import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const ItemDetail2 = () => {
    const [store, setStore] = useState("")
    const [isLoading, setisLoading] = useState(false)
    const { id } = useParams()
    console.log(store)
    useEffect(() => {
        const fetchData = async () => {
            setisLoading(true)
            try {

                const response = await fetch(`https://fakestoreapi.com/products/${id}`)
                console.log(response)
                if (!response.ok) {
                    throw new Error("not found")
                }
                const result = await response.json()
                setStore(result)
                console.log(result)
                setisLoading(false)
            } catch (error) {
                console.log("not found data")
                setisLoading(false)
            }


            // fetch(`https://fakestoreapi.com/products/${id}`)
            //     .then(res => res.json())
            //     .then(json => setStore(json))

        }
        fetchData()

    }, [])
    return (
        <>

            {
                isLoading && <h1>Loading....</h1>
            }

            {
                !isLoading && <div className="card" style={{ width: "18rem" }}>
                    <p className="card-text">
                        {store.description}
                    </p>
                </div>
            }




        </>
    )
}

export default ItemDetail2