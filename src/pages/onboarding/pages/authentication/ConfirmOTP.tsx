// import React from 'react'
import HeaderText from "../../components/HeaderText";
import MainButton from "../../../../components/ui/MainButton";
import { useLocation, useNavigate } from "react-router-dom";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { ConfirmSignUpOTP } from "@/utils/queries/auth";

const ConfirmOTP = () => {
  const location = useLocation();
  const { email } = location.state;
  console.log(email);
  const navigate = useNavigate();
  const [otpValue, setOtpValue] = useState<string>("");

  const {
    mutate: confirmOTPMutation,
    data: response,
    isPending,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationFn: ConfirmSignUpOTP,
    mutationKey: ["confirmSignupOTPRequest"],
  });

  return (
    <div className="flex flex-col gap-12">
      <HeaderText
        title="Confirm OTP"
        description="Enter the OTP sent to your email to veriffy your signup status."
      />

      <InputOTP
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS}
        value={otpValue}
        onChange={(value) => setOtpValue(value)}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

      {/* <div className="flex flex-col gap-6 mt-25">
        <MainButton onClick={() => navigate("checkemail")}>Send</MainButton>{" "}
        Add timeout
        <MainButton white link="/onboarding/auth/login">
          Back to Login
        </MainButton>
      </div> */}
    </div>
  );
};

export default ConfirmOTP;
