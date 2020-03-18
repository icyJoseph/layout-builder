export const Layout = `
<Flex>
    <Box width={1} px={2} bg="white">
      <Text p={2} color="black" fontWeight="bold">
       {title}
      </Text>

      <Flex flexWrap="wrap">

        <Card width={256}>
          <Image src={image} />
          <Heading>Card</Heading>
        </Card>

        <Pokemon.StarterPack />

        <Pokemon.Single pokemon={pokemon} />

        <Pokemon.Multiple pokemonList={pokemonList}/>
      
      </Flex>

    </Box>
    <Box width={1 / 4} px={2} bg="white">
      <Text p={1} color="secondary" fontWeight="bold">
        Side
      </Text>

      <Button variant="primary" mr={2}>
        Primary
      </Button>
      <Button variant="secondary" mr={2}>
        Secondary
      </Button>
      <Button variant="outline" mr={2}>
        Outline
      </Button>
      <Badge />
    </Box>
  </Flex>
`;

export default Layout;
