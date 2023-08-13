import {gql} from '@apollo/client';

export const FETCH_CHARACTER_DETAILS = gql`
  query Person($personId: ID) {
    person(id: $personId) {
      birthYear
      height
      mass
      name
      homeworld {
        name
      }
      filmConnection {
        films {
          id
          releaseDate
          title
          openingCrawl
          episodeID
        }
      }
      id
    }
  }
`;
