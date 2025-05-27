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

export default function Hero() {
  return (
    <Card.Root overflow={"hidden"} maxW={"100%"} p={2} alignItems={"start"}>
      <HStack gap={3}>
        <Image
          objectFit="contain"
          maxW="50px"
          src="/images/hero/rudy.png"
          alt="rudy"
        />
        <Card.Title>루디</Card.Title>
        <Flex flex={1} flexWrap="wrap" gap={1}>
          <Badge colorPalette={"orange"}>방어형</Badge>
          <Badge colorPalette={"gray"}>모험</Badge>
          <Badge colorPalette={"gray"}>무한의 탑</Badge>
          <Badge colorPalette={"gray"}>성장던전</Badge>
          <Badge colorPalette={"gray"}>레이드</Badge>
          <Badge colorPalette={"gray"}>결투장</Badge>
          <Badge colorPalette={"gray"}>공성전</Badge>
        </Flex>
      </HStack>
      <Card.Body p={0} w={"100%"}>
        <HStack></HStack>
        <Tabs.Root defaultValue="guard" variant="line" size={"xs"} fitted>
          <Tabs.List fontSize={"2xs"}>
            <Tabs.Trigger textAlign="center" value="guard">
              성기사
            </Tabs.Trigger>
            <Tabs.Trigger textAlign="center" value="guard1">
              수호자
            </Tabs.Trigger>
            <Tabs.Trigger textAlign="center" value="guard2">
              수문장
            </Tabs.Trigger>
            <Tabs.Trigger textAlign="center" value="guard3">
              선봉장
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="guard" p={1}>
            <Text fontSize={"xs"} color={"fg.subtle"}>
              뉴비용 메인 옵션
            </Text>
            <Table.Root size={"xs"} fontSize={"xs"}>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader></Table.ColumnHeader>
                  <Table.ColumnHeader>무기</Table.ColumnHeader>
                  <Table.ColumnHeader>방어구</Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row bg={"bg.success"}>
                  <Table.Cell>추천</Table.Cell>
                  <Table.Cell>방%</Table.Cell>
                  <Table.Cell>막%</Table.Cell>
                </Table.Row>
                <Table.Row bg={"bg.warning"}>
                  <Table.Cell>차선책</Table.Cell>
                  <Table.Cell>생%</Table.Cell>
                  <Table.Cell>받피,방%,생%,효적</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </Tabs.Content>
        </Tabs.Root>
      </Card.Body>
    </Card.Root>
  );
}
