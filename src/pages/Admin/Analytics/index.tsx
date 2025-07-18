import { capitalizeFirstLetter } from "@/utils/capitalize";
import { Input, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Analytics = () => {
  const [val, setVal] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const capitalize = capitalizeFirstLetter(e.target.value);
    setVal(capitalize);
  };
  return (
    <>
      <Text>This is analytics page</Text>
      <Stack>
        <Input onChange={handleInputChange} value={val} />
      </Stack>
    </>
  );
};

export default Analytics;
