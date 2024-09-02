import { z } from "zod";
import { signUpSchema } from "./utils/signUpValidation";

export type FormValues = z.infer<typeof signUpSchema>;
