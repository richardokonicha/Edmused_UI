import React from 'react';
import { ChakraProvider, Box, Container, Stack } from '@chakra-ui/react';
import Navigation from './components/Navigation';
import theme from './utils/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Stack direction={['column', 'row']} spacing='24px'>
        <Navigation />
        <Box w='40px' h='40px' bg='pink.100'>
          3j
        </Box>

      </Stack>
    </ChakraProvider>
  );
}

export default App;
