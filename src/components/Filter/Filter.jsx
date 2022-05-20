import { useContext } from 'react';
import { Context } from '../../components/Store/Store';
import './filter.css';


const showOptions = () => {
    const options = document.querySelector('.options');
    options.classList.toggle('block');
}

const Filter = () => {
    const [state, dispatch] = useContext(Context);
    const apiFilterUrl = 'https://restcountries.com/v3.1/region/';

    const selectRegion = async (region) => {
        const selectedRegion = await fetch(`${apiFilterUrl}${region}`);
        const result = await selectedRegion.json();
        dispatch({
            type: 'SET_COUNTRIES',
            payload: result
        })
    }

    return (

        <div className="selectFilter">
            <div className="select" onClick={showOptions}>
                <p>Filter by Region</p>
            </div>

            <div className="options">
                <p onClick={() => selectRegion('Africa')}>Africa</p>
                <p onClick={() => selectRegion('America')}>America</p>
                <p onClick={() => selectRegion('Asia')}>Asia</p>
                <p onClick={() => selectRegion('Europe')}>Europe</p>
                <p onClick={() => selectRegion('Oceania')}>Oceania</p>
            </div>
        </div>

    )
}

export default Filter;