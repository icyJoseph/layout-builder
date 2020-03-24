import React from "react";
import { Box, Flex, Text } from "rebass";

export function Navbar({ title }) {
  return (
    <Flex px={2} color="white" bg="black" alignItems="center">
      <Text p={3} fontWeight="bold">
        {title}
      </Text>
      <Box mx="auto" />
    </Flex>
  );
}
