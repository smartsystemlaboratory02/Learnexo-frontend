// import React from 'react'
import HeaderText from "../../components/HeaderText";
import MainButton from "../../../../components/ui/MainButton";
import Or from "../../components/Or";

const CheckEmail = () => {
  return (
    <div>
      <HeaderText
        title="check your email"
        description="We have sent an email with password reset information to n****e@e***e.com"
      />

      <div className="flex flex-col gap-6 mt-25">
        <p>Didn't receive the email? Check spam or promotion folder</p>
        <Or />
        <MainButton >Resend Email</MainButton>
        <MainButton white link="/onboarding/auth/login">Back to Login</MainButton>
      </div>
    </div>
  );
};

export default CheckEmail;
