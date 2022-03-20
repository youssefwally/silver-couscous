import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'

function MainNavagation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}> Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'> All Meetups </Link>
                    </li>
                    <li>
                        <Link to='/new'> New Meetups </Link>
                    </li>
                    <li>
                        <Link to='/fav'> My Favorites </Link>
                    </li>
                </ul>
            </nav> 
        </header>
    );

}

export default MainNavagation;