import type { RadioFieldPropsType } from "@/@types/input/RadioField";
import {
  HStack,
  RadioGroupItem,
  RadioGroupItemHiddenInput,
  RadioGroupItemIndicator,
  RadioGroupItemText,
  RadioGroupRoot,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Controller } from "react-hook-form";

const RadioField = <T extends Record<string, any>>({
  options,
  label,
  variant,
  name,
  control,
  errors,
}: RadioFieldPropsType<T>) => {
  return (
    <Stack gap={3}>
      <Text>{label}</Text>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <RadioGroupRoot
            variant={variant}
            value={value?.toString()}
            onChange={(val) => onChange(val)}
          >
            <HStack gap={7}>
              {options.map((option) => (
                <RadioGroupItem 
                  key={option.value} 
                  value={option.value.toString()}
                >
                  <RadioGroupItemHiddenInput />
                  <RadioGroupItemIndicator />
                  <RadioGroupItemText>{option.label}</RadioGroupItemText>
                </RadioGroupItem>
              ))}
            </HStack>
          </RadioGroupRoot>
        )}
      />
      {errors && <Text color="red">{errors.message}</Text>}
    </Stack>
  );
};

export default RadioField;