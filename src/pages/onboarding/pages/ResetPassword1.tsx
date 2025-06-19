// import React from 'react'
import HeaderText from "../components/HeaderText";
import Input from "../../../components/ui/form/Input";
import MainButton from "../../../components/ui/MainButton";

const ResetPassword = () => {
  return (
      <div className="flex items-center justify-center h-full">
        <div>
          <HeaderText
            title="reset password"
            description="Choose a new password for your account."
          />

          <div className="flex flex-col space-y-4 my-[60px]">
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
          </div>
          <div className="flex flex-col items-center justify-center gap-7">
            <MainButton width="full" bg="blue">
              Reset Password
            </MainButton>
          </div>
        </div>
      </div>
  );
};

export default ResetPassword;
