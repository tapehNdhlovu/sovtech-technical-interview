import { useQuery, gql } from "@apollo/client";

const GET_HOME_WORLD = gql`
  query getHomeWorld($pathString: String) {
    homeworld @rest(path: $pathString, type: "HomeWorld") {
      name
    }
  }
`;

export const useHomeWorld = (homeNumber) => {
  const { error, data, loading } = useQuery(GET_HOME_WORLD, {
    variables: {
      pathString: `planets/${homeNumber}`,
    },
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <div>Spinner...</div>;
  if (error) return <div>Something went wrong!</div>;

  var name = data.homeworld.name;

  return {
    name,
    error,
    loading,
  };
};
