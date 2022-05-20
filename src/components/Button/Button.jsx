import { useContext } from 'react';
import { Context } from '../../components/Store/Store';
import Arrow from '../../assets/img/left-arrow.svg';
import ArrowDarkMode from '../../assets/img/left-arrow-dark-mode.svg';
import './button.css';




const Button = () => {
    const [state, dispatch] = useContext(Context);

    const updateState = () => {
        dispatch({
            type: 'SET_COUNTRY',
            payload: {}
        })
    }

    return (
        <div className="buttonWrap">
            <div className="backButton" onClick={updateState}>
                {state.theme === 'light' ?
                    <img src={Arrow} alt="back arrow" />
                    :
                    <img src={ArrowDarkMode} alt="back arrow" />
                }
                <p>Back</p>
            </div>
        </div>
    )
}

export default Button;