// import React from 'react'
import HeaderText from "../../components/HeaderText";
import Input from "../../../../components/ui/form/Input";
import MainButton from "../../../../components/ui/MainButton";
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

            <MainButton onClick={() => navigate('checkemail')}>Send</MainButton> {/* Add timeout */}
            <MainButton white link="/onboarding/auth/login">Back to Login</MainButton>
          </div>
        </div>
  );
};

export default ForgotPassword;
