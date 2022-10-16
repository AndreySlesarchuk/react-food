import {useNavigate, useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {getFilteredCategory} from '../api'
import {Preloader} from '../components/Preloader'
import {MealList} from '../components/MealList'

function Category() {
    const {name} = useParams()
    const [meals, setMeals] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        getFilteredCategory(name).then((data) => {
            setMeals(data.meals)
        })
    }, [name])

    return (
        <>
            <button className='btn cyan' onClick={() => navigate(-1)}>Go back</button>
            {!meals.length ? <Preloader/> : <MealList meals={meals}/>}
        </>
    )
}

export {Category}
