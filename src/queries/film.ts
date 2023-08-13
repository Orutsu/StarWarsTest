import {gql} from '@apollo/client';

export const FETCH_ALL_FILMS = gql(`
  query Root {
    allFilms {
      films {
        id
        title
        episodeID
        releaseDate
        openingCrawl
      }
    }
  }
`);
