import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Meals = () => {
    const [items,setItems]=useState([])

    useEffect(()=>{
        axios
        .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((res)=>
        {
            //console.log(res.data.meals)
            setItems(res.data.meals)
        })
        .catch((error)=>{
          console.log(err);
        });

    },[])
    
    const itemsList=items.map(({strMeal,strMealThumb, idMeal})=>{
      return(
        <section>
          <img src={strMealThumb} alt={strMeal} />
          <section>
            <p>{strMeal}</p>
            <p>#{idMeal}</p>
          </section>
        </section>
      )
    })


  return (
    <div>{itemsList}</div>
  )
}

export default Meals