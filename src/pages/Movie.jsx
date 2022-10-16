import {useParams, useNavigate, useMatch, useLocation} from 'react-router-dom'

function Movie() {
    const {title} = useParams()
    let navigate = useNavigate()

    function navigatePageBtn(level) {
        navigate(level)
    }

    //http://localhost:3000/movies/5557?name=Matrix&lang=en
    const location = useLocation()

    // const value = useMatch()'
    //console.log(value)

    return (
        <>
            <h1>Some movie {title}</h1>
            <button className='btn cyan' onClick={() => navigatePageBtn(-1)}>Go back</button>
            <button className='btn cyan' onClick={() => navigatePageBtn(1)}>Go forward</button>
        </>
    )
}

export {Movie}
