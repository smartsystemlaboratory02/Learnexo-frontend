import { useEffect } from "react";
import successimg from "../../../../assets/images/success.png";
import MainButton from "../../../../components/ui/MainButton";
import { useNavigate } from "react-router-dom";

const ResetPasswordSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const navTimeout = setTimeout(() => {
      navigate('/onboarding/test/')
    }, 3000);

    return () => clearTimeout(navTimeout);
  }, []);

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
