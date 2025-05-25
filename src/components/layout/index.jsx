import { Flex } from "@chakra-ui/react";
import Nav from "./Nav";
import Analytics from "@vercel/analytics/react";

export default function BaseLayout({ children }) {
  return (
    <Flex
      maxW={1200}
      direction="column"
      w={"100%"}
      gap={4}
      h={"100%"}
      overflow={"hidden"}
    >
      <Nav />
      {children}
      <Analytics />
    </Flex>
  );
}
