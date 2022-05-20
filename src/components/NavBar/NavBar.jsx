import { useContext } from 'react';
import { Context } from '../Store/Store';
import * as React from 'react';
import Light from '../../assets/img/light.png';
import Dark from '../../assets/img/dark.png';
import './navbar.css';


const NavBar = () => {
    const [state, dispatch] = useContext(Context);
    const theme = state.theme;

    const switchTheme = () => {
        let newTheme = ''
        if (theme === 'light') {
            newTheme = 'dark';
        } else {
            newTheme = 'light'
        }

        dispatch({
            type: 'SET_THEME',
            payload: newTheme
        })

    }
    return (
        <div className='navbar-div'>
            <p>Where in the world?</p>
            {theme === 'light' ?
                <div className="navbar-div-image" onClick={switchTheme}>
                    <img src={Light} alt="light theme" />
                    <p>Dark Mode</p>
                </div>
                :
                <div className="navbar-div-image" onClick={switchTheme}>
                    <img src={Dark} alt="dark theme" />
                    <p>Light Mode</p>
                </div>
            }
        </div>
    );
};
export default NavBar;
