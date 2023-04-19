import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  favorites: []
};

const store = configureStore({
  reducer: {
    favorites: (state = initialState.favorites, action) => {
      switch (action.type) {
        case 'ADD_POKEMON':
          return [...state, action.payload];
        case 'REMOVE_POKEMON':
          return state.filter(pokemon => pokemon.id !== action.payload.id);
        default:
          return state;
      }
    }
  }
});

export default store;