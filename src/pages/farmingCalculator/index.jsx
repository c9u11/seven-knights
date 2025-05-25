import Input from "./components/Input";
import Summary from "./components/Summary";
import ResultTable from "./components/ResultTable";
import { VStack } from "@chakra-ui/react";

const FarmingCalculator = () => {
  return (
    <VStack
      w={"100%"}
      maxW="800px"
      mx={"auto"}
      gap={6}
      h={"100%"}
      overflow={"hidden"}
    >
      <Input />
      <Summary />
      <ResultTable />
    </VStack>
  );
};

export default FarmingCalculator;
