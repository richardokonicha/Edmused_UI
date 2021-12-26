import { Box, Grid, HStack, GridItem, Heading, Container } from '@chakra-ui/react';
import Navigation from './components/Navigation2';
import ColourCard from './components/ColourCard';
import ChartBox from './components/ChartBox';

const App = () => {
  return (
    <Container>

      <Grid
        templateColumns='repeat(6, 1fr)'
        templateRows="repeat(6, 1fr)"
        // h="100vh"
        gap={20}
      >

        <Navigation />
        <GridItem colSpan={3} rowSpan={2}>
          <Heading fontSize="20" mt='44px'>
            Knowledge base
          </Heading>
          <HStack spacing="33px" mt="auto" align={"flex-end"}>
            <ColourCard colour='#74C1ED'>
              Vocabulary
            </ColourCard>
            <ColourCard colour='#FFF6FB'>
              Phrasal verbs
            </ColourCard>
            <ColourCard colour='#FEFBEC'>
              Grammar
            </ColourCard>
          </HStack>
        </GridItem>
        <GridItem colSpan={2} rowSpan={2}>
          <Box bg="gray" w="100%" h="100%"></Box>
        </GridItem>
        <GridItem colSpan={3} rowSpan={4}>
          {/* <Box bg="gray" w="100%" h="100%"></Box> */}
          <Heading fontSize="20" mt='64px'>
            Statistics
          </Heading>
          <ChartBox />

        </GridItem>
        <GridItem colSpan={2} rowSpan={4}>
          <Box bg="gray" w="100%" h="100%"></Box>
        </GridItem>
      </Grid>
    </Container>

  )
}

export default App