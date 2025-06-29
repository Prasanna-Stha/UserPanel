import type { Control, FieldError, FieldPath } from "react-hook-form";

export type RadioFieldPropsType<T extends Record<string, any>> = {
  label: string;
  options: {
    label: string;
    value: string;
  }[];
  variant?: "solid" | "outline" | "subtle";
  name: FieldPath<T>;
  errors?: FieldError;
  control: Control<T>
};
