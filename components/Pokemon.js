import React from "react";
import axios from "axios";
import useSWR from "swr";
import { Box, Card, Flex, Image, Heading, Text } from "rebass";

const API = "https://pokeapi.co/api/v2/pokemon/";

const fetcher = (...args) => axios(...args).then(({ data }) => data);

export const PokemonCard = ({ number }) => {
  const { data } = useSWR(`${API}${number}`, fetcher, {
    shouldRetryOnError: false,
    revalidateOnFocus: false,
    refreshInterval: 0
  });

  const abilities = data?.abilities.map(({ ability }) => ability) ?? [];

  return (
    <Card
      width={256}
      color="primary"
      margin="2em auto"
      style={{ borderRadius: "8px" }}
    >
      <Image src={data?.sprites?.front_default} width={256} />
      <Heading style={{ wordBreak: "break-all", textOverflow: "ellipsis" }}>
        {number}: {data?.name}
      </Heading>
      <Text>Abilities:</Text>
      <ul>
        {abilities.map(({ name }) => (
          <Text key={name} as="li">
            {name}
          </Text>
        ))}
      </ul>
    </Card>
  );
};

export const Multiple = ({ pokemonList = [] }) => (
  <Flex flexWrap="wrap">
    {pokemonList.map(poke => (
      <PokemonCard key={poke} number={poke} />
    ))}
  </Flex>
);

export const Legendary = () => (
  <Box>
    <Text color="white">Legendary</Text>
    <Multiple pokemonList={[144, 145, 146, 147, 148, 149, 150, 151]} />
  </Box>
);

export const StarterPack = () => (
  <Box>
    <Text color="white">Starter Pack</Text>
    <Multiple pokemonList={[1, 4, 7]} />
  </Box>
);
