import {gql} from '@apollo/client';

export const FETCH_ALL_FILMS = gql`
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
`;

export const FETCH_FILM_CHARACTERS = gql`
  query Film($filmId: ID, $first: Int, $last: Int) {
    film(id: $filmId) {
      characterConnection(first: $first, last: $last) {
        characters {
          id
          name
        }
        totalCount
      }
    }
  }
`;

export const FETCH_FILM_DETAILS = gql`
  query Film($filmId: ID) {
    film(id: $filmId) {
      openingCrawl
      releaseDate
      title
      episodeID
      vehicleConnection {
        totalCount
      }
      speciesConnection {
        totalCount
      }
      planetConnection {
        totalCount
      }
    }
  }
`;
