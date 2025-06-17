// import React from 'react'
import HeaderText from "../components/HeaderText";
import Input from "../../../components/ui/form/Input";
import OnboardingBody from "../components/OnboardingBody";
import Select from "../../../components/ui/form/Select";
import Check from "../../../components/ui/form/Check";
import MainButton from "../../../components/ui/MainButton";
import Or from "../components/Or";

const SignUp = () => {
  return (
    <div>
      <OnboardingBody>
        <HeaderText
          title="create account"
          description="Already have an account?"
        >
          Login
        </HeaderText>

        <div className="flex flex-col space-y-4 my-[60px]">
          <div className="flex justify-between items-center">
            <Input
              placeholder="First name"
              type="text"
              name="firstname"
              width="half"
            />
            <Input
              placeholder="last name"
              type="text"
              name="lastname"
              width="half"
            />
          </div>
          <Input placeholder="Email" type="email" name="email" width="full" />
          <Input
            placeholder="password"
            type="password"
            name="email"
            width="full"
            visibility={true}
          />
          <Input
            placeholder="confirm password"
            type="password"
            name="email"
            width="full"
            visibility={true}
          />
          <Select placeholder="select role" name="gender" width="full" />

          <div className="text-blue-6 text-[14px] flex gap-2 items-center">
            <Check />{" "}
            <p>
              I agree to LearNEXO <span className="text-blue-2">Terms of service</span> and{" "}
              <span className="text-blue-2">Privacy policy</span>
            </p>
          </div>
        </div>

        <MainButton width="full">Create account</MainButton>

        <div className="mt-[60px]">
          <Or />
        </div>


      </OnboardingBody>
    </div>
  );
};

export default SignUp;
