export const sampleCodeAIChat = `import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Send, Sparkles, Bot, User, RotateCcw, Copy } from "lucide-react";

const BOT_REPLIES = [
  "Great question! MoupUI provides 50+ neobrutalist components for React, Next.js, and Tailwind CSS. 🚀",
  "All components are fully typed with TypeScript and copy-paste ready. No extra setup required!",
  "You can customize any component by overriding Tailwind classes or using CSS variables. 🎨",
  "MoupUI supports dark mode out of the box via Shadcn UI theme tokens. ✨",
];

export const AIPoweredChatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! 👋 I\\'m your MoupUI assistant. How can I help you today?", sender: "bot" },
    { id: 2, text: "Tell me about MoupUI components!", sender: "user" },
    { id: 3, text: BOT_REPLIES[0], sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || loading) return;
    setMessages((prev) => [...prev, { id: prev.length + 1, text: input, sender: "user" }]);
    setInput("");
    setLoading(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: prev.length + 1, text: BOT_REPLIES[Math.floor(Math.random() * BOT_REPLIES.length)], sender: "bot" },
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-lg mx-auto border-2 border-black rounded-xl shadow-[4px_4px_0_0_#000] overflow-hidden">
      {/* Header */}
      <div className="bg-black px-4 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#ffe135] flex items-center justify-center">
          <Sparkles size={16} className="text-black" />
        </div>
        <div className="flex-1">
          <p className="font-black text-white text-sm">MoupUI Assistant</p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/60 text-xs font-medium">Always online</span>
          </div>
        </div>
        <Badge className="bg-[#ffe135] text-black text-xs font-bold">AI</Badge>
      </div>

      {/* Messages */}
      <div className="h-72 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {messages.map((msg) => (
          <div key={msg.id} className={\`flex \${msg.sender === "user" ? "justify-end" : "justify-start"} gap-2\`}>
            {msg.sender === "bot" && (
              <Avatar className="w-7 h-7 border-2 border-black flex-shrink-0 mt-0.5">
                <AvatarFallback className="bg-[#ffe135] text-black text-xs"><Bot size={12} /></AvatarFallback>
              </Avatar>
            )}
            <div className={\`max-w-[75%] px-3 py-2 rounded-xl text-sm \${
              msg.sender === "user"
                ? "bg-black text-white border-2 border-black rounded-br-none"
                : "bg-white text-black border-2 border-black shadow-[2px_2px_0_0_#000] rounded-bl-none"
            }\`}>{msg.text}</div>
            {msg.sender === "user" && (
              <Avatar className="w-7 h-7 border-2 border-black flex-shrink-0 mt-0.5">
                <AvatarFallback className="bg-black text-white text-xs"><User size={12} /></AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
        {loading && (
          <div className="flex gap-2">
            <Avatar className="w-7 h-7 border-2 border-black flex-shrink-0">
              <AvatarFallback className="bg-[#ffe135] text-black text-xs"><Bot size={12} /></AvatarFallback>
            </Avatar>
            <div className="bg-white border-2 border-black rounded-xl rounded-bl-none px-4 py-3 shadow-[2px_2px_0_0_#000] flex gap-1">
              {[0, 1, 2].map((i) => (
                <div key={i} className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: \`\${i * 0.15}s\` }} />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="flex gap-2 p-3 bg-white border-t-2 border-black">
        <Input
          placeholder="Ask me anything about MoupUI..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="border-2 border-black flex-1 text-sm"
        />
        <Button onClick={handleSend} disabled={!input.trim() || loading}
          className="bg-black text-white border-2 border-black shadow-[2px_2px_0_0_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
          <Send size={16} />
        </Button>
      </div>
    </div>
  );
};`.trim();

export const sampleCodeChatNext = `"use client";

${sampleCodeAIChat}`;

export const sampleCodeChatHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Chat UI — MoupUI</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #f9fafb; padding: 16px; font-family: system-ui, sans-serif; }
    .chat { width: 100%; max-width: 480px; border: 2px solid black; border-radius: 12px; box-shadow: 4px 4px 0 0 #000; overflow: hidden; }
    .header { background: black; padding: 12px 16px; display: flex; align-items: center; gap: 12px; }
    .avatar { width: 32px; height: 32px; background: #ffe135; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 14px; }
    .header-info p { color: white; font-weight: 900; font-size: 14px; margin: 0; }
    .header-info span { color: rgba(255,255,255,.6); font-size: 12px; }
    .messages { height: 280px; overflow-y: auto; padding: 16px; background: #f9fafb; display: flex; flex-direction: column; gap: 12px; }
    .msg { display: flex; gap: 8px; max-width: 75%; }
    .msg.user { flex-direction: row-reverse; align-self: flex-end; }
    .bubble { padding: 10px 14px; border-radius: 12px; font-size: 14px; line-height: 1.4; border: 2px solid black; }
    .bubble.bot { background: white; border-radius: 0 12px 12px 12px; box-shadow: 2px 2px 0 0 #000; }
    .bubble.user { background: black; color: white; border-radius: 12px 0 12px 12px; }
    .input-area { display: flex; gap: 8px; padding: 12px; background: white; border-top: 2px solid black; }
    .input-area input { flex: 1; padding: 8px 12px; border: 2px solid black; border-radius: 8px; outline: none; font-size: 14px; }
    .input-area button { padding: 8px 16px; background: black; color: white; border: 2px solid black; border-radius: 8px; font-weight: 700; cursor: pointer; box-shadow: 2px 2px 0 0 rgba(0,0,0,.3); }
  </style>
</head>
<body>
  <div class="chat">
    <div class="header">
      <div class="avatar">✨</div>
      <div class="header-info">
        <p>MoupUI Assistant</p>
        <span>● Always online</span>
      </div>
    </div>
    <div class="messages" id="msgs">
      <div class="msg bot">
        <div class="avatar" style="flex-shrink:0;background:#ffe135;">🤖</div>
        <div class="bubble bot">Hi there! 👋 How can I help you today?</div>
      </div>
    </div>
    <div class="input-area">
      <input id="inp" placeholder="Ask me anything..." onkeydown="if(event.key==='Enter')send()" />
      <button onclick="send()">Send</button>
    </div>
  </div>
  <script>
    const replies = ["Great question! MoupUI has 50+ components 🚀","All components are copy-paste ready! No setup needed.","Fully typed TypeScript components + dark mode support ✨"];
    function send() {
      const v = document.getElementById('inp').value.trim();
      if (!v) return;
      const m = document.getElementById('msgs');
      m.innerHTML += \`<div class="msg user"><div class="bubble user">\${v}</div></div>\`;
      document.getElementById('inp').value = '';
      setTimeout(() => {
        m.innerHTML += \`<div class="msg bot"><div class="avatar" style="flex-shrink:0;background:#ffe135;width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;">🤖</div><div class="bubble bot">\${replies[Math.floor(Math.random()*replies.length)]}</div></div>\`;
        m.scrollTop = m.scrollHeight;
      }, 800);
    }
  </script>
</body>
</html>`.trim();
