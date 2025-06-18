// import React from 'react'
import HeaderText from "../components/HeaderText";
import Input from "../../../components/ui/form/Input";
import OnboardingBody from "../components/OnboardingBody";
import MainButton from "../../../components/ui/MainButton";
import Or from "../components/Or";

const Login = () => {
  return (
    <div>
      <OnboardingBody>
        <HeaderText title="welcome back" description="Don't have an account?">
          Sign Up
        </HeaderText>

        <div className="flex flex-col space-y-4 my-[60px]">
          <Input placeholder="Email" type="email" name="email" width="full" />
          <Input
            placeholder="password"
            type="password"
            name="email"
            width="full"
            visibility={true}
          />

          <div className="text-blue-6 text-[14px] flex gap-2 items-center justify-end">
            <span className="text-blue-2">
              Forgot Password
            </span>
          </div>
        </div>

        <MainButton width="full">Login</MainButton>

        <div className="mt-[60px]">
          <Or />
        </div>
      </OnboardingBody>
    </div>
  );
};

export default Login;
