# GraphQL Code Generator Setup Guide

## ✅ Setup Complete!

Your project now has fully typed GraphQL queries with automatic code generation.

## 📁 Project Structure

```
src/libs/graphql/
├── apollo/
│   ├── ApolloClient/
│   └── ApolloWrapper/
├── queries/
│   └── anime/
│       └── getAnimeData.ts
└── generated/
    └── graphql.ts (auto-generated - DO NOT EDIT)
```

## 🔧 How It Works

### 1. Write Your Query

Create a query file in `src/libs/graphql/queries/`:

```typescript
// src/libs/graphql/queries/anime/getAnimeData.ts
import { gql } from "@apollo/client";

export const GET_ANIME_DATA = gql`
  query GetAnimeData($id: Int!) {
    Media(id: $id) {
      id
      title {
        romaji
        english
      }
    }
  }
`;
```

### 2. Generate Types

Run the code generator:

```bash
npm run codegen
```

This automatically creates:

- TypeScript types for your query
- Typed React hooks (e.g., `useGetAnimeDataQuery`)
- Type-safe variables and responses

### 3. Use the Generated Hook

```typescript
"use client";

import { useGetAnimeDataQuery } from "@/libs/graphql/generated/graphql";

export default function AnimePage() {
  // ✅ Fully typed!
  const { data, loading, error } = useGetAnimeDataQuery({
    variables: { id: 1 }, // TypeScript knows this needs an 'id'
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // ✅ data.Media is fully typed with autocomplete!
  return (
    <div>
      <h1>{data?.Media?.title?.romaji}</h1>
    </div>
  );
}
```

## 📝 Available Scripts

- `npm run codegen` - Generate types from GraphQL schema
- `npm run codegen:watch` - Watch mode (regenerates on file changes)

## 🎯 Benefits

✅ **Full Type Safety** - TypeScript knows exact shape of queries and responses
✅ **Autocomplete** - IDE suggests available fields
✅ **Error Prevention** - Catches mistakes at compile time
✅ **Auto-generated Hooks** - No manual hook creation needed
✅ **Variable Validation** - Required variables are enforced

## 📚 Query Naming Convention

Query names are converted to hook names automatically:

| Query Name       | Generated Hook           |
| ---------------- | ------------------------ |
| `GetAnimeData`   | `useGetAnimeDataQuery`   |
| `SearchAnime`    | `useSearchAnimeQuery`    |
| `GetUserProfile` | `useGetUserProfileQuery` |

## 🔄 Workflow

1. Create/modify GraphQL query in `src/libs/graphql/queries/`
2. Run `npm run codegen` (or use watch mode)
3. Import and use the generated hook in your component
4. Enjoy full type safety! 🎉

## 📖 Examples

### Query with Variables

```typescript
const { data } = useGetAnimeDataQuery({
  variables: {
    id: 123,
    type: MediaType.Anime,
  },
});
```

### Lazy Query

```typescript
const [getAnime, { data, loading }] = useGetAnimeDataLazyQuery();

// Call it later
getAnime({ variables: { id: 456 } });
```

### Suspense Query

```typescript
const { data } = useGetAnimeDataSuspenseQuery({
  variables: { id: 789 },
});
```

## 🚫 Important Notes

- **Never edit** `src/libs/graphql/generated/graphql.ts` directly
- Always run `codegen` after modifying queries
- Use watch mode during active development: `npm run codegen:watch`
- All queries must have unique names

## 🔗 Configuration

The setup is configured in `codegen.ts`:

- Schema: AniList GraphQL API
- Documents: All `.ts` and `.tsx` files in `src/`
- Output: `src/libs/graphql/generated/graphql.ts`
