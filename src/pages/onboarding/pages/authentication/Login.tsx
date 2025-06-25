// import React from 'react'
import HeaderText from "../../components/HeaderText";
import Or from "../../components/Or";
import BlueTextLink from "../../../../components/ui/BluetextLink";
import { Link } from "react-router-dom";
import AltOnboardingMethods from "../../components/AltOnboardingMethods";
import { useAppForm } from "../../../../utils/services/form";

const Login = () => {
  const loginForm = useAppForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      alert(JSON.stringify(value, null, 2));
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
                error={ isValid ? undefined : errors[0]}
              />
            );
          }}
        />

        <loginForm.AppField
          name="password"
          children={(field) => (
            <field.Input
              placeholder="password"
              type="password"
              name="password"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(event) => field.handleChange(event?.target.value)}
              visibility={true}
            />
          )}
        />

        <span className="text-right">
          <BlueTextLink>
            <Link to={"../forgotpassword"}>Forgot Password</Link>
          </BlueTextLink>
        </span>

        <loginForm.AppForm>
          <loginForm.MainButton submit>Login</loginForm.MainButton>
        </loginForm.AppForm>
      </form>

      <Or />

      <AltOnboardingMethods />
    </div>
  );
};

export default Login;
