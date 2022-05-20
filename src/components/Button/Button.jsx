import { useContext } from 'react';
import { Context } from '../../components/Store/Store';
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
        <div className="backButton" onClick={updateState}>
            <p>Back</p>
        </div>
    )
}

export default Button;