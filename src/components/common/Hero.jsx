import {
  Card,
  Image,
  Text,
  HStack,
  Badge,
  Tabs,
  Table,
  Flex,
  VStack
} from "@chakra-ui/react";

export default function Hero({ hero }) {
  return (
    <Card.Root overflow={"hidden"} maxW={"100%"} p={2} alignItems={"start"}>
      <HStack gap={3}>
        <Image
          objectFit="contain"
          maxW="50px"
          src={`/images/hero/${hero.id ?? "question"}.png`}
          bg={"gray.100"}
          alt="rudy"
        />
        <VStack>
          <Card.Title>{hero.name}</Card.Title>
          <Badge colorPalette={"orange"}>{hero.type}</Badge>
        </VStack>
        <Flex flex={1} flexWrap="wrap" gap={1}>
          {Array.isArray(hero.tags) &&
            hero.tags.map((tag) => <Badge colorPalette={"gray"}>{tag}</Badge>)}
        </Flex>
      </HStack>
      <Card.Body p={0} w={"100%"}>
        {!hero.gearRecommendations.length && (
          <Text w={"100%"} textAlign={"center"} color={"gray"}>
            준비 중...
          </Text>
        )}
        {hero.gearRecommendations.length > 0 && (
          <Tabs.Root variant="line" size={"xs"} fitted>
            <Tabs.List fontSize={"2xs"}>
              {hero.gearRecommendations.map((gear) => (
                <Tabs.Trigger
                  textAlign="center"
                  value={gear.title}
                  key={gear.title}
                >
                  {gear.title}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            {hero.gearRecommendations.map((gear) => (
              <Tabs.Content value={gear.title} p={1} key={gear.title}>
                <Text fontSize={"xs"} color={"fg.subtle"}>
                  {gear.description}
                </Text>
                <Table.Root size={"xs"} fontSize={"xs"}>
                  <Table.Header>
                    <Table.Row>
                      <Table.ColumnHeader textAlign="center"></Table.ColumnHeader>
                      <Table.ColumnHeader textAlign="center">
                        무기
                      </Table.ColumnHeader>
                      <Table.ColumnHeader textAlign="center">
                        방어구
                      </Table.ColumnHeader>
                      <Table.ColumnHeader textAlign="center">
                        부옵션
                      </Table.ColumnHeader>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row bg={"bg.success"}>
                      <Table.Cell textAlign="center">추천</Table.Cell>
                      <Table.Cell textAlign="center">{gear.weaponA}</Table.Cell>
                      <Table.Cell textAlign="center">{gear.armorA}</Table.Cell>
                      <Table.Cell textAlign="center" rowSpan={2}>
                        {gear.option}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row bg={"bg.warning"}>
                      <Table.Cell textAlign="center">차선책</Table.Cell>
                      <Table.Cell textAlign="center">{gear.weaponB}</Table.Cell>
                      <Table.Cell textAlign="center">{gear.armorB}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table.Root>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        )}
      </Card.Body>
    </Card.Root>
  );
}
