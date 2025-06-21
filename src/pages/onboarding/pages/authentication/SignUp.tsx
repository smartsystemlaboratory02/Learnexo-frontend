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
import FormRow from "../../../../components/ui/form/FormRow";

const SignUp = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <HeaderText title="create account" description="Already have an account?">
        <BlueTextLink>
          <Link to="../login">Login</Link>
        </BlueTextLink>
      </HeaderText>

      <form className="flex flex-col gap-4 md:gap-6">
        <FormRow>
          <Input placeholder="First name" type="text" name="firstname" half />
          <Input placeholder="last name" type="text" name="lastname" half />
        </FormRow>

        <Input placeholder="Email" type="email" name="email" />
        <Input placeholder="password" type="password" name="email" visibility />
        <Input
          placeholder="confirm password"
          type="password"
          name="email"
          visibility
        />
        <Select placeholder="select role" name="gender" options={roleOptions} />

        <div className="text-blue-6 text-[14px] flex gap-2 items-center md:mb-6">
          <Check />
          <p>
            I agree to LearNEXO <BlueTextLink>Terms of service</BlueTextLink>{" "}
            and <BlueTextLink>Privacy Policy</BlueTextLink>
          </p>
        </div>

        <MainButton submit>Create account</MainButton>
      </form>

      <Or />

      <AltOnboardingMethods />
    </div>
  );
};

export default SignUp;
