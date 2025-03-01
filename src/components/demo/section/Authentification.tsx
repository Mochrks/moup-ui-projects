import { ForgotPasswordPage, LoginPage, RegisterPage, ResetPasswordPage, SocialLogin, TwoFactor } from "@/code/sign-in"
import CodePreview from "../../ui-other/CodePriview"

export const Authentification = () => {

    const sampleCode = `sample code`.trim()

    return (
        <div className='min-h-screen md:min-h-20 flex flex-col items-center justify-center py-20 px-3 '>
            <div className="p-6 start w-full">
                <h2 className="text-2xl font-bold mb-4">Authentication</h2>
                <p className="mb-4">
                    Secure and seamless authentication experiences with our user-friendly templates.
                </p>

                <h3 className="text-xl font-semibold mb-4">Easy to Use</h3>
                <p className="mb-4">
                    Our authentication templates are designed with usability in mind, featuring clear and concise language, intuitive input fields, and responsive designs that adapt to any device.
                    Implement our authentication components quickly and easily, customizing the design to suit your brand and connecting them to your authentication logic.
                </p>
            </div>

            <div className='w-full flex flex-col space-y-10 items-center justify-center'>
                <div className="md: w-full lg:w-[60%]">
                    <CodePreview
                        title="Register"
                        code={sampleCode}
                        language="javascript"
                        nameFile='register.tsx'
                        preview={<RegisterPage />}
                    />
                </div>
                <div className="md: w-full lg:w-[60%]">
                    <CodePreview
                        title="Login"
                        code={sampleCode}
                        language="javascript"
                        nameFile='login.tsx'
                        preview={<LoginPage />}
                    />
                </div>
                <div className="md: w-full lg:w-[60%]">
                    <CodePreview
                        title="Forgot Password"
                        code={sampleCode}
                        language="javascript"
                        nameFile='forgot-password.tsx'
                        preview={<ForgotPasswordPage />}
                    />
                </div>
                <div className="md: w-full lg:w-[60%]">
                    <CodePreview
                        title="Reset Password"
                        code={sampleCode}
                        language="javascript"
                        nameFile='reset-password.tsx'
                        preview={<ResetPasswordPage />}
                    />
                </div>
                <div className="md: w-full lg:w-[60%]">
                    <CodePreview
                        title="Social Login"
                        code={sampleCode}
                        language="javascript"
                        nameFile='social-login.tsx'
                        preview={<SocialLogin />}
                    />
                </div>
                <div className="md: w-full lg:w-[60%]">
                    <CodePreview
                        title="Two-Factor Authentication"
                        code={sampleCode}
                        language="javascript"
                        nameFile='two-factor.tsx'
                        preview={<TwoFactor />}
                    />
                </div>
            </div>
        </div>
    )
}
