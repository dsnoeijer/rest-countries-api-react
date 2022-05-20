import { useContext } from 'react';
import { Context } from '../../components/Store/Store';
import './searchbar.css';
import Loop from '../../assets/img/loop.png';


const SearchBar = () => {
    const [state, dispatch] = useContext(Context);

    const onSearchChange = (e) => {
        dispatch({
            type: 'SET_SEARCHFIELD',
            payload: e.target.value
        })
    }

    return (
        <div className="searchbar-div">
            <div className="searchbar">
                <img className="loop" src={Loop} alt="Loop" />
                <input
                    type="text"
                    placeholder="Search for a country"
                    onChange={onSearchChange}
                />
            </div>
        </div>
    )
}

export default SearchBar;