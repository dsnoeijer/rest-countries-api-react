export const Reducer = (state, action) => {

    switch (action.type) {
        case 'SET_THEME': {
            return {
                ...state,
                theme: action.payload
            }
        }
        case 'SET_COUNTRIES': {
            return {
                ...state,
                countries: action.payload
            }
        }
        case 'SET_COUNTRY': {
            return {
                ...state,
                country: action.payload
            }
        }
        case 'SET_SEARCHFIELD': {
            return {
                ...state,
                searchField: action.payload
            }
        }
        default:
            return state;
    }
}