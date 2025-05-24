import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  endpoints: (builder) => ({
    getAllPokemon: builder.query<Pokemon[], void>({
      query: (name) => `/posts/${name}`,
      transformResponse: (response: PokemonListResponse) => {
        // Modify response: Extract only title and id
        return response.results;
      },
    }),
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `/posts/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetAllPokemonQuery } = apiSlice;
