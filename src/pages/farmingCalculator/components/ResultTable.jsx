import { VStack, Text, Table, For } from "@chakra-ui/react";
import { getColorByNumber } from "@/utils/color";
import { useFarmingStore } from "@/store/farming";

export default function ResultTable() {
  const table = useFarmingStore((state) => state.table);
  return (
    <>
      {table.length > 0 && (
        <VStack w={"100%"} minH={"500px"} overflow={"hidden"}>
          <Text>전체 결과</Text>
          <Table.ScrollArea borderWidth="1px" w={"100%"} flex={1}>
            <Table.Root size="sm" stickyHeader interactive>
              <Table.Header>
                <Table.Row>
                  <For
                    each={[
                      "가격",
                      "구매",
                      "결과",
                      "누적 열쇠",
                      "누적 판수",
                      "얻은 루비",
                      "사용 루비"
                    ]}
                  >
                    {(item) => (
                      <Table.ColumnHeader
                        key={`table-${item}`}
                        textAlign={"center"}
                      >
                        {item}
                      </Table.ColumnHeader>
                    )}
                  </For>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {table.map((row) => (
                  <Table.Row key={`table-${row.ruby}-${row.paidCount}`}>
                    <For
                      each={[
                        row.ruby,
                        row.paidCount,
                        row.result,
                        row.totalKeys,
                        row.totalGames,
                        row.totalGainedRuby,
                        row.totalUsedRuby
                      ]}
                    >
                      {(item, index) => (
                        <Table.Cell
                          key={`table-${row.ruby}-${row.paidCount}-${index}`}
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
