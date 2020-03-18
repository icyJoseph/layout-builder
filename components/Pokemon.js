import React from "react";
import JsxParser from "react-jsx-parser";
import axios from "axios";
import useSWR from "swr";
import { Card, Image, Heading } from "rebass";

const API = "https://pokeapi.co/api/v2/pokemon/";

const fetcher = (...args) => axios(...args).then(({ data }) => data);

const PokemonCard = ({ number }) => {
  const { data } = useSWR(`${API}${number}`, fetcher, {
    shouldRetryOnError: false,
    revalidateOnFocus: false,
    refreshInterval: 0
  });

  return (
    <Card width={256}>
      <Image src={data?.sprites?.front_default} width={256} />
      <Heading>
        {number}: {data?.name}
      </Heading>
    </Card>
  );
};

export const Multiple = ({ pokemonList = [] }) =>
  pokemonList.map(poke => <PokemonCard key={poke} number={poke} />);

export const Single = ({ pokemon }) => (
  <JsxParser
    bindings={{ pokemon }}
    components={{ PokemonCard }}
    jsx={`
    <PokemonCard  number={pokemon} />
    `}
  />
);

export const StarterPack = () =>
  [1, 4, 7].map(starter => <PokemonCard key={starter} number={starter} />);
