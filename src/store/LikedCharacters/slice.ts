import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Maybe, Person} from 'src/__generated__/graphql';

export type LikedCharactersState = {
  isLoading: boolean;
  likedCharacters: Maybe<Person>[];
};

const initialState: LikedCharactersState = {
  isLoading: false,
  likedCharacters: [],
};

const projectsSlice = createSlice({
  name: 'LikedCharacters',
  initialState,
  reducers: {
    setIsLoading(state: LikedCharactersState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
      return state;
    },
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
