export const Layout = `
<>
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
</>
`;

export default Layout;
