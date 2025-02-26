
import CodePreview from "../CodePriview"
import { Button } from "@/components/ui-shadcn/button"
import { Input } from "@/components/ui-shadcn/input"
import { Label } from "@/components/ui-shadcn/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui-shadcn/card"
import { Switch } from '@/components/ui-shadcn/switch'

export const SignIn = () => {


    const RegisterPage = () => (
        <div>
            <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>Create a new account</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Enter your name" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="youremail@example.com" type="email" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" placeholder="Create a password" type="password" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="confirm-password">Confirm Password</Label>
                            <Input id="confirm-password" placeholder="Confirm your password" type="password" />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Register</Button>
            </CardFooter>
        </div>
    )

    const LoginPage = () => (
        <div>
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="youremail@example.com" type="email" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" placeholder="Enter your password" type="password" />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex ">
                <Button className='w-full'>Login</Button>
            </CardFooter>
        </div>
    )

    const ForgotPasswordPage = () => (
        <div>
            <CardHeader>
                <CardTitle>Forgot Password</CardTitle>
                <CardDescription>Enter your email to reset your password</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="Enter your email" type="email" />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Send Reset Link</Button>
            </CardFooter>
        </div>
    )
    const ResetPasswordPage = () => (
        <div>
            <CardHeader>
                <CardTitle>Reset Password</CardTitle>
                <CardDescription>Enter your new password</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="old-password">Old Password</Label>
                            <Input id="old-password" placeholder="Enter old password" type="password" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="new-password">New Password</Label>
                            <Input id="new-password" placeholder="Enter new password" type="password" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="confirm-new-password">Confirm New Password</Label>
                            <Input id="confirm-new-password" placeholder="Confirm new password" type="password" />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Reset Password</Button>
            </CardFooter>
        </div>
    )




    const SocialLogin = () => {
        return (
            <>
                {/* 1. Social Login Component */}
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Social Login
                </h2>
                <Card>
                    <CardHeader>
                        <CardTitle>Login with Social Media</CardTitle>
                        <CardDescription>Choose your preferred social login method</CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center space-x-4">
                        <Button variant="outline"><svg className="w-5 h-5 mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /><path fill="currentColor" d="M1 1h22v22H1z" /></svg>Google</Button>
                        <Button variant="outline"><svg className="w-5 h-5 mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" /></svg>Facebook</Button>
                        <Button variant="outline"><svg className="w-5 h-5 mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" /></svg>Twitter</Button>
                    </CardContent>
                </Card>
            </>
        )
    }

    const TwoFactor = () => {
        return (
            <>
                {/* 2. Two-Factor Authentication Setup */}
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Two-Factor Authentication
                </h2>
                <Card>
                    <CardHeader>
                        <CardTitle>Two-Factor Authentication</CardTitle>
                        <CardDescription>Enhance your account security</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center space-x-2">
                            <Switch id="2fa" />
                            <Label htmlFor="2fa">Enable 2FA</Label>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                            We'll send a code to your phone each time you log in.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Set Up 2FA</Button>
                    </CardFooter>
                </Card>
            </>
        )
    }



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
