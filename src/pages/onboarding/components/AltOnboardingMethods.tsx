import googlelogo from "../../../assets/images/google-logo.png";
import applelogo from "../../../assets/images/apple-logo.png";
import MainButton from "../../../components/ui/MainButton";

const AltOnboardingMethods = () => {
  return (
    <div className="flex flex-col gap-4 md:mt-[30px] mlg:my-0 lgd:mt-[30px]">
        <MainButton white>
          <span className="mx-auto flex items-center gap-4 w-fit">
            <span>
              <img src={googlelogo} alt="google" className="w-fit h-fit" />
            </span>
            <p>Continue with Google</p>
          </span>
        </MainButton>
        <MainButton white>
          <span className="mx-auto flex items-center gap-4 w-fit">
            <span>
              <img src={applelogo} alt="apple" className="w-fit h-fit" />
            </span>
            <p>Continue with Apple</p>
          </span>
        </MainButton>
      </div>
  )
}

export default AltOnboardingMethods