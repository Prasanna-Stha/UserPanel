import {
  Badge,
  Stack,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineIndicator,
  TimelineItem,
  TimelineRoot,
  TimelineSeparator,
  TimelineTitle,
} from "@chakra-ui/react";
import Dialog from "../dialog";
import { timelineData } from "@/constants/layout/timeline";

const TimelineDialog = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: VoidFunction;
}) => {
  return (
    <Dialog
      open={open}
      title="Activity Log"
      hasFooter={false}
      size="md"
      onClose={onClose}
    >
      <Stack
        h={420}
        overflowY="auto"
        borderWidth="1px"
        borderRadius="lg"
        border="none"
        p={4}
        bg="white"
        scrollbar={"hidden"}
        position={"relative"}
      >
        <TimelineRoot h={420}>
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
      </Stack>
    </Dialog>
  );
};

export default TimelineDialog;
