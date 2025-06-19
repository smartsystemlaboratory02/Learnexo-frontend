import WhiteButton from "../../../components/ui/WhiteButton";
import googlelogo from "../../../assets/images/google-logo.png";
import applelogo from "../../../assets/images/apple-logo.png";

const AltOnboardingMethods = () => {
  return (
    <div className="flex flex-col gap-4 mt-[30px]">
        <WhiteButton width="full">
          <span className="mx-auto flex items-center gap-4 w-fit">
            <span>
              <img src={googlelogo} alt="google" className="w-fit h-fit" />
            </span>
            <p>Continue with Google</p>
          </span>
        </WhiteButton>
        <WhiteButton width="full">
          <span className="mx-auto flex items-center gap-4 w-fit">
            <span>
              <img src={applelogo} alt="apple" className="w-fit h-fit" />
            </span>
            <p>Continue with Apple</p>
          </span>
        </WhiteButton>
      </div>
  )
}

export default AltOnboardingMethods