import { Box, Container, Grid, GridItem } from "@chakra-ui/react"

const App = () => {
  return (
    <Container maxW={'container.xl'} h="100vh">
      <Grid
        templateColumns='repeat(6, 1fr)'
        templateRows="repeat(6, 1fr)"
        h="100vh"
        gap={4}
      >
        <GridItem colSpan={[6, 1, 1]} rowSpan={[1, 6, 6]}>
          <Box bg="gray" w="100%" h="100%"></Box>
        </GridItem>
        <GridItem colSpan={3} rowSpan={2}>
          <Box bg="gray" w="100%" h="100%"></Box>
        </GridItem>
        <GridItem colSpan={2} rowSpan={2}>
          <Box bg="gray" w="100%" h="100%"></Box>
        </GridItem>
        <GridItem colSpan={3} rowSpan={4}>
          <Box bg="gray" w="100%" h="100%"></Box>
        </GridItem>
        <GridItem colSpan={2} rowSpan={4}>
          <Box bg="gray" w="100%" h="100%"></Box>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default App