import { useContext } from 'react';
import { Context } from '../../components/Store/Store';
import React from 'react';
import './card.css';


const Card = (props) => {
    // eslint-disable-next-line
    const [state, dispatch] = useContext(Context);

    const selectCountry = (country) => {
        dispatch({
            type: 'SET_COUNTRY',
            payload: country
        })
    }

    return (
        <div className='countries'>
            {Object.keys(props.default).slice(0, 8).map((key) => {
                return (
                    <div className="countries-card" key={props.default[key].name.common} onClick={() => selectCountry(props.default[key])}>
                        <div className="countries-card-image">
                            <img src={props.default[key].flags.png} alt="country flag" />
                        </div>
                        <div className="countries-card-info">
                            <h1>{props.default[key].name.common}</h1>
                            <p>
                                Population: <span className="card-info-detail">{props.default[key].population.toLocaleString("en-US")}</span>
                            </p>
                            <p>
                                Region: <span className="card-info-detail">{props.default[key].region}</span>
                            </p>
                            <p>
                                Capital: <span className="card-info-detail">{props.default[key].capital}</span>
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card;