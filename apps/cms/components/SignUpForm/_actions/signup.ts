"use server";

import { type FormValues } from "../SignUpForm.types";

export const registerUser = async (formData: FormValues) => {
  const response = await fetch(process.env.BACKEND_URL + "/auth/signup", {
    method: "POST",
    body: JSON.stringify({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      occupation: formData.occupation
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error("Registration failed");
  }

  return response.json();
};
