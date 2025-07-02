import {
  Badge,
  Heading,
  HStack,
  Icon,
  Stack,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineIndicator,
  TimelineItem,
  TimelineRoot,
  TimelineSeparator,
  TimelineTitle,
  useDisclosure,
} from "@chakra-ui/react";
import { Expand } from "lucide-react";
import TimelineDialog from "./TimelineDialog";
import { timelineData } from "@/constants/layout/timeline";

const Timeline = () => {
  const { open, onClose, onOpen } = useDisclosure();
  return (
    <Stack
      h={420}
      overflowY="auto"
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      pt={0}
      bg="white"
      shadow="md"
      scrollbar={"hidden"}
      position={"relative"}
      border={"none"}
    >
      <HStack justify={"space-between"}>
        <Heading
          position={"sticky"}
          top={0}
          left={0}
          zIndex={1}
          py={3}
          pl={4}
          bg={"inherit"}
          color={'gray.600'}
        >
          Activity Log
        </Heading>
        <Icon as={Expand} boxSize={4} cursor={"pointer"} color={'gray.600'} onClick={onOpen} />
      </HStack>
      <TimelineRoot>
        {timelineData.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineConnector>
              <TimelineSeparator />
              <TimelineIndicator
                bg={item.color || "gray.300"}
                color="white"
                boxSize={6}
                borderRadius="full"
              >
                {item.icon && <item.icon size={14} />}
              </TimelineIndicator>
            </TimelineConnector>
            <TimelineContent>
              <TimelineTitle>
                {item.title}{" "}
                {item.badge && (
                  <Badge ml={1} colorPalette={item.colorPalette}>
                    {item.badge}
                  </Badge>
                )}
              </TimelineTitle>
              {item.description && (
                <TimelineDescription>{item.description}</TimelineDescription>
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineRoot>

      {open && <TimelineDialog open={open} onClose={onClose} />}
    </Stack>
  );
};

export default Timeline;
