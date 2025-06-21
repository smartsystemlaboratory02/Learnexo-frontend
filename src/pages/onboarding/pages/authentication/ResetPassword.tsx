// import React from 'react'
import HeaderText from "../../components/HeaderText";
import Input from "../../../../components/ui/form/Input";
import MainButton from "../../../../components/ui/MainButton";

const ResetPassword = () => {
  return (
        <div>
          <HeaderText
            title="reset password"
            description="Choose a new password for your account."
          />

          <div className="flex flex-col gap-6 mt-25">
            <Input
              placeholder="Your new password"
              type="password"
              name="email"
              width="full"
              visibility={true}
            />
            <Input
              placeholder="Confirm Your new password"
              type="password"
              name="email"
              width="full"
              visibility={true}
            />

            <MainButton>Reset Password</MainButton>
            <MainButton white  link="/onboarding/auth/login">Back to Login</MainButton>
          </div>
        </div>
  );
};

export default ResetPassword;
