import React from "react";
import GlobalStyles from "./styles/global";
import { ChakraProvider } from "@chakra-ui/react"
import Home from "../src/pages/Home";

function App() {
  return (
      <ChakraProvider>
      <GlobalStyles />
      <Home />
      </ChakraProvider>
  );
}

export default App;
