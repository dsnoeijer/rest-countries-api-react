import { useContext } from 'react';
import { Context } from '../../components/Store/Store';
import CountryButton from '../CountryButton/CountryButton';
import './detail.css';


const Detail = () => {
    // eslint-disable-next-line
    const [state, dispatch] = useContext(Context);
    const country = state.country;
    console.log(country)

    const getCurrencies = () => {
        let curs = '';
        let i = 0;
        Object.keys(country.currencies).map((cur) => {
            if (i < Object.keys(country.currencies).length - 1) {
                i++;
                return curs += `${country.currencies[cur].name}, `;
            } else {
                return curs += `${country.currencies[cur].name}`;
            }
        })
        return curs;
    }

    const getLanguages = () => {
        let lang = '';
        let i = 0;

        Object.values(country.languages).map((language) => {
            if (i < Object.values(country.languages).length - 1) {
                i++;
                return lang += `${language}, `;
            } else {
                return lang += `${language}`;
            }
        })
        return lang;
    }

    return (
        <div className="detail">
            <div className="detail-flag">
                <div className="detail-wrap">
                    <img src={country.flags.png} alt={country.name.common} />
                </div>
            </div>
            <div className="detail-info">
                <div className="detail-wrap">
                    <div className='detail-top-div'>
                        <h1>{country.name.common}</h1>
                        <p>
                            Native Name: <span className="detail-result"> {Object.values(country.name.nativeName)[0].official} </span>
                        </p>
                        <p>
                            Population: <span className="detail-result">{country.population.toLocaleString("en-US")}</span>
                        </p>
                        <p>
                            Region: <span className="detail-result">{country.region}</span>
                        </p>
                        <p>
                            Sub Region: <span className="detail-result">{country.sybregion}</span>
                        </p>
                        <p>
                            Capital: <span className="detail-result">{country.capital}</span>
                        </p>
                    </div>
                    <div className='detail-middle-div'>
                        <p>
                            Top Level Domain: <span className="detail-result">{country.tld[0]}</span>
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
                            {Object.values(country.borders).map((border) => {
                                return <CountryButton key={border} country={border} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Detail;