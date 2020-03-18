import React from "react";
import { Box, Button, Flex } from "rebass";

export const Badge = () => {
  const [count, setCount] = React.useState(0);
  const inc = () => setCount(x => x + 1);
  const dec = () => setCount(x => x - 1);

  return (
    <Flex flexDirection="column">
      <Box
        sx={{
          margin: "0 auto",
          display: "inline-block",
          color: "white",
          bg: "primary",
          px: 2,
          py: 1,
          borderRadius: 9999
        }}
      >
        {count}
      </Box>
      <Button onClick={inc} margin="4px auto">
        Inc
      </Button>
      <Button onClick={dec} margin="4px auto">
        Dec
      </Button>
    </Flex>
  );
};
