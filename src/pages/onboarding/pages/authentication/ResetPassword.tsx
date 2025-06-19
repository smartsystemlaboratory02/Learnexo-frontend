// import React from 'react'
import HeaderText from "../../components/HeaderText";
import Input from "../../../../components/ui/form/Input";
import MainButton from "../../../../components/ui/MainButton";
import { useNavigate } from "react-router-dom";
import WhiteButton from "../../../../components/ui/WhiteButton";

const ResetPassword = () => {
  const navigate = useNavigate();
  
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
            <MainButton width="full" bg="blue">Reset Password</MainButton>
            <WhiteButton width="full" onClick={() => navigate('/onboarding/auth/login')}>Back to Login</WhiteButton>
          </div>
        </div>
  );
};

export default ResetPassword;
