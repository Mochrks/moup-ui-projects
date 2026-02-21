// ─── Authentication Code Strings ─────────────────────────────────────────────

export const sampleCodeAuth = `import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export const LoginPage = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="border-2 border-black shadow-[4px_4px_0_0_#000] rounded-xl">
        <CardHeader className="space-y-1 pb-4">
          <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center font-black text-[#ffe135]">M</div>
          <CardTitle className="text-2xl font-black">Sign in</CardTitle>
          <CardDescription>Enter your credentials to continue.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="font-bold text-xs uppercase tracking-wide">Email</Label>
              <Input id="email" placeholder="alex@company.com" type="email" className="border-2 border-black" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password" className="font-bold text-xs uppercase tracking-wide">Password</Label>
              <Input id="password" placeholder="Your password" type={showPass ? "text" : "password"} className="border-2 border-black" />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="remember" className="data-[state=checked]:bg-black" />
              <Label htmlFor="remember" className="text-xs">Remember me for 30 days</Label>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <Button className="w-full font-black border-2 border-black shadow-[3px_3px_0_0_#000] hover:shadow-none transition-all bg-black text-white">
            Sign In →
          </Button>
          <p className="text-xs text-center">
            Don't have an account? <span className="font-bold underline cursor-pointer">Create one</span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};`.trim();

export const sampleCodeAuthNext = `"use client";

${sampleCodeAuth}`.trim();

export const sampleCodeAuthHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Login — MoupUI</title>
</head>
<body style="display:flex;align-items:center;justify-content:center;min-height:100vh;background:#f9fafb;margin:0;">
  <div style="width:100%;max-width:400px;border:2px solid black;border-radius:12px;padding:24px;box-shadow:4px 4px 0 0 #000;background:white;">
    <h2 style="font-weight:900;font-size:1.5rem;margin-bottom:4px;">Sign in</h2>
    <p style="color:#6b7280;font-size:.875rem;margin-bottom:20px;">Enter your credentials to continue.</p>
    <form style="display:flex;flex-direction:column;gap:16px;">
      <div>
        <label style="font-size:.75rem;font-weight:800;text-transform:uppercase;letter-spacing:.05em;">Email</label>
        <input type="email" placeholder="alex@company.com" style="width:100%;margin-top:6px;padding:8px 12px;border:2px solid black;border-radius:8px;box-sizing:border-box;" />
      </div>
      <div>
        <label style="font-size:.75rem;font-weight:800;text-transform:uppercase;letter-spacing:.05em;">Password</label>
        <input type="password" placeholder="Your password" style="width:100%;margin-top:6px;padding:8px 12px;border:2px solid black;border-radius:8px;box-sizing:border-box;" />
      </div>
      <button type="submit" style="width:100%;padding:10px;background:black;color:white;font-weight:900;border:2px solid black;border-radius:8px;cursor:pointer;box-shadow:3px 3px 0 0 rgba(0,0,0,0.3);">
        Sign In →
      </button>
    </form>
  </div>
</body>
</html>`.trim();

export const sampleCodeRegister = `import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

export const RegisterPage = () => (
  <div className="w-full max-w-md mx-auto">
    <Card className="border-2 border-black shadow-[4px_4px_0_0_#000] rounded-xl">
      <CardHeader className="space-y-1 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-lg bg-[#ffe135] border-2 border-black flex items-center justify-center font-black text-sm">M</div>
          <Badge variant="outline" className="border-black font-bold text-xs">MoupUI</Badge>
        </div>
        <CardTitle className="text-2xl font-black">Create account</CardTitle>
        <CardDescription>Join thousands of developers building with MoupUI.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="font-bold text-xs uppercase tracking-wide">First Name</Label>
              <Input placeholder="Alex" className="border-2 border-black" />
            </div>
            <div className="space-y-1.5">
              <Label className="font-bold text-xs uppercase tracking-wide">Last Name</Label>
              <Input placeholder="Johnson" className="border-2 border-black" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label className="font-bold text-xs uppercase tracking-wide">Email</Label>
            <Input placeholder="alex@company.com" type="email" className="border-2 border-black" />
          </div>
          <div className="space-y-1.5">
            <Label className="font-bold text-xs uppercase tracking-wide">Password</Label>
            <Input placeholder="Min. 8 characters" type="password" className="border-2 border-black" />
          </div>
          <div className="flex items-center space-x-2 pt-1">
            <Switch id="terms" className="data-[state=checked]:bg-black" />
            <Label htmlFor="terms" className="text-xs">I agree to the Terms of Service</Label>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full font-black border-2 border-black shadow-[3px_3px_0_0_#000] hover:shadow-none transition-all bg-[#ffe135] text-black">
          Create Account →
        </Button>
      </CardFooter>
    </Card>
  </div>
);`.trim();

export const sampleCodeSocialLogin = `import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const SocialLogin = () => (
  <div className="w-full max-w-md mx-auto">
    <Card className="border-2 border-black shadow-[4px_4px_0_0_#000] rounded-xl">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-black">Continue with</CardTitle>
        <CardDescription>Choose your preferred sign-in method.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {[
          { name: "Google", color: "bg-white text-black", icon: "🔍" },
          { name: "GitHub", color: "bg-gray-900 text-white", icon: "🐙" },
          { name: "Discord", color: "bg-[#5865F2] text-white", icon: "💬" },
        ].map((p) => (
          <Button
            key={p.name}
            variant="outline"
            className={\`w-full justify-start gap-3 border-2 border-black shadow-[2px_2px_0_0_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all font-bold \${p.color}\`}
          >
            <span className="text-xl">{p.icon}</span>
            Continue with {p.name}
          </Button>
        ))}
      </CardContent>
    </Card>
  </div>
);`.trim();

export const sampleCodeTwoFactor = `import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const TwoFactor = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="border-2 border-black shadow-[4px_4px_0_0_#000] rounded-xl">
        <CardHeader className="text-center pb-4">
          <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center mx-auto mb-2 text-3xl">🛡️</div>
          <CardTitle className="text-2xl font-black">Two-Factor Auth</CardTitle>
          <CardDescription>Enter the 6-digit code sent to your email.</CardDescription>
        </CardHeader>
        <CardContent>
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
                className="w-11 h-12 text-center text-xl font-black border-2 border-black rounded-lg shadow-[2px_2px_0_0_#000] focus:border-[#ffe135] outline-none"
              />
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full font-black border-2 border-black shadow-[3px_3px_0_0_#000] hover:shadow-none transition-all bg-black text-white">
            Verify Code →
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};`.trim();
