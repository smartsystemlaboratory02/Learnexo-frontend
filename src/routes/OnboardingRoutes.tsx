import { Route, Routes } from 'react-router-dom'
import SignUp from '../pages/onboarding/pages/authentication/SignUp'
import OnboardingLayout from '../pages/onboarding/OnboardingLayout'
import Login from '../pages/onboarding/pages/authentication/Login'
import ForgotPassword from '../pages/onboarding/pages/authentication/ForgotPassword'
import CheckEmail from '../pages/onboarding/pages/authentication/ForgotPasswordCheckEmail'
import ResetPassword from '../pages/onboarding/pages/authentication/ResetPassword'
import ResetPasswordSuccess from '../pages/onboarding/pages/authentication/ResetPasswordSuccess'

const OnboardingRoutes = () => {
    return (
        <Routes>
            <Route path='/onboarding/auth' element={<OnboardingLayout />}>
                <Route path='signup' element={<SignUp />} />
                <Route path='login' element={<Login />} />
                <Route path='forgotpassword' element={<ForgotPassword />} />
                <Route path='forgotpassword/checkemail' element={<CheckEmail />} />
                <Route path='resetpassword' element={<ResetPassword />} />
                <Route path='resetpassword/success' element={<ResetPasswordSuccess />} />
            </Route>
        </Routes>
    )
}

export default OnboardingRoutes