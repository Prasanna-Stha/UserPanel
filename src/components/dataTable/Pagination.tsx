import { ButtonGroup, IconButton, Pagination, Box } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const CustomPagination = () => {
  return (
    <Box pt={4} display="flex" justifyContent="center" alignItems="center">
      <Pagination.Root count={20} pageSize={2} defaultPage={1}>
        <ButtonGroup size="sm" variant="outline">
          <Pagination.PrevTrigger asChild>
            <IconButton
              aria-label="Previous Page"
              borderColor="gray.200"
              _hover={{ bg: "gray.100" }}
              _active={{ bg: "gray.200" }}
            >
              <LuChevronLeft />
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items
            render={(page) => (
              <IconButton
                key={page.value}
                aria-label={`Page ${page.value}`}
                fontSize="sm"
                fontWeight="medium"
                borderColor="gray.200"
                _hover={{ bg: "gray.100" }}
                _active={{
                  bg: "gray.200",
                  color: "gray.800",
                  borderColor: "gray.300",
                }}
              >
                {page.value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild>
            <IconButton
              aria-label="Next Page"
              borderColor="gray.200"
              _hover={{ bg: "gray.100" }}
              _active={{ bg: "gray.200" }}
            >
              <LuChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
    </Box>
  );
};

export default CustomPagination;
