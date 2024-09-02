"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Button } from "ui/src/components";
import { FormField } from "~/components/FormField";
import { registerUser } from "./_actions/signup";
import { type FormValues } from "./SignUpForm.types";
import { signUpSchema } from "./utils/signUpValidation";

const handleSubmitForm: SubmitHandler<FormValues> = async (data) => {
  try {
    const result = await registerUser(data);
    console.log("Registration successful", result);
  } catch (error) {
    console.error("Registration error", error);
  }
};

export const SignUpForm = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      occupation: "",
      password: "",
      repeatPassword: ""
    },
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(signUpSchema)
  });

  const options = [
    { label: "Tenant/Buyer", value: "tenant" },
    { label: "Landlord", value: "landlord" }
  ];

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(handleSubmitForm)}
      className="wrapper flex flex-col flex-1 max-w-[768px] m-auto gap-y-16"
    >
      <div className="flex flex-row w-full gap-x-16">
        <FormField
          label="First name:"
          name="firstName"
          control={control}
          placeholder="Your first name"
          className="flex flex-1"
        />
        <FormField
          label="Last name:"
          name="lastName"
          control={control}
          placeholder="Your last name"
          className="flex flex-1"
        />
      </div>

      <FormField
        name="occupation"
        type="select"
        control={control}
        placeholder="I am a ..."
        options={options}
      />

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

      <FormField
        name="repeatPassword"
        type="password"
        control={control}
        label="Repeat password:"
        placeholder="Repeat password"
      />
      <Button className="w-full h-40 mt-8" type="submit" variant="filled">
        Submit
      </Button>
    </form>
  );
};
