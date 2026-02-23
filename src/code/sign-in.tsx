import { useState } from "react";
import {
  Users,
  Shield,
  Zap,
  Key,
  Lock,
  Mail,
  Terminal,
  Activity,
  Globe,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  Rocket,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui-neobrutalism/button";
import { Input } from "@/components/ui-neobrutalism/input";
import { Label } from "@/components/ui-neobrutalism/label";
import { Badge } from "@/components/ui-neobrutalism/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui-neobrutalism/card";
import { Switch } from "@/components/ui-neobrutalism/switch";

// ─── Register Page ────────────────────────────────────────────────────────────
export const RegisterPage = () => (
  <div className="w-full max-w-md mx-auto p-4">
    <Card className="border-4 border-black shadow-[15px_15px_0_0_#000] rounded-[32px] overflow-hidden bg-white group">
      <CardHeader className="space-y-4 pb-8 border-b-4 border-black bg-[#ffe135] relative">
        <div className="absolute top-4 right-4 animate-pulse">
          <Zap className="text-black" size={24} />
        </div>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl border-4 border-black bg-black flex items-center justify-center text-[#ffe135] font-black text-2xl shadow-[4px_4px_0_0_#fff] group-hover:rotate-12 transition-transform">
            M
          </div>
          <div>
            <p className="font-black text-[10px] uppercase tracking-[0.3em] text-black/60 leading-none">
              GRID_INTAKE_V1
            </p>
            <p className="font-black text-sm uppercase tracking-tighter text-black mt-1">
              MOUP_AUTH_CORE
            </p>
          </div>
        </div>
        <CardTitle className="text-4xl font-black italic tracking-tighter leading-none border-l-8 border-black pl-4">
          INITIALIZE_NODE
        </CardTitle>
        <CardDescription className="font-black uppercase italic text-[11px] text-black/70 leading-relaxed tracking-tight">
          Establish permanent identity within the MoupUI ecosystem. Authorized access only.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-10 px-8">
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="reg-firstname"
                className="font-black uppercase italic text-[10px] tracking-widest ml-1"
              >
                IDENT_NAME
              </Label>
              <Input
                id="reg-firstname"
                placeholder="ALEX"
                className="h-14 border-4 border-black font-black uppercase italic shadow-[4px_4px_0_0_#ffe135] focus-visible:ring-0"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="reg-lastname"
                className="font-black uppercase italic text-[10px] tracking-widest ml-1"
              >
                IDENT_SURNAME
              </Label>
              <Input
                id="reg-lastname"
                placeholder="JOHNSON"
                className="h-14 border-4 border-black font-black uppercase italic shadow-[4px_4px_0_0_#ffe135] focus-visible:ring-0"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="reg-email"
              className="font-black uppercase italic text-[10px] tracking-widest ml-1"
            >
              RELAY_ENCRYPTED_EMAIL
            </Label>
            <Input
              id="reg-email"
              placeholder="ALEX@GRID_ARCH.IO"
              type="email"
              className="h-14 border-4 border-black font-black uppercase italic shadow-[4px_4px_0_0_#ffe135] focus-visible:ring-0"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label
                htmlFor="reg-password"
                className="font-black uppercase italic text-[10px] tracking-widest ml-1"
              >
                SECURE_CIPHER_CORE
              </Label>
              <span className="text-[9px] font-black text-black/40">MIN_8_CHARS</span>
            </div>
            <Input
              id="reg-password"
              placeholder="••••••••"
              type="password"
              className="h-14 border-4 border-black font-black uppercase italic shadow-[4px_4px_0_0_#ffe135] focus-visible:ring-0"
            />
          </div>
          <div className="flex items-center space-x-4 pt-4 bg-zinc-50 p-4 border-2 border-black rounded-2xl shadow-[4px_4px_0_0_#000]">
            <Switch
              id="terms"
              className="data-[state=checked]:bg-green-400 border-4 border-black scale-110"
            />
            <Label
              htmlFor="terms"
              className="text-[10px] font-black italic uppercase text-black/70 leading-tight"
            >
              Acknowledge core{" "}
              <span className="text-black underline decoration-2 underline-offset-4 cursor-pointer hover:text-indigo-600 transition-colors">
                Manifesto Protocols
              </span>
            </Label>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-6 p-8 pt-4">
        <Button className="w-full h-16 bg-black text-white border-2 border-black font-black uppercase italic text-xl shadow-[6px_6px_0_0_#ffe135] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all group">
          INIT_REGISTRATION{" "}
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        <p className="text-[10px] text-center font-black uppercase italic tracking-[0.2em] text-black/40">
          ALREADY_IDENTIFIED?{" "}
          <span className="text-indigo-600 underline decoration-4 underline-offset-4 cursor-pointer hover:bg-indigo-50 px-2 py-1 rounded transition-all">
            TERMINAL_LOG_IN
          </span>
        </p>
      </CardFooter>
    </Card>
  </div>
);

// ─── Login Page ───────────────────────────────────────────────────────────────
export const LoginPage = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <Card className="border-4 border-black shadow-[15px_15px_0_0_#000] rounded-[32px] overflow-hidden bg-white group">
        <CardHeader className="space-y-4 pb-8 border-b-4 border-black bg-indigo-400 relative">
          <div className="absolute top-4 right-4 animate-spin duration-[4000ms]">
            <Activity className="text-white" size={24} />
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 border-4 border-black bg-black rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-[4px_4px_0_0_#ffe135] group-hover:-rotate-12 transition-transform">
              M
            </div>
            <div>
              <p className="font-black text-[10px] uppercase tracking-[0.3em] text-white/60 leading-none">
                ACCESS_GATEWAY
              </p>
              <p className="font-black text-sm uppercase tracking-tighter text-white mt-1">
                SECURE_ENVIRONMENT
              </p>
            </div>
          </div>
          <CardTitle className="text-5xl font-black italic tracking-tighter leading-none text-white drop-shadow-[4px_4px_0_#000]">
            IDENT_LOG_IN
          </CardTitle>
          <CardDescription className="text-white font-black italic uppercase text-[11px] tracking-tight leading-relaxed max-w-[280px]">
            Please authorize session entry for encrypted workspace access.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-10 px-8 bg-white">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="login-email"
                className="font-black text-[10px] uppercase italic tracking-[0.2em] text-indigo-600 ml-1"
              >
                RELAY_POINT_EMAIL
              </Label>
              <Input
                id="login-email"
                placeholder="OPERATOR@GRID.IO"
                type="email"
                className="h-14 border-4 border-black bg-white px-6 font-black uppercase italic shadow-[6px_6px_0_0_#000] focus-visible:ring-0"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <Label
                  htmlFor="login-password"
                  className="font-black text-[10px] uppercase italic tracking-[0.2em] text-indigo-600"
                >
                  CIPHER_KEY
                </Label>
                <span className="text-[9px] font-black italic underline underline-offset-4 cursor-pointer hover:text-indigo-600 transition-colors">
                  FORGOT_KEY?
                </span>
              </div>
              <div className="relative">
                <Input
                  id="login-password"
                  placeholder="••••••••"
                  type={showPass ? "text" : "password"}
                  className="h-14 pr-20 border-4 border-black bg-white px-6 font-black uppercase italic shadow-[6px_6px_0_0_#000] focus-visible:ring-0"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 font-black text-[10px] uppercase italic bg-[#ffe135] px-3 py-1.5 border-2 border-black shadow-[3px_3px_0_0_#000] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] rounded-lg transition-all"
                >
                  {showPass ? "HIDE" : "SHOW"}
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4 pt-4 bg-zinc-50 p-4 border-2 border-black rounded-2xl">
              <Switch
                id="remember"
                className="data-[state=checked]:bg-indigo-400 border-4 border-black scale-110"
              />
              <Label
                htmlFor="remember"
                className="text-[10px] font-black italic uppercase text-black/50 tracking-widest"
              >
                PERSISTENT_IDENTITY_LOCK
              </Label>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-6 p-8 bg-white">
          <Button className="w-full h-18 bg-black text-white border-2 border-black font-black text-2xl uppercase italic shadow-[8px_8px_0_0_#indigo-400] shadow-[#818CF8] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
            AUTHORIZE_ACCESS
          </Button>
          <div className="w-full flex items-center gap-4 py-2">
            <div className="h-1 flex-1 bg-black/10 rounded-full" />
            <span className="text-[9px] font-black uppercase italic text-black/30 tracking-[0.3em]">
              NOT_REGISTERED
            </span>
            <div className="h-1 flex-1 bg-black/10 rounded-full" />
          </div>
          <Button
            variant="neutral"
            className="w-full h-14 border-4 border-dashed border-black hover:border-solid hover:bg-zinc-50 font-black italic uppercase tracking-widest text-sm rounded-2xl group"
          >
            ESTABLISH_NEW_NODE <Plus className="ml-2 group-hover:rotate-90 transition-transform" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

// ─── Forgot Password Page ─────────────────────────────────────────────────────
export const ForgotPasswordPage = () => (
  <div className="w-full max-w-md mx-auto p-4">
    <Card className="border-4 border-black shadow-[15px_15px_0_0_#000] rounded-[32px] overflow-hidden bg-white">
      <CardHeader className="space-y-6 pb-10 border-b-4 border-black bg-[#ffe135] text-center relative">
        <div className="w-24 h-24 rounded-[32px] bg-white border-4 border-black flex items-center justify-center mx-auto shadow-[8px_8px_0_0_#000] text-5xl rotate-3">
          <Shield size={48} className="text-black" />
        </div>
        <div className="space-y-2">
          <CardTitle className="text-4xl font-black italic uppercase tracking-tighter leading-none">
            KEY_RECOVERY
          </CardTitle>
          <CardDescription className="font-black italic uppercase text-[11px] text-black/70 tracking-tight max-w-[280px] mx-auto">
            Initialize recovery protocol. Enter secure relay endpoint for reset instructions.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pt-12 px-8">
        <form className="space-y-6">
          <div className="space-y-2">
            <Label
              htmlFor="forgot-email"
              className="font-black uppercase italic text-[10px] tracking-[0.2em] ml-1"
            >
              RELAY_POINT_EMAIL
            </Label>
            <Input
              id="forgot-email"
              placeholder="OPERATOR@GRID.COM"
              type="email"
              className="h-16 border-4 border-black px-6 font-black italic uppercase shadow-[6px_6px_0_0_#000] focus-visible:ring-0"
            />
          </div>
          <div className="p-6 bg-black text-[#ffe135] border-4 border-black rounded-[24px] shadow-[4px_4px_0_0_#000] border-dashed">
            <div className="flex gap-4 items-start">
              <AlertTriangle size={24} className="shrink-0" />
              <p className="text-[10px] font-black uppercase italic leading-relaxed tracking-wider">
                ALERT: CHECK SPAM_VAULT IF RELAY PACKET IS NOT DETECTED WITHIN 300_SECONDS.
              </p>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-6 p-8 pt-4">
        <Button className="w-full h-16 bg-black text-white border-2 border-black shadow-[6px_6px_0_0_#ffe135] font-black uppercase italic text-xl hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
          TRANSMIT_RECOVERY_LINK
        </Button>
        <p className="text-[10px] text-center font-black uppercase italic tracking-[0.2em] text-black/40">
          RECALLED_IDENTITY?{" "}
          <span className="text-black underline decoration-4 underline-offset-4 cursor-pointer hover:bg-zinc-100 px-2 py-1 rounded transition-all">
            RETURN_TO_TERMINAL
          </span>
        </p>
      </CardFooter>
    </Card>
  </div>
);

// ─── Reset Password Page ──────────────────────────────────────────────────────
export const ResetPasswordPage = () => (
  <div className="w-full max-w-md mx-auto p-4">
    <Card className="border-4 border-black shadow-[15px_15px_0_0_#000] rounded-[32px] overflow-hidden bg-white">
      <CardHeader className="space-y-6 pb-10 border-b-4 border-black bg-indigo-500 text-white text-center relative">
        <div className="w-24 h-24 rounded-[32px] bg-white border-4 border-black flex items-center justify-center mx-auto shadow-[8px_8px_0_0_#000] text-5xl -rotate-3 text-indigo-600">
          <Key size={48} />
        </div>
        <div className="space-y-2">
          <CardTitle className="text-4xl font-black italic uppercase tracking-tighter leading-none">
            REWRITE_PROTOCOL
          </CardTitle>
          <CardDescription className="font-black italic uppercase text-[11px] text-white/80 tracking-tight italic max-w-[280px] mx-auto">
            Establish new cipher credentials. Must meet alpha-numeric grid security standards.
          </CardDescription>
        </div>
        <div className="absolute top-4 left-4 animate-bounce">
          <ShieldCheck className="text-white/40" size={20} />
        </div>
      </CardHeader>
      <CardContent className="pt-12 px-8 space-y-8">
        <div className="space-y-2">
          <Label
            htmlFor="new-pass"
            className="font-black uppercase italic text-[10px] tracking-[0.2em] text-indigo-600 ml-1"
          >
            NEW_SECURE_CIPHER
          </Label>
          <Input
            id="new-pass"
            placeholder="GENERATE_STRONG_KEY"
            type="password"
            className="h-16 border-4 border-black px-6 font-black italic uppercase shadow-[6px_6px_0_0_#000] focus-visible:ring-0"
          />
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="confirm-pass"
            className="font-black uppercase italic text-[10px] tracking-[0.2em] text-indigo-600 ml-1"
          >
            VERIFY_CIPHER
          </Label>
          <Input
            id="confirm-pass"
            placeholder="REPEAT_KEY"
            type="password"
            className="h-16 border-4 border-black px-6 font-black italic uppercase shadow-[6px_6px_0_0_#000] focus-visible:ring-0"
          />
        </div>
        <div className="space-y-4 p-6 border-4 border-black rounded-3xl bg-zinc-50 shadow-[6px_6px_0_0_#000]">
          <div className="flex justify-between items-center">
            <p className="text-[10px] font-black uppercase italic tracking-widest text-black/60">
              ENTROPY_ANALYSIS
            </p>
            <Badge className="bg-green-400 text-black border-2 border-black font-black uppercase text-[8px] italic shadow-[2px_2px_0_0_#000]">
              MAX_SECURE
            </Badge>
          </div>
          <div className="flex gap-2">
            {["bg-red-400", "bg-orange-400", "bg-[#ffe135]", "bg-green-400"].map((c, i) => (
              <div
                key={i}
                className={`flex-1 h-3 rounded-full border-2 border-black ${c} ${i === 3 ? "shadow-[2px_2px_0_0_#000]" : "opacity-40"}`}
              />
            ))}
          </div>
          <p className="text-[9px] font-black italic text-black/40 uppercase tracking-tighter">
            CIPHER_STRENGTH: OPTIMAL // GRID_SAFE
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-8 pt-4">
        <Button className="w-full h-16 bg-black text-white border-2 border-black shadow-[8px_8px_0_0_#indigo-400] shadow-[#818CF8] font-black uppercase italic text-xl hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
          UPDATE_SECURITY_CORE
        </Button>
      </CardFooter>
    </Card>
  </div>
);

// ─── SVG Brand Icons ──────────────────────────────────────────────────────────
const GoogleIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className="border-2 border-black rounded bg-white shadow-[2px_2px_0_0_#000]"
  >
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
  <div className="bg-black p-1 rounded border-2 border-black shadow-[2px_2px_0_0_#000]">
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  </div>
);

const DiscordIcon = () => (
  <div className="bg-[#5865F2] p-1 rounded border-2 border-black shadow-[2px_2px_0_0_#000]">
    <svg
      width="18"
      height="18"
      viewBox="0 0 127.14 96.36"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
    >
      <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0a105.89 105.89 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15zM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69z" />
    </svg>
  </div>
);

// ─── Social Login ─────────────────────────────────────────────────────────────
export const SocialLogin = () => (
  <div className="w-full max-w-md mx-auto p-4">
    <Card className="border-4 border-black shadow-[15px_15px_0_0_#000] rounded-[32px] overflow-hidden bg-white group">
      <CardHeader className="text-center pb-10 border-b-4 border-black bg-white relative">
        <div className="w-16 h-16 rounded-[24px] bg-[#ffe135] border-4 border-black flex items-center justify-center mx-auto mb-4 shadow-[6px_6px_0_0_#000] rotate-3 group-hover:rotate-0 transition-transform">
          <Users className="w-8 h-8 text-black" />
        </div>
        <CardTitle className="text-4xl font-black italic tracking-tighter uppercase leading-none mb-2">
          JOIN_NETWORK
        </CardTitle>
        <CardDescription className="font-black italic uppercase text-[11px] text-black/40 tracking-widest">
          Select preferred authentication protocol.
        </CardDescription>
        <div className="absolute top-4 left-4">
          <Terminal size={18} className="text-black/20" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4 pt-10 pb-10 px-8">
        {[
          { icon: <GoogleIcon />, label: "RELAY_VIA_GOOGLE_NODE", color: "bg-white" },
          { icon: <GitHubIcon />, label: "RELAY_VIA_GITHUB_NODE", color: "bg-white" },
          { icon: <DiscordIcon />, label: "RELAY_VIA_DISCORD_NODE", color: "bg-indigo-50" },
        ].map((item, idx) => (
          <Button
            key={idx}
            variant="neutral"
            className={`w-full justify-start gap-4 h-16 border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all group ${item.color}`}
          >
            {item.icon}
            <span className="flex-1 text-left font-black uppercase italic italic text-xs tracking-tighter group-hover:pl-2 transition-all">
              {item.label}
            </span>
            <ArrowRight
              size={16}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </Button>
        ))}

        <div className="relative my-8 px-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t-4 border-black/10" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white border-4 border-black px-6 py-1 font-black italic uppercase text-[9px] shadow-[4px_4px_0_0_#000] tracking-[0.2em] rounded-full">
              OR_USE_EMAIL_CHANNEL
            </span>
          </div>
        </div>

        <Button className="w-full h-16 bg-[#ffe135] text-black border-2 border-black shadow-[6px_6px_0_0_#000] font-black uppercase tracking-widest italic text-sm hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
          <Mail className="mr-3" size={20} /> STANDARD_INTAKE
        </Button>
      </CardContent>
    </Card>
  </div>
);

// ─── Two-Factor Authentication ─────────────────────────────────────────────────
export const TwoFactor = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <Card className="border-4 border-black shadow-[15px_15px_0_0_#000] rounded-[32px] overflow-hidden bg-white">
        <CardHeader className="text-center space-y-4 pb-10 border-b-4 border-black bg-[#ffe135] relative">
          <div className="w-20 h-20 rounded-[32px] border-4 border-black bg-white flex items-center justify-center mx-auto mb-2 text-4xl shadow-[8px_8px_0_0_#000] rotate-6">
            <ShieldCheck size={40} className="text-black" />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-4xl font-black uppercase tracking-tighter italic leading-none">
              SEC_VALIDATE
            </CardTitle>
            <CardDescription className="font-black italic uppercase text-[11px] text-black/60 tracking-tight leading-relaxed">
              Input unique 6-digit pulse code sent to authorized registry:
              <br />
              <span className="font-black text-black underline decoration-4 underline-offset-4 decoration-black/20">
                OPERATOR@GRID_ARCH.IO
              </span>
            </CardDescription>
          </div>
          <div className="absolute top-4 right-4">
            <Activity size={20} className="animate-pulse text-black/30" />
          </div>
        </CardHeader>
        <CardContent className="space-y-10 pt-12 px-10">
          <div className="flex justify-between gap-3">
            {code.map((val, i) => (
              <input
                key={i}
                value={val}
                maxLength={1}
                placeholder="0"
                onChange={(e) => {
                  const next = [...code];
                  next[i] = e.target.value;
                  setCode(next);
                }}
                className="w-12 h-18 text-center text-3xl font-black border-4 border-black rounded-[14px] focus:outline-none focus:bg-[#ffe135] focus:shadow-none bg-white transition-all shadow-[5px_5px_0_0_#000] placeholder:text-black/10"
              />
            ))}
          </div>
          <div className="p-6 bg-black text-white rounded-[24px] border-4 border-white flex items-center justify-between shadow-[8px_8px_0_0_#ffe135]">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse border-2 border-white" />
              <span className="text-[10px] font-black uppercase italic tracking-[0.2em] text-[#ffe135]">
                SESSION_TIMEOUT
              </span>
            </div>
            <span className="font-mono font-black text-white text-xl tracking-widest bg-white/10 px-3 py-1 rounded">
              04:32
            </span>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-6 p-10 pt-4">
          <Button className="w-full h-18 bg-black text-white border-2 border-black shadow-[8px_8px_0_0_#000] font-black uppercase italic tracking-[0.3em] hover:bg-zinc-800 transition-all border-dashed hover:border-solid text-xl">
            VERIFY_PULSE
          </Button>
          <button className="text-[10px] font-black uppercase italic underline underline-offset-8 decoration-4 decoration-[#ffe135] hover:text-indigo-600 hover:decoration-indigo-600 transition-all tracking-[0.1em]">
            RESEND_PULSE_SIGNAL
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};

// ─── MFA Selection ─────────────────────────────────────────────────────────────
export const MFASelection = () => (
  <div className="w-full max-w-md mx-auto p-4">
    <Card className="border-4 border-black shadow-[15px_15px_0_0_#000] rounded-[32px] overflow-hidden bg-white">
      <CardHeader className="bg-white border-b-4 border-black p-8 relative">
        <div className="absolute top-8 right-8">
          <Globe size={48} className="text-black/5" />
        </div>
        <CardTitle className="text-3xl font-black uppercase italic italic leading-none mb-2">
          MULTI_AUTH_INIT
        </CardTitle>
        <CardDescription className="font-black italic uppercase text-[11px] text-black/40 tracking-widest">
          Establish secondary verification vectors.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 pt-10 px-8">
        {[
          {
            icon: <Terminal />,
            name: "AUTH_PROTOCOL_APP",
            desc: "DYNAMIC_CODE_GENERATION",
            color: "bg-indigo-400",
          },
          {
            icon: <MessageSquare />,
            name: "SMS_CORE_RELAY",
            desc: "ENCRYPTED_SIGNAL_PACKET",
            color: "bg-[#ffe135]",
          },
          {
            icon: <Shield />,
            name: "HARDWARE_VAULT_KEY",
            desc: "PHYSICAL_SECURITY_TOKEN",
            color: "bg-pink-400",
          },
        ].map((m, idx) => (
          <div
            key={idx}
            className="flex items-center gap-5 p-5 border-4 border-black cursor-pointer rounded-[24px] bg-white hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group shadow-[6px_6px_0_0_#000]"
          >
            <div
              className={`w-14 h-14 rounded-[20px] border-4 border-black ${m.color} flex items-center justify-center text-black shadow-[4px_4px_0_0_#000]`}
            >
              {m.icon}
            </div>
            <div className="flex-1">
              <p className="font-black text-sm uppercase italic tracking-tighter leading-none mb-2">
                {m.name}
              </p>
              <p className="text-[9px] font-black italic uppercase text-black/40 tracking-widest">
                {m.desc}
              </p>
            </div>
            <div className="w-8 h-8 rounded-xl border-4 border-black group-hover:bg-black group-hover:shadow-[2px_2px_0_0_#ffe135] transition-all" />
          </div>
        ))}
      </CardContent>
      <CardFooter className="p-10 pt-8">
        <Button className="w-full h-18 bg-black text-white border-2 border-black shadow-[8px_8px_0_0_#ffe135] font-black uppercase italic text-xl hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
          COMPLETE_SETUP
        </Button>
      </CardFooter>
    </Card>
  </div>
);

// ─── Account Locked ────────────────────────────────────────────────────────────
export const AccountLocked = () => (
  <div className="w-full max-w-md mx-auto p-4">
    <Card className="border-4 border-black shadow-[15px_15px_0_0_#ef4444] rounded-[48px] overflow-hidden bg-white">
      <CardHeader className="bg-[#ef4444] text-white border-b-8 border-black py-12 text-center relative">
        <div className="absolute top-0 right-0 p-8 opacity-20">
          <AlertTriangle size={120} />
        </div>
        <div className="w-24 h-24 bg-white rounded-[32px] flex items-center justify-center mx-auto border-4 border-black shadow-[8px_8px_0_0_#000] mb-6 rotate-12">
          <Lock size={48} className="text-red-600" />
        </div>
        <CardTitle className="text-5xl font-black uppercase italic tracking-tighter leading-none drop-shadow-[4px_4px_0_#000]">
          NODE_HALTED
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-12 pb-12 text-center space-y-10 px-10">
        <p className="text-sm font-black italic uppercase text-black/70 leading-relaxed tracking-tight">
          CRITICAL_ERROR: MULTIPLE_AUTH_FAILURES. NODE_ID:{" "}
          <span className="text-red-600 font-black underline decoration-4 underline-offset-8">
            SUSPENDED
          </span>{" "}
          FOR GRID_PROTECTION.
        </p>
        <div className="p-8 bg-red-50 border-4 border-red-500 rounded-[32px] shadow-[10px_10px_0_0_#ef4444] flex flex-col items-center gap-4 border-dashed relative overflow-hidden">
          <div className="absolute top-2 left-4 text-[8px] font-black text-red-500 uppercase opacity-40 italic">
            RE_INIT_COOL_DOWN
          </div>
          <span className="font-mono font-black text-red-700 text-6xl tracking-tighter tabular-nums">
            29:54
          </span>
          <span className="text-[10px] font-black uppercase italic text-red-700 tracking-[0.3em]">
            SECONDS_REMAINING
          </span>
        </div>
        <Button
          variant="neutral"
          className="w-full h-18 border-4 border-black bg-white text-black font-black uppercase italic text-lg shadow-[8px_8px_0_0_#000] hover:bg-black hover:text-white transition-all group"
        >
          CONTACT_SYSTEM_ROOT <Terminal className="ml-2 group-hover:animate-pulse" />
        </Button>
      </CardContent>
    </Card>
  </div>
);

// ─── Success Confirmation ──────────────────────────────────────────────────────
export const SuccessConfirmation = () => (
  <div className="w-full max-w-md mx-auto p-4">
    <Card className="border-4 border-black shadow-[15px_15px_0_0_#22c55e] rounded-[48px] overflow-hidden bg-white">
      <CardHeader className="bg-[#22c55e] text-white border-b-8 border-black py-14 text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:30px_30px] opacity-20 group-hover:scale-150 transition-transform duration-[2000ms]" />
        <div className="w-28 h-28 bg-white rounded-[32px] flex items-center justify-center mx-auto border-4 border-black shadow-[10px_10px_0_0_#000] relative z-10 animate-bounce">
          <ShieldCheck size={56} className="text-green-600" />
        </div>
      </CardHeader>
      <CardContent className="pt-14 pb-14 text-center space-y-10 px-12">
        <div className="space-y-4">
          <CardTitle className="text-6xl font-black italic uppercase tracking-tighter leading-none text-black drop-shadow-[4px_4px_0_#22c55e]">
            AUTH_VALID
          </CardTitle>
          <p className="text-xs font-black italic uppercase text-black/40 tracking-[0.2em] leading-relaxed">
            Identity verified. Welcome to the MoupUI Command Center.
          </p>
        </div>
        <Button className="w-full h-20 bg-black text-white border-4 border-black shadow-[10px_10px_0_0_#22c55e] font-black uppercase text-2xl italic hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all group">
          LAUNCH_WORKSPACE{" "}
          <Rocket className="ml-3 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  </div>
);

// ─── Magic Link Sent ──────────────────────────────────────────────────────────
export const MagicLinkSent = () => (
  <div className="w-full max-w-md mx-auto p-4">
    <Card className="border-4 border-black shadow-[15px_15px_0_0_#6366f1] rounded-[48px] overflow-hidden bg-white group">
      <CardContent className="pt-16 pb-16 text-center space-y-12 px-10">
        <div className="relative">
          <div className="w-28 h-28 bg-[#6366f1] rounded-[36px] flex items-center justify-center mx-auto border-4 border-black shadow-[10px_10px_0_0_#000] rotate-6 group-hover:rotate-0 transition-transform duration-500 relative bg-[repeating-linear-gradient(45deg,#6366f1,#6366f1_10px,#5856d6_10px,#5856d6_20px)]">
            <Mail size={56} className="text-white drop-shadow-[4px_4px_0_#000]" />
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#ffe135] rounded-full border-4 border-black flex items-center justify-center text-xl font-black shadow-[4px_4px_0_0_#000] animate-bounce">
              !
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <CardTitle className="text-4xl font-black italic uppercase tracking-tighter leading-none">
            GRID_LINK_SYNC
          </CardTitle>
          <p className="text-[11px] font-black italic uppercase text-black/60 tracking-tight leading-relaxed">
            Secure magic entry signal is transmitting to:
            <br />
            <span className="text-black font-black underline decoration-4 decoration-indigo-600 underline-offset-8 tracking-tighter bg-indigo-50 px-2 py-1 rounded inline-block mt-2 font-mono">
              ALEX@JOHNSON_NODE.GRID
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <Button className="w-full h-18 bg-[#6366f1] text-white border-4 border-black shadow-[8px_8px_0_0_#000] font-black uppercase italic tracking-widest hover:scale-[1.02] transition-all text-lg group">
            OPEN_RELAY_APP{" "}
            <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
          </Button>
          <button className="text-[9px] font-black uppercase italic tracking-[0.3em] text-black/30 hover:text-indigo-600 transition-colors">
            SIGNAL_NOT_RECEIVED?{" "}
            <span className="text-indigo-600 underline decoration-2 underline-offset-4">
              RE_TRANSMIT_NOW
            </span>
          </button>
        </div>
      </CardContent>
    </Card>
  </div>
);
