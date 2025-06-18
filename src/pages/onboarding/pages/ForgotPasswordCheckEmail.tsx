// import React from 'react'
import HeaderText from "../components/HeaderText";
import Input from "../../../components/ui/form/Input";
import OnboardingBody from "../components/OnboardingBody";
import MainButton from "../../../components/ui/MainButton";

const CheckEmail = () => {
  return (
    <OnboardingBody>
      <div className="flex items-center justify-center h-full">
        <div>
          <HeaderText
            title="check your email"
            description="We have sent an email with password reset information to n****e@e***e.com"
          />

          <div className="flex flex-col space-y-7 mt-24">
            <p>Didn't receive the email? Check spam or promotion folder or</p>
            <div className="flex flex-col items-center justify-center gap-7">
              <MainButton width="full">Resend Email</MainButton>
            </div>
          </div>
        </div>
      </div>
    </OnboardingBody>
  );
};

export default CheckEmail;
