import type { InputFieldProps } from "@/@types/input";
import { Stack, Input, Text } from "@chakra-ui/react";
import { Controller, type FieldValues } from "react-hook-form";

const TextInput = <T extends FieldValues>({
  placeholder,
  label,
  control,
  type,
  name,
  errors,
}: InputFieldProps<T>) => {
  return (
    <Stack gap={3}>
      <Text fontWeight={"medium"} color={"gray.800"}>
        {label}
      </Text>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Input
            placeholder={placeholder}
            type={type}
            border={errors && "1px solid red"}
            outline={"none"}
            value={value}
            onChange={onChange}
          />
        )}
      ></Controller>
      {errors && <Text color={"red"}>{errors.message}</Text>}
    </Stack>
  );
};

export default TextInput;
