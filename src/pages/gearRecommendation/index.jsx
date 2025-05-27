import { VStack, Text } from "@chakra-ui/react";
import { Tabs } from "@chakra-ui/react";
import All from "./components/All";
import GrowthDungeon from "./components/GrowthDungeon";
import Raid from "./components/Raid";
import Siege from "./components/Siege";

const GearRecommendation = () => {
  return (
    <VStack
      w={"100%"}
      maxW="800px"
      mx={"auto"}
      gap={6}
      h={"100%"}
      overflow={"hidden"}
    >
      <Tabs.Root
        defaultValue="All"
        variant="plain"
        colorPalette={"yellow"}
        w={"100%"}
        fitted
        size={"sm"}
      >
        <Tabs.List bg="bg.muted" rounded="l3" p="1">
          <Tabs.Trigger value="All">전체</Tabs.Trigger>
          <Tabs.Trigger value="GrowthDungeon">성장 던전</Tabs.Trigger>
          <Tabs.Trigger value="Raid">레이드</Tabs.Trigger>
          <Tabs.Trigger value="Siege">공성전</Tabs.Trigger>
          <Tabs.Indicator rounded="l2" />
        </Tabs.List>
        <Tabs.Content value="All">
          <All />
        </Tabs.Content>
        <Tabs.Content value="GrowthDungeon">
          <GrowthDungeon />
        </Tabs.Content>
        <Tabs.Content value="Raid">
          <Raid />
        </Tabs.Content>
        <Tabs.Content value="Siege">
          <Siege />
        </Tabs.Content>
      </Tabs.Root>
    </VStack>
  );
};

export default GearRecommendation;
