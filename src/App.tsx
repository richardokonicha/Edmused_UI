import React from 'react';
import { ChakraProvider, Box, HStack, Heading, Grid, GridItem } from '@chakra-ui/react';
import Navigation from './components/Navigation';
import theme from './utils/theme';
import ColourCard from './components/ColourCard';
import ChartBox from './components/ChartBox';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Grid
        templateColumns='repeat(8, 1fr)'
        templateRows='repeat(3, 1fr)'
        gap={4}
        height='100vh'
      >
        <Navigation />
        <GridItem colSpan={6} rowSpan={1}>

          <Heading fontSize="20" mt='84px' mb="34px">
            Knowledge base
          </Heading>

          <HStack spacing="33px" mb={4}>
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

        <ChartBox />


      </Grid>
    </ChakraProvider>
  );
}

export default App;
