// import React from 'react'
import Or from "../../components/Or";
import HeaderText from "../../components/HeaderText";
import MainButton from "../../../../components/ui/MainButton";
import { useLocation, useNavigate } from "react-router-dom";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { confirmOTPRequest } from "@/utils/queries/auth";
import { toast } from "sonner";
import Spinner from "@/components/ui/Spinner";

const CheckEmail = () => {
  const location = useLocation();
  const { email } = location.state;
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
    mutationFn: confirmOTPRequest,
    mutationKey: ["confirmForgotPasswordOTPRequest"],
  });

  useEffect(() => {
    if (isError) {
      toast.error(error.message);
    }
  }, [isError, error]);

  if (isSuccess) {
    console.log(response);
    toast.success("OTP verified successfully");
    setTimeout(() => {
      navigate("../resetpassword", { state: { email } });
    }, 2000);
  }

  return (
    <div className="flex flex-col gap-6">
      <HeaderText
        title="check your email"
        description="We have sent an email with password reset information to n****e@e***e.com"
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

      <div className="flex flex-col gap-12">
        <MainButton
          onClick={() => {
            confirmOTPMutation({ otp: otpValue, email });
          }}
        >
          {isPending ? <Spinner /> : "Send OTP"}
        </MainButton>
      </div>

      <div className="flex flex-col gap-6 ">
        <p>Didn't receive the email? Check spam or promotion folder</p>
        <Or />
        <MainButton>Resend Email</MainButton>
        <MainButton white link="/onboarding/auth/login">
          Back to Login
        </MainButton>
      </div>
    </div>
  );
};

export default CheckEmail;

// import React from 'react'
