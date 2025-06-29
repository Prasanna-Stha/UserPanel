import { MAX_LENGTH, MIN_LENGTH } from "@/constants/schema";
import * as yup from "yup"

export const schema = yup.object().shape({
    userName: yup
      .string()
      .required("User name is required")
      .min(MIN_LENGTH, `Username must be at least ${MIN_LENGTH} characters`)
      .max(MAX_LENGTH, `Username cannot exceed ${MAX_LENGTH} characters`),

    age: yup
      .number()
      .typeError("Age must be a number")
      .required("Age is required")
      .positive("Age must be a positive number")
      .integer("Age must be an integer"),

    gender: yup.string().required("Gender is required"),

    email: yup
      .string()
      .required("Email is required")
      .email("Must be a valid email"),

    contact: yup.string().required("Contact is required").max(10, "Mobile number cannot exceed more than 10 digits."),
  });