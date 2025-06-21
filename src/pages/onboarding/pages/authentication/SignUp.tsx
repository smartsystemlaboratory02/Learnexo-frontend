import { useState } from "react";
import HeaderText from "../../components/HeaderText";
import Input from "../../../../components/ui/form/Input";
import Select from "../../../../components/ui/form/Select";
import Check from "../../../../components/ui/form/Check";
import MainButton from "../../../../components/ui/MainButton";
import Or from "../../components/Or";
import BlueTextLink from "../../../../components/ui/BluetextLink";
import { roleOptions } from "../../service";
import { Link } from "react-router-dom";
import AltOnboardingMethods from "../../components/AltOnboardingMethods";
import FullScreenOverlay from "../../../../components/ui/FullScreenOverlay";
import EmailConfirmation from "../../components/EmailConfirmation";

const SignUp = () => {
  const [isOverlayOpen, setOverlayOpen] = useState<boolean>(true)

  return (
    <div>
      <HeaderText
        title="create account"
        description="Already have an account?"
      >
        <BlueTextLink><Link to='../login'>Login</Link></BlueTextLink>
      </HeaderText>

      <div className="flex flex-col gap-4 my-[60px]">
        <div className="flex justify-between items-center">
          <Input
            placeholder="First name"
            type="text"
            name="firstname"
            half
          />
          <Input
            placeholder="last name"
            type="text"
            name="lastname"
            half
          />
        </div>
        <Input placeholder="Email" type="email" name="email" />
        <Input
          placeholder="password"
          type="password"
          name="email"
          visibility
        />
        <Input
          placeholder="confirm password"
          type="password"
          name="email"
          visibility
        />
        <Select placeholder="select role" name="gender" options={roleOptions}/>

        <div className="text-blue-6 text-[14px] flex gap-2 items-center">
          <Check />
          <p>
            I agree to LearNEXO{" "}
            <BlueTextLink>Terms of service</BlueTextLink> and{" "}
            <BlueTextLink>Privacy Policy</BlueTextLink>
          </p>
        </div>
      </div>

      <MainButton>Create account</MainButton>

      <div className="mt-[60px]">
        <Or />
      </div>

      <AltOnboardingMethods />

      <FullScreenOverlay isOpen={isOverlayOpen} onClose={() => setOverlayOpen(false)} ><EmailConfirmation/></FullScreenOverlay>
    </div>
  );
};

export default SignUp;
