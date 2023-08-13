import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Maybe, Person} from 'src/__generated__/graphql';

export type LikedCharactersState = {
  likedCharacters: Maybe<Person>[];
};

const initialState: LikedCharactersState = {
  likedCharacters: [],
};

const projectsSlice = createSlice({
  name: 'LikedCharacters',
  initialState,
  reducers: {
    addLikedCharacter(
      state: LikedCharactersState,
      action: PayloadAction<Maybe<Person>>,
    ) {
      state.likedCharacters = [...state.likedCharacters, action.payload];
      return state;
    },
    removeLikedCharacter(
      state: LikedCharactersState,
      action: PayloadAction<string | undefined>,
    ) {
      return {
        ...state,
        likedCharacters: state.likedCharacters.filter(
          item => item?.id !== action.payload,
        ),
      };
    },
    setLikedCharacters(
      state: LikedCharactersState,
      action: PayloadAction<Maybe<Person>[]>,
    ) {
      return {
        ...state,
        likedCharacters: [...action.payload],
      };
    },
  },
});

export default projectsSlice;
