import { useContext } from 'react';
import { Context } from '../../components/Store/Store';
import { useEffect, useState } from "react";

const CountryButton = ({ country }) => {
    const [state, dispatch] = useContext(Context);

    const linkState = (newCountry) => {
        const nameUrl = 'https://restcountries.com/v3.1/name/';
        const getNewCountry = async () => {
            const getCountry = await fetch(`${nameUrl}${newCountry}`);
            const result = await getCountry.json();
            dispatch({
                type: 'SET_COUNTRY',
                payload: result[0]
            });
        }
        getNewCountry();
    }

    const codes = 'https://restcountries.com/v3.1/alpha?codes=';
    const [countryName, setCountryName] = useState('');


    useEffect(() => {
        const getCountryName = async () => {
            await fetch(`${codes}${country}`)
                .then(res => res.json())
                .then(data => setCountryName(data[0].name.common));
        }

        getCountryName();
    })

    return (
        <button onClick={() => linkState(countryName)}>
            {countryName}
        </button>
    )
}

export default CountryButton;