import { useRequest } from "../hooks/useRequest";

type LoginCredentials = {
  email: string;
  password: string;
};

export const loginUserRequest = async ({
  email,
  password,
}: LoginCredentials) => await useRequest("/api/v1/auth/login", "POST", JSON.stringify({ email, password }));
