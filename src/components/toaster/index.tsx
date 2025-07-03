import { Button } from "@chakra-ui/react";
import { toaster } from "../ui/toaster";

const Toaster = ({
  title,
  type,
}: {
  title: string;
  type: "success" | "error" | "warning" | "info";
}) => {
  return (
    <Button
      size={"sm"}
      variant={"outline"}
      onClick={() =>
        toaster.create({
          title,
          type,
        })
      }
    />
  );
};

export default Toaster;
