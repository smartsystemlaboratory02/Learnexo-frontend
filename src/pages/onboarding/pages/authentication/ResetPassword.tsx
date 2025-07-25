import HeaderText from "../../components/HeaderText";
import MainButton from "../../../../components/ui/MainButton";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppForm } from "@/utils/services/form";
import { resetPasswordRequest } from "@/utils/queries/auth";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";
import Spinner from "@/components/ui/Spinner";

const ResetPassword = () => {
  const location = useLocation();
  const { email } = location.state;
  console.log(email);
  const navigate = useNavigate();

  const {
    mutate: resetPasswordMutation,
    isPending,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationFn: resetPasswordRequest,
    mutationKey: ["resetPasswordRequest"],
  });

  const resetPasswordForm = useAppForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    onSubmit: ({ value }) => {
      const { password } = value;
      console.log(password, email)
      resetPasswordMutation({ password, email });
    },
  });

  useEffect(() => {
    if (isError) {
      toast.error(error.message);
    }
  }, [isError, error]);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        navigate("/resetpassword/success");
      }, 2000);
    }
  }, [isSuccess]);

  return (
    <div>
      <HeaderText
        title="reset password"
        description="Choose a new password for your account."
      />

      <form
        className="flex flex-col gap-6 mt-25"
        onSubmit={(event) => {
          event.preventDefault();
          resetPasswordForm.handleSubmit();
        }}
      >
        <resetPasswordForm.AppField
          name="password"
          validators={{
            onBlur: ({ value }) => {
              if (!value) return "Password is required";
              if (value.length < 6)
                return "Password must be at least 6 characters";
              return undefined;
            },
          }}
          children={(field) => (
            <field.Input
              placeholder="Password"
              type="password"
              name="password"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              error={
                !field.state.meta.isValid
                  ? field.state.meta.errors[0]
                  : undefined
              }
              visibility
            />
          )}
        />

        <resetPasswordForm.AppField
          name="confirmPassword"
          validators={{
            onChangeListenTo: ["password"],
            onChange: ({ value, fieldApi }) => {
              if (value !== fieldApi.form.getFieldValue("password")) {
                return "Passwords do not match";
              }
              return undefined;
            },
          }}
          children={(field) => (
            <field.Input
              placeholder="Confirm password"
              type="password"
              name="confirmPassword"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              error={
                !field.state.meta.isValid
                  ? field.state.meta.errors[0]
                  : undefined
              }
              visibility
            />
          )}
        />
        <MainButton submit>
          {isPending ? <Spinner /> : "Reset Password"}
        </MainButton>
        <MainButton white link="/onboarding/auth/login">
          Back to Login
        </MainButton>
      </form>
    </div>
  );
};

export default ResetPassword;
