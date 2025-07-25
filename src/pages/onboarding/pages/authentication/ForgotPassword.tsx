// import React from 'react'
import HeaderText from "../../components/HeaderText";
import MainButton from "../../../../components/ui/MainButton";
import { useNavigate } from "react-router-dom";
import { useAppForm } from "@/utils/services/form";
import { sendOTPToEmailRequest } from "@/utils/queries/auth";
import { useEffect } from "react";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import Spinner from "@/components/ui/Spinner";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const {
    mutate: sendOTPMutation,
    data: response,
    isPending,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationFn: sendOTPToEmailRequest,
    mutationKey: ["sendForgetPasswordOTP"],
  });

  useEffect(() => {
    if (isError) {
      toast.error(error.message);
    }
  }, [isError, error]);

  const emailForm = useAppForm({
    defaultValues: {
      email: "",
    },
    onSubmit: ({ value }) => {
      sendOTPMutation(value);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("OTP sent successfully");
      const email = emailForm.getFieldValue("email");
      setTimeout(() => {
        navigate("checkemail", { state: { email } });
      }, 2000);
    }
  }, [isSuccess, response, emailForm, navigate]);

  return (
    <div>
      <HeaderText
        title="forgot password"
        description="Enter the email you used to create your account so we can send you instructions on how to reset your password."
      />

      <form
        className="flex flex-col gap-6 mt-25"
        onSubmit={(event) => {
          event.preventDefault();
          emailForm.handleSubmit();
        }}
      >
        <emailForm.AppField
          name="email"
          validators={{
            onBlur: ({ value }) => {
              if (!value) {
                return "Email is required";
              }
              if (!value.includes("@")) {
                return "Invalid email";
              }
              return undefined;
            },
          }}
          children={(field) => {
            const { value, meta } = field.state;
            const { isValid, errors } = meta;

            return (
              <field.Input
                placeholder="Email"
                type="email"
                name="email"
                value={value}
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value)}
                error={isValid ? undefined : errors[0]}
              />
            );
          }}
        />

        <MainButton submit>{isPending ? <Spinner /> : "Send OTP"}</MainButton>
        <MainButton white link="/onboarding/auth/login">
          Back to Login
        </MainButton>
      </form>
    </div>
  );
};

export default ForgotPassword;
