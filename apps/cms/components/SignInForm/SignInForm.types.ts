import { z } from "zod";
import { signInSchema } from "./utils/signInValidation";

export type FormValues = z.infer<typeof signInSchema>;
