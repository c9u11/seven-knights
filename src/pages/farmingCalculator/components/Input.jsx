import { useState } from "react";
import {
  Button,
  Switch,
  Text,
  HStack,
  Box,
  VStack,
  Slider,
  Icon
} from "@chakra-ui/react";
import { PiSparkleFill } from "react-icons/pi";
import { useFarmingStore } from "@/store/farming";

export default function Input() {
  const {
    calculate,
    stage,
    setStage,
    count,
    setCount,
    hasPackage,
    setHasPackage
  } = useFarmingStore();
  return (
    <VStack w={"100%"} alignItems={"stretch"}>
      <HStack gap={6}>
        <Text w={"70px"}>스테이지</Text>
        <Box flex={1}>
          <Slider.Root
            w={"100%"}
            value={stage}
            onValueChange={(e) => setStage(e.value)}
            step={1}
            min={1}
            max={18}
          >
            <Slider.Control>
              <Slider.Track>
                <Slider.Range bg="primary.200" />
              </Slider.Track>
              <Slider.Thumb bg="white" borderColor="primary.600" index={0}>
                <Icon color={"primary.600"}>
                  <PiSparkleFill />
                </Icon>
              </Slider.Thumb>
            </Slider.Control>
          </Slider.Root>
        </Box>
        <Text w={"22px"}>{stage}</Text>
      </HStack>
      <HStack gap={6}>
        <Text w={"70px"}>쫄작 인원</Text>
        <Box flex={1}>
          <Slider.Root
            w={"100%"}
            value={count}
            onValueChange={(e) => setCount(e.value)}
            step={1}
            min={1}
            max={5}
          >
            <Slider.Control>
              <Slider.Track>
                <Slider.Range bg="primary.200" />
              </Slider.Track>
              <Slider.Thumb bg="white" borderColor="primary.600" index={0}>
                <Icon color={"primary.600"}>
                  <PiSparkleFill />
                </Icon>
              </Slider.Thumb>
            </Slider.Control>
          </Slider.Root>
        </Box>
        <Text w={"22px"}>{count}</Text>
      </HStack>
      <HStack justifyContent={"space-between"}>
        <Text>월정액 결제 여부</Text>
        <Switch.Root
          colorPalette={"yellow"}
          checked={hasPackage}
          onCheckedChange={(e) => setHasPackage(e.checked)}
        >
          <Switch.HiddenInput />
          <Switch.Control>
            <Switch.Thumb bg={"white"} />
            <Switch.Indicator fallback={<Text color={"gray"}>X</Text>}>
              <Text color={"primary.600"}>O</Text>
            </Switch.Indicator>
          </Switch.Control>
        </Switch.Root>
      </HStack>
      <Button onClick={calculate} variant="outline" colorPalette={"yellow"}>
        계산하기
      </Button>
    </VStack>
  );
}
