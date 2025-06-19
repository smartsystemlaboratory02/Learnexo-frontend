// import React from 'react'
import HeaderText from "../components/HeaderText";
import Input from "../../../components/ui/form/Input";
import MainButton from "../../../components/ui/MainButton";
import Or from "../components/Or";
import BlueTextLink from "../../../components/ui/BluetextLink";
import { Link } from "react-router-dom";
import AltOnboardingMethods from "../components/AltOnboardingMethods";

const Login = () => {
  return (
    <div>
      <HeaderText title="welcome back" description="Don't have an account?">
        <BlueTextLink><Link to={'/onboarding/signup'}>Sign Up</Link></BlueTextLink>
      </HeaderText>

      <div className="flex flex-col space-y-4 mt-[100px]">
        <Input placeholder="Email" type="email" name="email" width="full" />
        <Input
          placeholder="password"
          type="password"
          name="email"
          width="full"
          visibility={true}
        />

        <span className="text-right">
          <BlueTextLink><Link to={'/onboarding/forgotpassword'}>Forgot Password</Link></BlueTextLink>
        </span>
      </div>

      <div className="my-[30px]">
        <MainButton width="full">Login</MainButton>
      </div>

      <Or />

      <AltOnboardingMethods />
    </div>
  );
};

export default Login;
