module.exports = {
  components: "./components",
  outputPath: "./dist/playroom",
  // Optional:
  title: "CMS builder",
  // themes: './src/themes',
  // snippets: './playroom/snippets.js',
  frameComponent: "./playroom/FrameComponent.js",
  widths: [320, 375, 768, 1024],
  port: 9000,
  openBrowser: true,
  exampleCode: `
  <Navbar title="CMS Build" />
  <Flex
    justifyContent="center"
    flexWrap="wrap"
    flexDirection={["column", "row"]}
    px={1}
  >
    <Flex flex={2}>
      <StarterPack />
    </Flex>
    <Flex flex={5}>
      <Legendary />
    </Flex>
  </Flex>
  <Footer />
  `,
  baseUrl: "/playroom/"
  // webpackConfig: () => ({
  // Custom webpack config goes here...
  // })
};

