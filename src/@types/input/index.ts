import type { Control, FieldError } from "react-hook-form";

export type InputFieldProps<T extends Record<string, any>> = {
    placeholder: string;
    name: keyof T;
    label: string;
    type?: string;
    errors?: FieldError;
    control: Control<T>
}