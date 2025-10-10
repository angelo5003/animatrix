"use client";

import { useGetAnimeDataQuery } from "@/libs/graphql/generated/graphql";

export default function TestPage() {
  const { data, loading, error } = useGetAnimeDataQuery({
    variables: { page: 1 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>✅ AniList Test Query Result:</h2>
      <ul>
        {data?.Page?.media?.map((anime) => {
          return <li key={anime?.id}>{anime?.title?.romaji}</li>;
        })}
      </ul>
    </div>
  );
}
