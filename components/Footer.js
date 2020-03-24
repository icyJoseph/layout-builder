import React from "react";

import { Box, Text } from "rebass";

export function Footer() {
  return (
    <Box p={2} as="footer" color="white" bg="black">
      <Text fontWeight="bold">
        Data source:{" "}
        <a href="https://pokeapi.co/" rel="noopener noreferrer">
          PokeAPI
        </a>
      </Text>
    </Box>
  );
}
