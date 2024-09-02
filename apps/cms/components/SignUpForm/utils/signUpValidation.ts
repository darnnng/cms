import { z } from "zod";

export const signUpSchema = z
  .object({
    firstName: z
      .string()
      .min(1, "First name is required")
      .max(50, "First name should be less than 50 characters"),

    lastName: z
      .string()
      .min(1, "Last name is required")
      .max(50, "Last name should be less than 50 characters"),

    email: z.string().email("Please enter a valid email address"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/\d/, "Password must contain at least one number")
      .regex(/[\W_]/, "Password must contain at least one special character"),

    repeatPassword: z
      .string()
      .min(8, "Repeat password must be at least 8 characters long"),

    occupation: z.string().min(1, "Occupation is required")
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords don't match",
    path: ["repeatPassword"]
  });
