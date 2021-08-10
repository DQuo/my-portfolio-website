import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import MainComponent from './components/MainComponent';


export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <MainComponent />
    </ChakraProvider>
  );
}


