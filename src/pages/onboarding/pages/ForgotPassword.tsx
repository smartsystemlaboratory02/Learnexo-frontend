// import React from 'react'
import HeaderText from "../components/HeaderText";
import Input from "../../../components/ui/form/Input";
import OnboardingBody from "../components/OnboardingBody";
import MainButton from "../../../components/ui/MainButton";

const ForgotPassword = () => {
  return (
    <OnboardingBody>
      <div className="flex items-center justify-center h-full">
        <div>
          <HeaderText
            title="forgot password"
            description="Enter the email you used to create your account so we can send you instructions on how to reset your password."
          />

          <div className="flex flex-col space-y-4 my-[60px]">
            <Input placeholder="Email" type="email" name="email" width="full" />
          </div>
          <div className="flex flex-col items-center justify-center gap-7">
            <MainButton width="full">Send</MainButton>
          </div>
        </div>
      </div>
    </OnboardingBody>
  );
};

export default ForgotPassword;
