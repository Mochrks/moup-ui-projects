import { useState } from "react";
import { Button } from "@/components/ui-shadcn/button";
import { Input } from "@/components/ui-shadcn/input";
import { Label } from "@/components/ui-shadcn/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui-shadcn/card";
import { Switch } from "@/components/ui-shadcn/switch";
import { Badge } from "@/components/ui-shadcn/badge";

// ─── Register Page ────────────────────────────────────────────────────────────
export const RegisterPage = () => (
  <div className="w-full max-w-md mx-auto">
    <Card>
      <CardHeader className="space-y-1 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
            M
          </div>
          <Badge variant="secondary" className="text-xs">
            MoupUI
          </Badge>
        </div>
        <CardTitle className="text-2xl">Create account</CardTitle>
        <CardDescription>Join thousands of developers building with MoupUI.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="reg-firstname">First Name</Label>
              <Input id="reg-firstname" placeholder="Alex" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="reg-lastname">Last Name</Label>
              <Input id="reg-lastname" placeholder="Johnson" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="reg-email">Email</Label>
            <Input id="reg-email" placeholder="alex@company.com" type="email" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="reg-password">Password</Label>
            <Input id="reg-password" placeholder="Min. 8 characters" type="password" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="reg-confirm">Confirm Password</Label>
            <Input id="reg-confirm" placeholder="Repeat your password" type="password" />
          </div>
          <div className="flex items-center space-x-2 pt-1">
            <Switch id="terms" />
            <Label htmlFor="terms" className="text-sm text-muted-foreground font-normal">
              I agree to the{" "}
              <span className="font-medium text-foreground underline cursor-pointer">
                Terms of Service
              </span>
            </Label>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <Button className="w-full">Create Account</Button>
        <p className="text-sm text-center text-muted-foreground">
          Already have an account?{" "}
          <span className="font-medium text-foreground underline cursor-pointer">Sign in</span>
        </p>
      </CardFooter>
    </Card>
  </div>
);

// ─── Login Page ───────────────────────────────────────────────────────────────
export const LoginPage = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="space-y-1 pb-4">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
              M
            </div>
            <Badge variant="outline" className="text-xs">
              Welcome back
            </Badge>
          </div>
          <CardTitle className="text-2xl">Sign in</CardTitle>
          <CardDescription>Enter your credentials to continue.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="login-email">Email</Label>
              <Input id="login-email" placeholder="alex@company.com" type="email" />
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="login-password">Password</Label>
                <span className="text-xs text-muted-foreground underline cursor-pointer hover:text-foreground">
                  Forgot?
                </span>
              </div>
              <div className="relative">
                <Input
                  id="login-password"
                  placeholder="Your password"
                  type={showPass ? "text" : "password"}
                  className="pr-16"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-xs"
                >
                  {showPass ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="remember" />
              <Label htmlFor="remember" className="text-sm text-muted-foreground font-normal">
                Remember me for 30 days
              </Label>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <Button className="w-full">Sign In</Button>
          <p className="text-sm text-center text-muted-foreground">
            Don't have an account?{" "}
            <span className="font-medium text-foreground underline cursor-pointer">Create one</span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

// ─── Forgot Password Page ─────────────────────────────────────────────────────
export const ForgotPasswordPage = () => (
  <div className="w-full max-w-md mx-auto">
    <Card>
      <CardHeader className="space-y-1 pb-4">
        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-2 text-2xl">
          🔐
        </div>
        <CardTitle className="text-2xl">Forgot password?</CardTitle>
        <CardDescription>
          No worries! Enter your email and we'll send you a reset link.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="forgot-email">Email Address</Label>
            <Input id="forgot-email" placeholder="alex@company.com" type="email" />
          </div>
          <div className="rounded-md bg-muted p-3">
            <p className="text-xs text-muted-foreground">
              💡 Check your spam folder if you don't receive the email within 5 minutes.
            </p>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <Button className="w-full">Send Reset Link</Button>
        <p className="text-sm text-center text-muted-foreground">
          Remembered it?{" "}
          <span className="font-medium text-foreground underline cursor-pointer">
            Back to sign in
          </span>
        </p>
      </CardFooter>
    </Card>
  </div>
);

// ─── Reset Password Page ──────────────────────────────────────────────────────
export const ResetPasswordPage = () => (
  <div className="w-full max-w-md mx-auto">
    <Card>
      <CardHeader className="space-y-1 pb-4">
        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-2 text-2xl">
          🔑
        </div>
        <CardTitle className="text-2xl">Set new password</CardTitle>
        <CardDescription>
          Must be at least 8 characters and include uppercase letters and numbers.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="new-pass">New Password</Label>
            <Input id="new-pass" placeholder="Create strong password" type="password" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="confirm-pass">Confirm Password</Label>
            <Input id="confirm-pass" placeholder="Repeat new password" type="password" />
          </div>
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Password strength</p>
            <div className="flex gap-1">
              {["bg-red-400", "bg-yellow-400", "bg-yellow-400", "bg-muted"].map((c, i) => (
                <div key={i} className={`flex-1 h-1.5 rounded-full ${c}`} />
              ))}
            </div>
            <p className="text-xs text-muted-foreground">Medium — add numbers to strengthen</p>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Update Password</Button>
      </CardFooter>
    </Card>
  </div>
);

// ─── SVG Brand Icons ──────────────────────────────────────────────────────────
const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#EA4335"
      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
    />
    <path
      fill="#4285F4"
      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
    />
    <path
      fill="#FBBC05"
      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
    />
    <path
      fill="#34A853"
      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
    />
  </svg>
);

const GitHubIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const DiscordIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 127.14 96.36"
    xmlns="http://www.w3.org/2000/svg"
    fill="#5865F2"
  >
    <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0a105.89 105.89 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15zM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69z" />
  </svg>
);

// ─── Social Login ─────────────────────────────────────────────────────────────
export const SocialLogin = () => (
  <div className="w-full max-w-md mx-auto">
    <Card>
      <CardHeader className="text-center pb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </div>
        <CardTitle className="text-2xl">Continue with</CardTitle>
        <CardDescription>Choose your preferred sign-in method.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2.5">
        <Button
          variant="outline"
          className="w-full justify-start gap-3 h-11 border hover:bg-gray-50 transition-colors"
        >
          <GoogleIcon />
          <span className="flex-1 text-left font-medium">Continue with Google</span>
        </Button>
        <Button
          variant="outline"
          className="w-full justify-start gap-3 h-11 border hover:bg-gray-50 transition-colors"
        >
          <GitHubIcon />
          <span className="flex-1 text-left font-medium">Continue with GitHub</span>
        </Button>
        <Button
          variant="outline"
          className="w-full justify-start gap-3 h-11 border hover:bg-gray-50 transition-colors"
        >
          <DiscordIcon />
          <span className="flex-1 text-left font-medium">Continue with Discord</span>
        </Button>
        <div className="relative my-3">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-card px-3 text-muted-foreground tracking-wide uppercase">or</span>
          </div>
        </div>
        <Button variant="secondary" className="w-full h-11">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          Sign in with Email
        </Button>
      </CardContent>
    </Card>
  </div>
);

// ─── Two-Factor Authentication ─────────────────────────────────────────────────
export const TwoFactor = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="text-center space-y-1 pb-4">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-2 text-3xl">
            🛡️
          </div>
          <CardTitle className="text-2xl">Two-Factor Auth</CardTitle>
          <CardDescription>
            Enter the 6-digit code sent to{" "}
            <span className="font-medium text-foreground">al***@company.com</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="flex justify-center gap-2">
            {code.map((val, i) => (
              <input
                key={i}
                value={val}
                maxLength={1}
                onChange={(e) => {
                  const next = [...code];
                  next[i] = e.target.value;
                  setCode(next);
                }}
                className="w-11 h-12 text-center text-xl font-semibold border rounded-md focus:outline-none focus:ring-2 focus:ring-ring bg-background transition-all"
              />
            ))}
          </div>
          <div className="rounded-md bg-muted p-3 flex items-center gap-2">
            <span>⏱️</span>
            <p className="text-xs text-muted-foreground">
              Code expires in <strong className="text-foreground">04:32</strong>
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <Button className="w-full">Verify Code</Button>
          <p className="text-sm text-center text-muted-foreground">
            Didn't receive it?{" "}
            <span className="font-medium text-foreground underline cursor-pointer">
              Resend code
            </span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
