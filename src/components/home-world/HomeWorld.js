import React from "react";
import { useHomeWorld } from "../../services/hooks/useHomeWorld";

export default function HomeWorld({ getHomeWorld }) {
  const { error, loading, name } = useHomeWorld(getHomeWorld);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong!</div>;
  return (
    <div>
      <b>{name}</b>
    </div>
  );
}
