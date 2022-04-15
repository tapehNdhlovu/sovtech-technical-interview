import { useQuery, gql } from "@apollo/client";

const GET_ALL_PEOPLE = gql`
  query {
    people @rest(path: "people/") {
      results {
        name
        height
        mass
        gender
        homeworld
      }
    }
  }
`;
