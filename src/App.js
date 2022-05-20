import { useContext, useEffect } from 'react';
import { Context } from './components/Store/Store';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import Filter from './components/Filter/Filter';
import Card from './components/Card/Card';
import Button from './components/Button/Button';
import Detail from './components/Detail/Detail';
import './app.css';


const App = () => {
  const apiUrlAll = 'https://restcountries.com/v3.1/all';
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    const getCountries = async () => {
      const countries = await fetch(apiUrlAll);
      const result = await countries.json();
      dispatch({
        type: 'SET_COUNTRIES',
        payload: result
      })
    }
    getCountries();
    // eslint-disable-next-line
  }, [])

  const theme = state.theme;

  const filtered = Object.values(state.countries).filter((country) => {
    return country.name.common.toLowerCase().includes(state.searchField.toLowerCase());
  });

  return (
    <div className="App" data-theme={theme}>
      <header>
        <NavBar />
      </header>
      <main>
        {Object.keys(state.country).length > 0 ?
          <div className="detailPage">
            <Button />
            <Detail />
          </div>
          :
          <div className="home">
            <SearchBar />
            <Filter />
            <Card default={filtered} />
          </div>
        }
      </main>
    </div>
  );
}

export default App;
