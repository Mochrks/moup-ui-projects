import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui-shadcn/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Button } from "@/components/ui-shadcn/button";
import {
  Shield,
  Lock,
  Smartphone,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  Fingerprint,
} from "lucide-react";
import { Badge } from "@/components/ui-shadcn/badge";

// Enhancing Input OTP Demos with premium industrial visuals and structured security layouts

// 1. Industrial Primary OTP
export const InputOtpSimple = () => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2 mb-1">
      <Shield size={16} className="text-zinc-400" />
      <span className="text-[10px] font-black uppercase text-zinc-400">Node Authentication</span>
    </div>
    <InputOTP maxLength={6} className="gap-2">
      <InputOTPGroup className="gap-2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <InputOTPSlot
            key={i}
            index={i}
            className="h-14 w-11 border-2 border-black rounded-xl font-black italic bg-white focus:bg-zinc-50 shadow-[3px_3px_0_0_#000]"
          />
        ))}
      </InputOTPGroup>
    </InputOTP>
  </div>
);

// 2. High-Fidelity Split Groups
export const InputOtpGroups = () => (
  <div className="p-8 border-2 border-black rounded-[2.5rem] bg-zinc-50 shadow-[8px_8px_0_0_#000]">
    <InputOTP maxLength={6}>
      <div className="flex items-center gap-4">
        <InputOTPGroup className="gap-2">
          <InputOTPSlot
            index={0}
            className="h-16 w-14 border-2 border-black rounded-2xl bg-white font-heading text-xl shadow-[4px_4px_0_0_#88aaee]"
          />
          <InputOTPSlot
            index={1}
            className="h-16 w-14 border-2 border-black rounded-2xl bg-white font-heading text-xl shadow-[4px_4px_0_0_#88aaee]"
          />
          <InputOTPSlot
            index={2}
            className="h-16 w-14 border-2 border-black rounded-2xl bg-white font-heading text-xl shadow-[4px_4px_0_0_#88aaee]"
          />
        </InputOTPGroup>
        <div className="w-4 h-1 bg-black rounded-full"></div>
        <InputOTPGroup className="gap-2">
          <InputOTPSlot
            index={3}
            className="h-16 w-14 border-2 border-black rounded-2xl bg-white font-heading text-xl shadow-[4px_4px_0_0_#fb6f92]"
          />
          <InputOTPSlot
            index={4}
            className="h-16 w-14 border-2 border-black rounded-2xl bg-white font-heading text-xl shadow-[4px_4px_0_0_#fb6f92]"
          />
          <InputOTPSlot
            index={5}
            className="h-16 w-14 border-2 border-black rounded-2xl bg-white font-heading text-xl shadow-[4px_4px_0_0_#fb6f92]"
          />
        </InputOTPGroup>
      </div>
    </InputOTP>
    <p className="mt-6 text-[10px] font-black text-center text-zinc-400 uppercase tracking-widest">
      Global Handshake Active
    </p>
  </div>
);

// 3. 4-Digit Security PIN
export const InputOtpFour = () => (
  <div className="flex items-center gap-6 p-4 border-2 border-black rounded-2xl bg-white shadow-[4px_4px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
    <div className="bg-black text-white p-3 rounded-xl">
      <Lock size={20} />
    </div>
    <InputOTP maxLength={4}>
      <InputOTPGroup className="gap-3">
        <InputOTPSlot index={0} className="h-12 w-10 border-2 border-black rounded-lg font-black" />
        <InputOTPSlot index={1} className="h-12 w-10 border-2 border-black rounded-lg font-black" />
        <InputOTPSlot index={2} className="h-12 w-10 border-2 border-black rounded-lg font-black" />
        <InputOTPSlot index={3} className="h-12 w-10 border-2 border-black rounded-lg font-black" />
      </InputOTPGroup>
    </InputOTP>
  </div>
);

// 4. Digits Only Protocol
export const InputOtpDigits = () => (
  <div className="space-y-2">
    <div className="flex justify-between px-1">
      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
        Numerical Only
      </span>
      <Badge className="bg-main text-white font-black text-[8px] border-0">ACTIVE</Badge>
    </div>
    <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
      <InputOTPGroup className="gap-2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <InputOTPSlot
            key={i}
            index={i}
            className="h-12 w-12 border-2 border-black rounded-full font-black bg-zinc-50"
          />
        ))}
      </InputOTPGroup>
    </InputOTP>
  </div>
);

// 5. Heavy Square Block
export const InputOtpSquare = () => (
  <div className="p-10 border-4 border-black rounded-[3rem] bg-white text-center shadow-[12px_12px_0_0_#000]">
    <h4 className="font-heading text-2xl uppercase italic tracking-tighter mb-8">Access Vault</h4>
    <InputOTP maxLength={6}>
      <InputOTPGroup className="gap-3">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <InputOTPSlot
            key={i}
            index={i}
            className="rounded-2xl border-2 border-black h-20 w-16 text-3xl font-black bg-zinc-50 shadow-[4px_4px_0_0_#000]"
          />
        ))}
      </InputOTPGroup>
    </InputOTP>
  </div>
);

