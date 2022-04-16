import { useQuery, gql } from "@apollo/client";

const GET_PEOPLE_IN_SELECTED_PAGE = gql`
  query getPeopleInSelectedPage($pathString: String) {
    people @rest(path: $pathString, type: "PeopleInSelectedPage") {
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

export const usePeopleInPage = (pageNumber) => {
  const { error, data, loading } = useQuery(GET_PEOPLE_IN_SELECTED_PAGE, {
    variables: {
      pathString: `people/?page=${pageNumber}`,
    },
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong!</div>;

  return {
    data,
    error,
    loading,
  };
};
