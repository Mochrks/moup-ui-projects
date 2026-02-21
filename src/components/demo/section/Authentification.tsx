"use client";

import CodePreview from "../../ui-main/CodePriview";
import { SectionDoc, ComponentBlock } from "@/components/ui-main/SectionDoc";
import { ContentLayout } from "@/layout/ContentLayout";
import {
  ForgotPasswordPage,
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
  SocialLogin,
  TwoFactor,
} from "@/code/sign-in";
import {
  sampleCodeAuth,
  sampleCodeAuthNext,
  sampleCodeAuthHtml,
  sampleCodeRegister,
  sampleCodeSocialLogin,
  sampleCodeTwoFactor,
} from "@/data/code/auth";

const LockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export const Authentification = () => (
  <ContentLayout>
    <SectionDoc
      icon={<LockIcon />}
      iconBg="bg-[#ffe135]"
      title="Authentication"
      componentCount={6}
      description="Production-ready authentication flows built with Shadcn UI and clean, accessible design. Covers every auth screen your app needs — account creation, sign-in, password recovery, social OAuth, and two-factor verification. All components are fully typed, responsive, and copy-paste ready."
      features={[
        "Register with first/last name, email, password confirm & terms toggle",
        "Login with email + password show/hide toggle and remember me switch",
        "Forgot password with descriptive hint alert system",
        "Reset password with strength indicator progress bar",
        "Social OAuth with real Google, GitHub and Discord SVG brand icons",
        "Two-factor OTP with 6-digit auto-advance inputs and countdown timer",
      ]}
      dependencies={[]}
      shadcnDeps={["card", "input", "button", "label", "switch", "badge", "progress"]}
    >
      {/* Register */}
      <ComponentBlock
        title="Register"
        subtitle="Full sign-up form with confirm password"
        features={[
          "First + last name grid",
          "Email field",
          "Password + confirm",
          "Terms switch",
          "Submit CTA",
        ]}
      >
        <div className="w-full lg:w-[65%] mx-auto">
          <CodePreview
            title="Register"
            code={sampleCodeRegister}
            codeNext={`"use client";\n\n${sampleCodeRegister}`}
            codeHtml={sampleCodeAuthHtml}
            language="javascript"
            nameFile="register.tsx"
            preview={<RegisterPage />}
          />
        </div>
      </ComponentBlock>

      {/* Login */}
      <ComponentBlock
        title="Login"
        subtitle="Email + password with show/hide toggle"
        features={[
          "Password visibility toggle",
          "Remember me switch",
          "Forgot password link",
          "Sign-in CTA",
        ]}
      >
        <div className="w-full lg:w-[65%] mx-auto">
          <CodePreview
            title="Login"
            code={sampleCodeAuth}
            codeNext={sampleCodeAuthNext}
            codeHtml={sampleCodeAuthHtml}
            language="javascript"
            nameFile="login.tsx"
            preview={<LoginPage />}
          />
        </div>
      </ComponentBlock>

      {/* Forgot Password */}
      <ComponentBlock
        title="Forgot Password"
        subtitle="Email reset request with hint alert"
        features={["Single email field", "Informational hint banner", "Back to login link"]}
      >
        <div className="w-full lg:w-[65%] mx-auto">
          <CodePreview
            title="Forgot Password"
            code={sampleCodeAuth}
            codeNext={sampleCodeAuthNext}
            codeHtml={sampleCodeAuthHtml}
            language="javascript"
            nameFile="forgot-password.tsx"
            preview={<ForgotPasswordPage />}
          />
        </div>
      </ComponentBlock>

      {/* Reset Password */}
      <ComponentBlock
        title="Reset Password"
        subtitle="New password with strength progress bar"
        features={[
          "New + confirm password fields",
          "Strength indicator bar",
          "Token validation message",
        ]}
      >
        <div className="w-full lg:w-[65%] mx-auto">
          <CodePreview
            title="Reset Password"
            code={sampleCodeAuth}
            codeNext={sampleCodeAuthNext}
            codeHtml={sampleCodeAuthHtml}
            language="javascript"
            nameFile="reset-password.tsx"
            preview={<ResetPasswordPage />}
          />
        </div>
      </ComponentBlock>

      {/* Social Login */}
      <ComponentBlock
        title="Social Login"
        subtitle="Google · GitHub · Discord OAuth buttons"
        features={[
          "Official brand SVG icons",
          "Email fallback option",
          "Divider separator",
          "Large touch targets (h-11)",
        ]}
      >
        <div className="w-full lg:w-[65%] mx-auto">
          <CodePreview
            title="Social Login"
            code={sampleCodeSocialLogin}
            codeNext={`"use client";\n\n${sampleCodeSocialLogin}`}
            codeHtml={sampleCodeAuthHtml}
            language="javascript"
            nameFile="social-login.tsx"
            preview={<SocialLogin />}
          />
        </div>
      </ComponentBlock>

      {/* Two-Factor */}
      <ComponentBlock
        title="Two-Factor Authentication"
        subtitle="6-digit OTP input with countdown timer"
        features={[
          "Auto-advance on digit input",
          "Masked email display",
          "Countdown expiry timer",
          "Resend code link",
        ]}
      >
        <div className="w-full lg:w-[65%] mx-auto">
          <CodePreview
            title="Two-Factor Authentication"
            code={sampleCodeTwoFactor}
            codeNext={`"use client";\n\n${sampleCodeTwoFactor}`}
            codeHtml={sampleCodeAuthHtml}
            language="javascript"
            nameFile="two-factor.tsx"
            preview={<TwoFactor />}
          />
        </div>
      </ComponentBlock>
    </SectionDoc>
  </ContentLayout>
);
