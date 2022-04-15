/** Get all the people from https://swapi.dev/api/people/ **/
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

export const useGetAllPeople = () => {
  const { error, data, loading } = useQuery(GET_ALL_PEOPLE);

  //console.log(homeWorldId);

  return {
    error,
    data,
    loading,
  };
};
