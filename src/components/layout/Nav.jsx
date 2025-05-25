import {
  HStack,
  Link as ChakraLink,
  Separator,
  Text,
  Box
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { ColorModeButton } from "@/components/ui/color-mode";
import {
  ROUTES_PATH_FARMING_CALCULATOR,
  ROUTES_PATH_ROOT
} from "@/constants/routes";

export default function Nav() {
  const location = useLocation();
  return (
    <HStack justifyContent="space-between">
      <nav>
        <HStack>
          <ChakraLink
            asChild
            color={
              location.pathname === ROUTES_PATH_ROOT ? "primary.500" : undefined
            }
          >
            <Link to={ROUTES_PATH_ROOT}>홈</Link>
          </ChakraLink>
          <Separator orientation="vertical" />
          <ChakraLink
            asChild
            color={
              location.pathname === ROUTES_PATH_FARMING_CALCULATOR
                ? "primary.500"
                : undefined
            }
          >
            <Link to={ROUTES_PATH_FARMING_CALCULATOR}>쫄작 계산기</Link>
          </ChakraLink>
        </HStack>
      </nav>
      <ColorModeButton />
    </HStack>
  );
}
