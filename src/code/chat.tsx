import React, { useState } from "react";
import { Button } from "@/components/ui-neobrutalism/button";
import { Input } from "@/components/ui-neobrutalism/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui-neobrutalism/card";
import { ScrollArea } from "@/components/ui-neobrutalism/scroll-area";
import { Search, Send, Paperclip, MoreVertical, Phone, Video, Plus, Bot } from "lucide-react";

export const AIPoweredChatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: input, sender: "user" }]);
      setInput("");
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            text: "I'm processing your request using the MoupUI Neural Engine. How else can I help?",
            sender: "bot",
          },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="border-4 border-black shadow-[8px_8px_0_0_#000] overflow-hidden">
        <CardHeader className="bg-[#ffe135] border-b-4 border-black flex flex-row items-center justify-between pb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center border-2 border-white shadow-[2px_2px_0_0_#000]">
              <Bot size={24} className="text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-black italic uppercase tracking-tight leading-none">
                AI CORE
              </CardTitle>
              <CardDescription className="text-black/60 font-bold uppercase text-[10px]">
                Neural Processing Active
              </CardDescription>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-black" />
            <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-black animate-pulse" />
          </div>
        </CardHeader>
        <CardContent className="h-[400px] bg-zinc-50 p-6 space-y-6 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] p-4 border-2 border-black font-bold shadow-[4px_4px_0_0_#000] rounded-2xl ${
                  message.sender === "user"
                    ? "bg-indigo-400 text-black rounded-tr-none translate-x-[-4px]"
                    : "bg-white text-black rounded-tl-none translate-x-[4px]"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter className="p-6 bg-white border-t-4 border-black flex gap-3">
          <Input
            placeholder="Type your instruction..."
            className="flex-1 h-12 border-2 border-black font-bold shadow-[4px_4px_0_0_#ffe135] focus-visible:ring-0"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <Button
            onClick={handleSend}
            className="h-12 w-12 bg-black text-white border-2 border-black shadow-[4px_4px_0_0_#34A853] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            <Send className="w-5 h-5" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export const RenderChatLayoutOne = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(1);
  const [messageInput, setMessageInput] = useState("");

  const chats = [
    {
      id: 1,
      name: "John Doe",
      lastMessage: "Hey, how are you?",
      time: "5m ago",
      unread: 2,
      color: "bg-pink-400",
    },
    {
      id: 2,
      name: "Sarah Connor",
      lastMessage: "The project is due tomorrow",
      time: "1h ago",
      unread: 0,
      color: "bg-green-400",
    },
    {
      id: 3,
      name: "Tech Support",
      lastMessage: "Ticket resolved",
      time: "1d ago",
      unread: 1,
      color: "bg-indigo-400",
    },
    {
      id: 4,
      name: "Jane Smith",
      lastMessage: "Lunch at 1 PM?",
      time: "2d ago",
      unread: 0,
      color: "bg-yellow-400",
    },
  ];

  const renderChatList = () => (
    <Card className="h-full border-4 border-black shadow-[8px_8px_0_0_#000] overflow-hidden flex flex-col">
      <CardHeader className="bg-zinc-100 border-b-4 border-black pb-6">
        <div className="flex justify-between items-center mb-4">
          <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">
            COMS
          </CardTitle>
          <Button variant="noShadow" size="icon" className="border-2 border-black bg-white">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black" />
          <Input
            placeholder="SEARCH CONTACTS..."
            className="pl-10 border-2 border-black bg-white font-black uppercase text-xs shadow-[2px_2px_0_0_#000]"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-0 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="p-2 space-y-2">
            {chats.map((chat) => (
              <div
                key={chat.id}
                className={`flex items-center space-x-3 p-3 cursor-pointer border-2 transition-all rounded-xl ${
                  selectedChat === chat.id
                    ? "bg-[#ffe135] border-black shadow-[4px_4px_0_0_#000]"
                    : "border-transparent hover:border-black/10 hover:bg-zinc-50"
                }`}
                onClick={() => setSelectedChat(chat.id)}
              >
                <div
                  className={`w-10 h-10 rounded-lg border-2 border-black ${chat.color} flex items-center justify-center shadow-[2px_2px_0_0_#000]`}
                >
                  <span className="font-black text-xs">{chat.name[0]}</span>
                </div>
                <div className="flex-grow min-w-0">
                  <p className="text-sm font-black truncate uppercase tracking-tight">
                    {chat.name}
                  </p>
                  <p className="text-[10px] font-bold text-black/50 truncate uppercase">
                    {chat.lastMessage}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-[9px] font-black text-black/40 uppercase">{chat.time}</p>
                  {chat.unread > 0 && (
                    <div className="mt-1 w-5 h-5 bg-black text-white rounded flex items-center justify-center text-[10px] font-black border border-black shadow-[1px_1px_0_0_#ffe135]">
                      {chat.unread}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );

  const renderChatWindow = () => {
    const chat = chats.find((c) => c.id === selectedChat);
    if (!chat)
      return (
        <Card className="h-full border-4 border-black shadow-[8px_8px_0_0_#000] flex items-center justify-center bg-zinc-50 italic font-black text-zinc-300 uppercase">
          Select a channel to transmit
        </Card>
      );

    return (
      <Card className="h-full border-4 border-black shadow-[8px_8px_0_0_#000] overflow-hidden flex flex-col">
        <CardHeader className="border-b-4 border-black bg-white flex flex-row items-center justify-between pb-6">
          <div className="flex items-center space-x-4">
            <div
              className={`w-12 h-12 rounded-xl border-2 border-black ${chat.color} flex items-center justify-center shadow-[3px_3px_0_0_#000]`}
            >
              <span className="font-black text-lg">{chat.name[0]}</span>
            </div>
            <div>
              <CardTitle className="text-xl font-black uppercase italic tracking-tight leading-none">
                {chat.name}
              </CardTitle>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="w-2 h-2 bg-green-500 border border-black rounded-full" />
                <span className="text-[10px] font-black opacity-50 uppercase tracking-widest">
                  Active Link
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="noShadow"
              size="icon"
              className="border-2 border-black bg-white hover:bg-zinc-100"
            >
              <Phone className="h-4 w-4" />
            </Button>
            <Button
              variant="noShadow"
              size="icon"
              className="border-2 border-black bg-white hover:bg-zinc-100"
            >
              <Video className="h-4 w-4" />
            </Button>
            <Button
              variant="noShadow"
              size="icon"
              className="border-2 border-black bg-white hover:bg-zinc-100"
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="flex-1 bg-zinc-50 p-6 overflow-hidden">
          <ScrollArea className="h-full pr-4">
            <div className="space-y-6">
              <div className="flex justify-start">
                <div className="bg-white border-2 border-black rounded-2xl rounded-tl-none p-4 max-w-[70%] shadow-[4px_4px_0_0_#000] relative">
                  <p className="text-sm font-bold">Hey, how's the neobrutalist project going?</p>
                  <p className="text-[9px] font-black text-black/30 mt-2 uppercase">10:30 AM</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#ffe135] border-2 border-black rounded-2xl rounded-tr-none p-4 max-w-[70%] shadow-[4px_4px_0_0_#000]">
                  <p className="text-sm font-black italic">
                    It's coming together. The bold borders are really popping!
                  </p>
                  <p className="text-[9px] font-black text-black/40 mt-2 uppercase">10:32 AM</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white border-2 border-black rounded-2xl rounded-tl-none p-4 max-w-[70%] shadow-[4px_4px_0_0_#000]">
                  <p className="text-sm font-bold">
                    Can't wait to see the final design. Let me know when it's live.
                  </p>
                  <p className="text-[9px] font-black text-black/30 mt-2 uppercase">10:33 AM</p>
                </div>
              </div>
            </div>
          </ScrollArea>
        </CardContent>
        <CardFooter className="p-4 border-t-4 border-black bg-white">
          <div className="flex space-x-3 w-full">
            <Button
              variant="neutral"
              size="icon"
              className="border-2 border-black h-12 w-12 bg-white flex-shrink-0"
            >
              <Paperclip className="h-5 w-5" />
            </Button>
            <Input
              placeholder="TYPE YOUR ENCRYPTED MESSAGE..."
              className="flex-grow h-12 border-2 border-black font-black uppercase text-xs shadow-[2px_2px_0_0_#ffe135] focus-visible:ring-0"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
            <Button className="h-12 px-6 bg-black text-white border-2 border-black shadow-[4px_4px_0_0_#34A853] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase font-black italic">
              SEND
            </Button>
          </div>
        </CardFooter>
      </Card>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[700px]">
      <div className="lg:col-span-1">{renderChatList()}</div>
      <div className="lg:col-span-2">{renderChatWindow()}</div>
    </div>
  );
};

export const RenderChatLayoutTwo = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "John",
      content: "Did you update the navbar?",
      time: "10:00 AM",
      isYou: false,
    },
    {
      id: 2,
      sender: "You",
      content: "Yes! Added the bold shadows as requested.",
      time: "10:05 AM",
      isYou: true,
    },
    {
      id: 3,
      sender: "John",
      content: "Looks sharp. Let's push to main.",
      time: "10:10 AM",
      isYou: false,
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "You",
          content: input,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          isYou: true,
        },
      ]);
      setInput("");
    }
  };

  return (
    <div className="h-[600px] border-4 border-black rounded-3xl overflow-hidden flex bg-white shadow-[12px_12px_0_0_#000]">
      {/* Search/Contacts Column */}
      <div className="w-1/3 border-r-4 border-black bg-zinc-50 flex flex-col">
        <div className="p-6 border-b-2 border-black bg-white">
          <Input
            placeholder="SEARCH CHANNELS..."
            className="w-full border-2 border-black font-black uppercase text-[10px] h-10 shadow-[2px_2px_0_0_#000]"
          />
        </div>
        <ScrollArea className="flex-1">
          {["Alpha", "Bravo", "Charlie", "Delta"].map((name, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-5 hover:bg-[#ffe135]/20 border-b border-black/5 cursor-pointer transition-colors group"
            >
              <div className="w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center font-black shadow-[2px_2px_0_0_#000] group-hover:bg-[#ffe135]">
                {name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-black text-sm uppercase italic tracking-tighter truncate">
                  {name}_UNITS
                </h3>
                <p className="text-[10px] font-bold text-black/40 uppercase truncate">
                  ACTIVE SESSION 02...
                </p>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500 border border-black shadow-[1px_1px_0_0_#000]" />
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between p-6 border-b-4 border-black bg-[#ffe135]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black rounded-full border-2 border-white flex items-center justify-center shadow-[4px_4px_0_0_#000]">
              <span className="text-white font-black">A</span>
            </div>
            <div>
              <h2 className="text-xl font-black italic uppercase tracking-tighter">ALPHA_UNITS</h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full animate-blink" />
                <p className="text-[9px] font-black uppercase tracking-widest leading-none">
                  Transmission Open
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="noShadow"
              size="icon"
              className="bg-white border-2 border-black h-10 w-10"
            >
              <Search className="h-4 w-4" />
            </Button>
            <Button
              variant="noShadow"
              size="icon"
              className="bg-white border-2 border-black h-10 w-10"
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <ScrollArea className="flex-1 p-6 bg-zinc-50 border-b-4 border-black">
          <div className="space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isYou ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] p-4 border-2 border-black shadow-[4px_4px_0_0_#000] rounded-xl ${
                    message.isYou ? "bg-indigo-300 rounded-br-none" : "bg-white rounded-bl-none"
                  }`}
                >
                  <p className="text-sm font-black leading-snug">{message.content}</p>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-black/10">
                    <span className="text-[8px] font-black uppercase text-black/40 tracking-widest">
                      {message.sender}
                    </span>
                    <span className="text-[8px] font-black uppercase text-black/40">
                      {message.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <form onSubmit={sendMessage} className="flex items-center gap-3 p-6 bg-white">
          <Button
            type="button"
            variant="noShadow"
            size="icon"
            className="border-2 border-black bg-zinc-100 h-12 w-12 flex-shrink-0"
          >
            <Paperclip className="h-5 w-5" />
          </Button>
          <Input
            placeholder="TYPE_INPUT_PROMPT..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 h-12 border-2 border-black font-mono font-black uppercase text-xs focus-visible:ring-0 shadow-[4px_4px_0_0_#000]"
          />
          <Button
            type="submit"
            className="h-12 px-6 bg-black text-[#ffe135] border-2 border-black font-black uppercase italic shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            TRANSMIT
          </Button>
        </form>
      </div>
    </div>
  );
};
