import likedCharactersSlice from './slice';

export const {setLikedCharacters, addLikedCharacter, removeLikedCharacter} =
  likedCharactersSlice.actions;

export const LikedCharactersReducer = likedCharactersSlice.reducer;
