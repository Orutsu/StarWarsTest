import likedCharactersSlice from './slice';

export const {
  setLikedCharacters,
  setIsLoading,
  addLikedCharacter,
  removeLikedCharacter,
} = likedCharactersSlice.actions;

export const LikedCharactersReducer = likedCharactersSlice.reducer;
