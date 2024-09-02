"use server";

import { type FormValues } from "./../SignInForm.types";

export const loginUser = async (formData: FormValues) => {
  const response = await fetch(process.env.BACKEND_URL + "/auth/signin", {
    method: "POST",
    body: JSON.stringify({
      email: formData.email,
      password: formData.password
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
};
