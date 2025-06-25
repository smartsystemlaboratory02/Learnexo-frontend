// import React from 'react'
import successimg from "../../../../assets/images/success.png";
import MainButton from "../../../../components/ui/MainButton";

const ResetPasswordSuccess = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-fit mx-auto">
        <img src={successimg} alt="success" className="animate-rotate-y" />
      </div>
      <p className="text-black-1 font-semibold text-xl w-fit mx-auto">
        Password reset successfully
      </p>
      <MainButton link="/onboarding/auth/login">Login</MainButton>
    </div>
  );
};

export default ResetPasswordSuccess;
