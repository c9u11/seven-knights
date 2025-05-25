import { VStack, Text, Table, For } from "@chakra-ui/react";
import { getColorByNumber } from "@/utils/color";
import { useFarmingStore } from "@/store/farming";

export default function Summary() {
  const summary = useFarmingStore((state) => state.summary);
  return (
    <>
      {summary.length > 0 && (
        <VStack w={"100%"}>
          <Text>요약</Text>
          <Table.ScrollArea borderWidth="1px" w={"100%"}>
            <Table.Root size="sm" variant="outline" stickyHeader interactive>
              <Table.Header>
                <Table.Row>
                  <For each={["가격", "구매", "결과"]}>
                    {(item) => (
                      <Table.ColumnHeader
                        key={`summary-${item}`}
                        textAlign={"center"}
                      >
                        {item}
                      </Table.ColumnHeader>
                    )}
                  </For>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {summary.map((row) => (
                  <Table.Row key={`summary-${row.ruby}-${row.paidCount}`}>
                    <For each={[row.ruby, row.paidCount, row.result]}>
                      {(item, index) => (
                        <Table.Cell
                          key={`summary-${row.ruby}-${row.paidCount}-${index}`}
                          textAlign={"center"}
                          color={
                            index === 2 ? getColorByNumber(item) : undefined
                          }
                        >
                          {item}
                        </Table.Cell>
                      )}
                    </For>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </Table.ScrollArea>
        </VStack>
      )}
    </>
  );
}
