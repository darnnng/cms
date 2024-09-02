"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Button } from "ui/src/components";
import { FormField } from "~/components/FormField";
import { loginUser } from "./_actions/signin";
import { type FormValues } from "./SignInForm.types";
import { signInSchema } from "./utils/signInValidation";

const handleSubmitForm: SubmitHandler<FormValues> = async (data) => {
  try {
    const result = await loginUser(data);
    console.log("Login successful", result);
  } catch (error) {
    console.error("Registration error", error);
  }
};

export const SignInForm = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: ""
    },
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(signInSchema)
  });

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(handleSubmitForm)}
      className="wrapper flex flex-col flex-1 max-w-[768px] m-auto gap-y-16"
    >
      <FormField
        name="email"
        control={control}
        label="Email:"
        placeholder="Your email"
      />

      <FormField
        name="password"
        type="password"
        control={control}
        label="Password:"
        placeholder="Enter password"
      />

      <Button className="w-full h-40 mt-8" type="submit" variant="filled">
        Submit
      </Button>
    </form>
  );
};
