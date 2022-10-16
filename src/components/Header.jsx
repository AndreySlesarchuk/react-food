import {Link} from 'react-router-dom'

function Header() {
    return <nav className='cyan darken-1'>
        <div className='nav-wrapper'>
            <Link to='/' className='brand-logo'>React Food</Link>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
                <li>
                    <a
                        href='https://github.com/AndreySlesarchuk/food-project'
                        target='_blank'
                        rel='noreferrer'
                    >Repo</a>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contacts'>Contacts</Link>
                </li>
            </ul>
        </div>
    </nav>
}

export {Header}
