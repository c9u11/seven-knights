import {
  HStack,
  Link as ChakraLink,
  Separator,
  Text,
  Box
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { ColorModeButton } from "@/components/ui/color-mode";
import { ROUTES_LIST } from "@/constants/routes";

export default function Nav() {
  const location = useLocation();
  return (
    <HStack justifyContent="space-between">
      <nav>
        <HStack gap={4}>
          {ROUTES_LIST.map((route) => (
            <ChakraLink
              key={route.path}
              asChild
              color={
                location.pathname === route.path ? "yellow.500" : undefined
              }
            >
              <Link to={route.path}>{route.name}</Link>
            </ChakraLink>
          ))}
        </HStack>
      </nav>
      <ColorModeButton />
    </HStack>
  );
}