// 6. Aesthetic Pill Group
export const InputOtpPill = () => (
  <div className="bg-zinc-950 p-6 rounded-[2rem] border-2 border-black">
    <InputOTP maxLength={4}>
      <InputOTPGroup className="gap-4">
        {[0, 1, 2, 3].map((i) => (
          <InputOTPSlot
            key={i}
            index={i}
            className="rounded-full border-2 border-white/20 w-16 h-16 bg-white/5 text-white font-heading text-2xl shadow-inner active:border-main transition-colors"
          />
        ))}
      </InputOTPGroup>
    </InputOTP>
  </div>
);

// 7. Hidden Password Layer
export const InputOtpPassword = () => (
  <div className="flex flex-col items-center gap-6 p-8 border-2 border-black bg-white rounded-3xl shadow-[6px_6px_0_0_#000]">
    <Fingerprint size={48} className="text-zinc-200" />
    <InputOTP maxLength={6}>
      <InputOTPGroup className="gap-2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <InputOTPSlot
            key={i}
            index={i}
            className="h-12 w-12 border-2 border-black rounded-xl bg-zinc-50 flex items-center justify-center"
          >
            <div className="w-2 h-2 bg-black rounded-full scale-0 group-data-[filled=true]:scale-100 transition-transform"></div>
          </InputOTPSlot>
        ))}
      </InputOTPGroup>
    </InputOTP>
  </div>
);

// 8. Warning/Error State
export const InputOtpError = () => (
  <div className="space-y-4 w-full p-6 border-2 border-black rounded-2xl bg-red-50 shadow-[4px_4px_0_0_#ef4444]">
    <div className="flex items-center gap-3">
      <AlertTriangle className="text-red-600" size={20} />
      <span className="text-[10px] font-black uppercase text-red-900 tracking-tighter">
        Handshake Protocol Failed
      </span>
    </div>
    <InputOTP maxLength={4}>
      <InputOTPGroup className="gap-2 w-full">
        {[0, 1, 2, 3].map((i) => (
          <InputOTPSlot
            key={i}
            index={i}
            className="flex-1 h-14 border-2 border-red-500 bg-white text-red-600 font-black italic rounded-xl"
          />
        ))}
      </InputOTPGroup>
    </InputOTP>
    <p className="text-[10px] font-bold text-red-500 italic mt-2 uppercase tracking-widest text-center">
      Invalid Cryptographic Signature
    </p>
  </div>
);

// 9. Success Pulse
export const InputOtpSuccess = () => (
  <div className="p-6 border-2 border-black bg-green-50 rounded-3xl flex flex-col items-center gap-4">
    <CheckCircle2 size={32} className="text-green-600 animate-[bounce_1s_infinite]" />
    <InputOTP maxLength={4}>
      <InputOTPGroup className="gap-3">
        {[0, 1, 2, 3].map((i) => (
          <InputOTPSlot
            key={i}
            index={i}
            className="h-14 w-14 border-2 border-green-500 bg-white text-green-600 font-black italic rounded-2xl shadow-[3px_3px_0_0_#16a34a]"
          />
        ))}
      </InputOTPGroup>
    </InputOTP>
  </div>
);

// 10. Immersive Auth Container
export const InputOtpFull = () => (
  <div className="w-full max-w-sm border-2 border-black p-1 bg-black rounded-[3rem] shadow-2xl relative overflow-hidden group">
    <div className="absolute -top-10 -right-10 opacity-5 group-hover:rotate-12 transition-transform duration-700">
      <Smartphone size={200} />
    </div>
    <div className="bg-white rounded-[2.8rem] p-8 space-y-6 relative z-10">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge className="bg-main text-white font-black italic border-0 text-[10px]">
            SECURITY v2.4
          </Badge>
        </div>
        <h3 className="font-heading text-xl uppercase italic">Two-Factor Gate</h3>
        <p className="font-bold text-zinc-400 text-xs leading-relaxed">
          Broadcast dispatched to{" "}
          <span className="text-black font-black underline">+62 812 *** 00</span>. Authenticate
          below.
        </p>
      </div>

      <div className="flex justify-center">
        <InputOTP maxLength={6}>
          <InputOTPGroup className="gap-1.5 sm:gap-2">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <InputOTPSlot
                key={i}
                index={i}
                className="h-12 w-10 sm:h-14 sm:w-11 border-2 border-black rounded-xl bg-zinc-50 font-black italic"
              />
            ))}
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div className="space-y-3 pt-2">
        <Button className="w-full h-14 bg-black text-white border-2 border-black rounded-2xl font-heading uppercase italic tracking-[0.2em] shadow-[4px_4px_0_0_#88aaee] active:translate-y-1 transition-all">
          TERMINATE GATEWAY
        </Button>
        <button className="w-full py-2 flex items-center justify-center gap-2 text-[10px] font-black uppercase text-zinc-400 hover:text-black transition-colors group/btn">
          <RefreshCw
            size={12}
            className="group-hover/btn:rotate-180 transition-transform duration-500"
          />{" "}
          RE-DISPATCH SIGNAL (45s)
        </button>
      </div>
    </div>
  </div>
);
