// import React from 'react'
import HeaderText from "../../components/HeaderText";
import Input from "../../../../components/ui/form/Input";
import MainButton from "../../../../components/ui/MainButton";
import WhiteButton from "../../../../components/ui/WhiteButton";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
        <div>
          <HeaderText
            title="forgot password"
            description="Enter the email you used to create your account so we can send you instructions on how to reset your password."
          />

          <div className="flex flex-col gap-6 mt-25">
            <Input placeholder="Email" type="email" name="email" width="full" />

            <MainButton width="full" onClick={() => navigate('checkemail')}>Send</MainButton>
            <WhiteButton width="full" onClick={() => navigate('/onboarding/auth/login')}>Back to Login</WhiteButton>
          </div>
        </div>
  );
};

export default ForgotPassword;
