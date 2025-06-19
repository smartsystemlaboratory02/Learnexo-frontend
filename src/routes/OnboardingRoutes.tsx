import { Route, Routes } from 'react-router-dom'
import SignUp from '../pages/onboarding/pages/SignUp'
import OnboardingLayout from '../pages/onboarding/OnboardingLayout'
import Login from '../pages/onboarding/pages/Login'
import ForgotPassword from '../pages/onboarding/pages/ForgotPassword'
import CheckEmail from '../pages/onboarding/pages/ForgotPasswordCheckEmail'
import ResetPassword from '../pages/onboarding/pages/ResetPassword1'

const OnboardingRoutes = () => {
    return (
        <Routes>
            <Route path='/onboarding' element={<OnboardingLayout />}>
                <Route path='signup' element={<SignUp />} />
                <Route path='login' element={<Login />} />
                <Route path='forgotpassword' element={<ForgotPassword />} />
                <Route path='forgotpassword/checkemail' element={<CheckEmail />} />
                <Route path='resetpassword' element={<ResetPassword />} />
            </Route>
        </Routes>
    )
}

export default OnboardingRoutes