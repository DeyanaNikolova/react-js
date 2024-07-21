import { Link } from 'react-router-dom';
import { Navigation } from './Navigation';


export const MainNavigation = () => {
    return (
        <Navigation>
            {/* <li><NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })} to="/">Home</NavLink></li> */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/characters">Characters</Link></li>
        </Navigation>
    );
};