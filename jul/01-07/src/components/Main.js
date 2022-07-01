import React from 'react'
import {data} from '../data'

const source = data[0].strYoutube

export default function Header () {

    let defaultColor = true;

    const handleClick = (idmeal) => {
        console.log(`Image ${idmeal} has been clicked`)
        defaultColor = !defaultColor;
        console.log(`defaultColor is `, defaultColor)
    }

    const handleIngredient = item => {

        const recipe = Object.entries(item)

        const ingredients = []

        recipe.forEach(item => {
            if (item[0].includes('strIng') && item[1]) {
                ingredients.push(item[1])
            }} )

        return <div>
            {
                ingredients.map(item => <p>{item}</p>)
            }
        </div>
    }

    return <div className="main">
            { 
            data.map(item => <div className={defaultColor ? 'card' : 'cardChanged'} key={item.idMeal} onClick={() => handleClick(item.idMeal)}>

                    {item.strMeal}
                    <img className="image"src={item.strMealThumb} alt="meal"/>
                    
                    {handleIngredient(item)}
                </div>)
            }
        </div>
}

/**
 * () are the grouping operator
 * 
 * (2 + 3) * 4
 */

/**
 * array.map is array method.
 * it accepts a function
 */