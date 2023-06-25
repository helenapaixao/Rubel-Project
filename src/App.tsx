import React from "react";
import GlobalStyles from "./styles/global";
import { ChakraProvider } from "@chakra-ui/react"
import Home from "../src/pages/Home";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
      <ChakraProvider>
      <GlobalStyles />
      <Home />
      <Analytics/>
      </ChakraProvider>
  );
}

export default App;
