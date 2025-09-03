import type { Control, FieldError, FieldValues, Path } from "react-hook-form";

export type InputFieldProps<T extends FieldValues> = {
  placeholder: string;
  name: Path<T>;
  label: string;
  type?: string;
  errors?: FieldError;
  control: Control<T>;
};
