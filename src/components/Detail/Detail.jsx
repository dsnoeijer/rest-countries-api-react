import { useContext, useEffect } from 'react';
import { Context } from '../../components/Store/Store';
import CountryButton from '../CountryButton/CountryButton';
import './detail.css';


const Detail = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // eslint-disable-next-line
    const [state, dispatch] = useContext(Context);
    const country = state.country;

    const getCurrencies = () => {
        let curs = '';
        if (country.currencies) {
            let i = 0;
            Object.keys(country.currencies).map((cur) => {
                if (i < Object.keys(country.currencies).length - 1) {
                    i++;
                    return curs += `${country.currencies[cur].name}, `;
                } else {
                    return curs += `${country.currencies[cur].name}`;
                }
            })
        } else {
            curs += 'N/A';
        }
        return curs;
    }

    const getLanguages = () => {
        let lang = '';
        let i = 0;

        if (country.languages) {
            Object.values(country.languages).map((language) => {
                if (i < Object.values(country.languages).length - 1) {
                    i++;
                    return lang += `${language}, `;
                } else {
                    return lang += `${language}`;
                }
            });
        } else {
            lang += 'N/A';
        }
        return lang;
    }

    return (
        <div className="detail">
            <div className="detail-flag">
                <div className="detail-wrap-flag">
                    <img src={country.flags.png ? country.flags.png : ""} alt={country.name.common ? country.name.common : 'No image available'} />
                </div>
            </div>
            <div className="detail-info">
                <h1>{country.name.common ? country.name.common : 'N/A'}</h1>
                <div className="detail-wrap">
                    <div className='detail-top-div'>
                        <p>
                            Native Name: <span className="detail-result"> {country.name.nativeName ? Object.values(country.name.nativeName)[0].official : 'N/A'} </span>
                        </p>
                        <p>
                            Population: <span className="detail-result">{country.population ? country.population.toLocaleString("en-US") : 'N/A'}</span>
                        </p>
                        <p>
                            Region: <span className="detail-result">{country.region ? country.region : 'N/A'}</span>
                        </p>
                        <p>
                            Sub Region: <span className="detail-result">{country.subregion ? country.subregion : 'N/A'}</span>
                        </p>
                        <p>
                            Capital: <span className="detail-result">{country.capital ? country.capital : 'N/A'}</span>
                        </p>

                    </div>
                    <div className='detail-middle-div'>
                        <p>
                            Top Level Domain: <span className="detail-result">{country.tld ? country.tld[0] : 'N/A'}</span>
                        </p>
                        <p>
                            Currencies: <span className="detail-result">{getCurrencies()}</span>
                        </p>
                        <p>
                            Languages: <span className="detail-result">{getLanguages()}</span>
                        </p>
                    </div>
                    <div className='detail-bottom-div'>
                        <h2>Border Countries:</h2>
                        <div className="borders">
                            {country.borders ? Object.values(country.borders).map((border) => {
                                return <CountryButton key={border} country={border} />
                            })
                                :
                                'N/A'
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Detail;