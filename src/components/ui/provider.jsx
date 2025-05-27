"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig
} from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";

const config = defineConfig({
  strictTokens: true,
  theme: {
    tokens: {
      colors: {
        yellow: {
          50: "light-dark(#fffbeb,#fffbe6)",
          100: "light-dark(#fef3c7,#fff6d6)",
          200: "light-dark(#fde68a,#ffeaa1)",
          300: "light-dark(#fcd34d,#ffeaa1)",
          400: "light-dark(#fbbf24,#ffeaa1)",
          500: "light-dark(#f59e0b,#ffeaa1)",
          600: "light-dark(#d97706,#bfae6a)",
          700: "light-dark(#b45309,#bfae6a)",
          800: "light-dark(#92400e,#bfae6a)",
          900: "light-dark(#78350f,#bfae6a)"
        }
      }
    }
  }
});

const system = createSystem(defaultConfig, config);

export function Provider(props) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
