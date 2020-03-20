module.exports = {
  components: "./components",
  outputPath: "./dist/playroom",
  // Optional:
  title: "CMS builder",
  // themes: './src/themes',
  // snippets: './playroom/snippets.js',
  // frameComponent: './playroom/FrameComponent.js',
  widths: [320, 375, 768, 1024],
  port: 9000,
  openBrowser: true,
  exampleCode: `
  <>
  <Flex px={2} color="white" bg="black" alignItems="center">
    <Text p={3} fontWeight="bold">
      Rebass
    </Text>
    <Box mx="auto" />
    <Text p={1} color="white">
      Options
    </Text>
  </Flex>

  <Flex>
    <Box width={1} px={2} bg="white">
      <Text p={2} color="black" fontWeight="bold">
        Layout
      </Text>

      <Flex flexWrap="wrap">
        <Card width={256}>
          <Image
            src={
              "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20"
            }
          />
          <Heading>Card</Heading>
        </Card>

        <StarterPack />

        <Single pokemon={12} />

        <Multiple pokemonList={[144, 145, 146, 147, 148, 149, 150, 151]} />
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
    </Box>
  </Flex>
</>
  `,
  baseUrl: "/playroom/"
  // webpackConfig: () => ({
  // Custom webpack config goes here...
  // })
};
