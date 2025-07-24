import { useRequest } from "../hooks/useRequest";

type LoginCredentials = {
  email: string;
  password: string;
};

type ConfirmSignUpOTPCredentials = {
  email: string;
  otp: string;
};

type SignUpCredentials = LoginCredentials & {
  firstName: string;
  lastName: string;
  role: string;
  userImage?: string;
};

export const loginUserRequest = async ({ email, password }: LoginCredentials) =>
  await useRequest(
    "/api/v1/auth/login",
    "POST",
    JSON.stringify({ email, password })
  );

export const signupUserRequest = async ({
  firstName,
  lastName,
  role,
  email,
  password,
}: SignUpCredentials) =>
  await useRequest(
    "/api/v1/auth/sign-in",
    "POST",
    JSON.stringify({
      firstName,
      lastName,
      role,
      email,
      password,
      userImage: "https://image.com",
    })
  );

export const ConfirmSignUpOTP = async ({
  email,
  otp,
}: ConfirmSignUpOTPCredentials) =>
  await useRequest(
    "/api/v1/auth/verify-otp",
    "POST",
    JSON.stringify({ email, otp })
  );
