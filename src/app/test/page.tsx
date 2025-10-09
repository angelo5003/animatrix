"use client";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const TEST_QUERY = gql`
  query {
    Media(id: 1) {
      id
      title {
        romaji
        english
      }
    }
  }
`;

export default function TestPage() {
  const { data, loading, error } = useQuery(TEST_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>✅ AniList Test Query Result:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
