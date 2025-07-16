// import React from 'react'
import HeaderText from "../../components/HeaderText";
import Or from "../../components/Or";
import BlueTextLink from "../../../../components/ui/BluetextLink";
import { Link } from "react-router-dom";
import AltOnboardingMethods from "../../components/AltOnboardingMethods";
import { useAppForm } from "../../../../utils/services/form";
import { useMutation } from "@tanstack/react-query";
import { loginUserRequest } from "../../../../utils/queries/auth";
import Spinner from "../../../../components/ui/Spinner";

const Login = () => {
  const {
    mutate: loginMutation,
    data: response,
    isPending,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationFn: loginUserRequest,
    mutationKey: ["login"],
  });

  if (isError) {
    console.log('wahala tih wa oooo', error)
    alert(`error: ${JSON.stringify(error.message, null, 2)}`);
  }

  if (isSuccess) {
    alert(`success: ${JSON.stringify(response, null, 2)}`);
  }

  const loginForm = useAppForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ value }) => {
      loginMutation(value);
    },
  });

  return (
    <div>
      <HeaderText title="welcome back" description="Don't have an account?">
        <BlueTextLink>
          <Link to={"../signup"}>Sign Up</Link>
        </BlueTextLink>
      </HeaderText>

      <form
        className="flex flex-col gap-6 mt-25 mb-7"
        onSubmit={(event) => {
          event.preventDefault();
          loginForm.handleSubmit();
        }}
      >
        <loginForm.AppField
          name="email"
          validators={{
            onBlur: ({ value }) => {
              if (!value) {
                return "Email is required";
              }
              if (!value.includes("@")) {
                return "Invalid email";
              }
              return undefined;
            },
          }}
          children={(field) => {
            const { value, meta } = field.state;
            const { isValid, errors } = meta;

            return (
              <field.Input
                placeholder="Email"
                type="email"
                name="email"
                value={value}
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value)}
                error={isValid ? undefined : errors[0]}
              />
            );
          }}
        />

        <loginForm.AppField
          name="password"
          validators={{
            onBlur: ({ value }) => {
              if (!value) {
                return "Password is required";
              }
            },
          }}
          children={(field) => {
            const { value, meta } = field.state;
            const { isValid, errors } = meta;

            return (
              <field.Input
                placeholder="password"
                type="password"
                name="password"
                value={value}
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event?.target.value)}
                visibility={true}
                error={isValid ? undefined : errors[0]}
              />
            );
          }}
        />

        <span className="text-right">
          <BlueTextLink>
            <Link to={"../forgotpassword"}>Forgot Password</Link>
          </BlueTextLink>
        </span>

        <loginForm.AppForm>
          <loginForm.MainButton submit>
            {isPending ? <Spinner /> : "Login"}
          </loginForm.MainButton>
        </loginForm.AppForm>
      </form>

      <Or />

      <AltOnboardingMethods />
    </div>
  );
};

export default Login;
