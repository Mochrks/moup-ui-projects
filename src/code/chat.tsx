import { useState } from "react";
import { Button } from "@/components/ui-shadcn/button";
import { Input } from "@/components/ui-shadcn/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui-shadcn/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui-neobrutalism/avatar";
import { Badge } from "@/components/ui-neobrutalism/badge";
import { ScrollArea } from "@/components/ui-neobrutalism/scroll-area";
import {
  MessageCircle,
  Search,
  Send,
  Paperclip,
  MoreVertical,
  Phone,
  Video,
  Smile,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui-shadcn/dropdown-menu";

export const AIPoweredChatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: input, sender: "user" }]);
      setInput("");
      // Simulate AI response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            text: "I'm processing your request. How else can I help you?",
            sender: "bot",
          },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="w-full  mx-auto">
      <CardHeader>
        <CardTitle>AI Assistant</CardTitle>
        <CardDescription>Get instant help from our AI chatbot</CardDescription>
      </CardHeader>
      <CardContent className="h-[400px] overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mb-4`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex gap-2">
        <Input
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <Button onClick={handleSend}>
          <Send className="w-4 h-4" />
        </Button>
      </CardFooter>
    </div>
  );
};

export const RenderChatLayoutOne = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [messageInput, setMessageInput] = useState("");

  const chats = [
    {
      id: 1,
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Hey, how are you?",
      time: "5m ago",
      unread: 2,
    },
    {
      id: 2,
      name: "Sarah Connor",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "The project is due tomorrow",
      time: "1h ago",
      unread: 0,
    },
    {
      id: 3,
      name: "Tech Support",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Your ticket has been resolved",
      time: "1d ago",
      unread: 1,
    },
    {
      id: 4,
      name: "Jane Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Lunch at 1 PM?",
      time: "2d ago",
      unread: 0,
    },
    {
      id: 5,
      name: "Team Channel",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "New announcement from HR",
      time: "3d ago",
      unread: 5,
    },
  ];

  const renderChatList = () => (
    <Card className="h-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Chats</CardTitle>
          <Button variant="ghost" size="icon">
            <MessageCircle className="h-4 w-4" />
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search chats" className="pl-8" />
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`flex items-center space-x-4 p-4 cursor-pointer hover:bg-accent ${selectedChat === chat.id ? "bg-accent" : ""}`}
              onClick={() => setSelectedChat(chat.id)}
            >
              <Avatar>
                <AvatarImage src={chat.avatar} alt={chat.name} />
                <AvatarFallback>
                  {chat.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-grow">
                <p className="text-sm font-medium">{chat.name}</p>
                <p className="text-xs text-gray-500">{chat.lastMessage}</p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-xs text-gray-500">{chat.time}</p>
                {chat.unread > 0 && (
                  <Badge variant="destructive" className="mt-1">
                    {chat.unread}
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );

  const renderChatWindow = () => {
    const chat = chats.find((c) => c.id === selectedChat);
    if (!chat) return null;

    return (
      <div className="h-full flex flex-col">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={chat.avatar} alt={chat.name} />
                <AvatarFallback>
                  {chat.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{chat.name}</CardTitle>
                <CardDescription>Online</CardDescription>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="h-4 w-4" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Chat Options</DropdownMenuLabel>
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>Search in Conversation</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Mute Notifications</DropdownMenuItem>
                  <DropdownMenuItem>Block User</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow overflow-hidden">
          <ScrollArea className="h-[300px] pr-4">
            {/* Placeholder messages */}
            <div className="space-y-4">
              <div className="flex justify-start">
                <div className="bg-accent rounded-lg p-2 max-w-[70%]">
                  <p className="text-sm">Hey, how's it going?</p>
                  <p className="text-xs text-gray-500 mt-1">10:30 AM</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-primary text-primary-foreground rounded-lg p-2 max-w-[70%]">
                  <p className="text-sm">Hi! I'm doing well, thanks. How about you?</p>
                  <p className="text-xs text-primary-foreground/70 mt-1">10:32 AM</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-accent rounded-lg p-2 max-w-[70%]">
                  <p className="text-sm">I'm good too. Did you finish the project?</p>
                  <p className="text-xs text-gray-500 mt-1">10:33 AM</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-primary text-primary-foreground rounded-lg p-2 max-w-[70%]">
                  <p className="text-sm">
                    Yes, I just submitted it. Can you review it when you have a chance?
                  </p>
                  <p className="text-xs text-primary-foreground/70 mt-1">10:35 AM</p>
                </div>
              </div>
            </div>
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form className="flex space-x-2 w-full" onSubmit={(e) => e.preventDefault()}>
            <Button variant="outline" size="icon">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Input
              placeholder="Type a message"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit">
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
          </form>
        </CardFooter>
      </div>
    );
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-6 h-[600px]">
        <div className="col-span-1">{renderChatList()}</div>
        <div className="col-span-2">{renderChatWindow()}</div>
      </div>
    </>
  );
};

export const RenderChatLayoutTwo = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "John", content: "Hey, how are you?", time: "10:00 AM" },
    { id: 2, sender: "You", content: "I'm good, thanks! How about you?", time: "10:05 AM" },
    { id: 3, sender: "John", content: "Doing well! Did you finish the project?", time: "10:10 AM" },
    {
      id: 4,
      sender: "You",
      content: "Yes, I just submitted it. Can you review when you have a chance?",
      time: "10:15 AM",
    },
  ]);

  const [input, setInput] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sendMessage = (e: any) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "You",
          content: input,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setInput("");
    }
  };

  return (
    <div className="flex h-[600px]  mx-auto border border-border rounded-lg overflow-hidden">
      <div className="w-1/3 border-r border-border bg-background">
        <div className="p-5 ">
          <Input placeholder="Search chats" className="w-full" />
        </div>
        <ScrollArea className="h-[calc(600px-65px)]">
          {["John", "Alice", "Bob", "Carol"].map((name, index) => (
            <div key={index} className="flex items-center gap-3 p-4 hover:bg-accent cursor-pointer">
              <Avatar>
                <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={name} />
                <AvatarFallback>{name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold">{name}</h3>
                <p className="text-sm text-muted-foreground">Last message...</p>
              </div>
              <span className="text-xs text-muted-foreground">12:34 PM</span>
            </div>
          ))}
        </ScrollArea>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="John" />
              <AvatarFallback>J</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold">John</h2>
              <p className="text-xs text-muted-foreground">Online</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <ScrollArea className="flex-1 p-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "You" ? "justify-end" : "justify-start"} mb-4`}
            >
              <div
                className={`max-w-[70%] p-3 rounded-lg ${message.sender === "You" ? "bg-primary text-primary-foreground" : "bg-accent"}`}
              >
                <p className="text-sm">{message.content}</p>
                <p className="text-xs text-muted-foreground mt-1">{message.time}</p>
              </div>
            </div>
          ))}
        </ScrollArea>
        <form onSubmit={sendMessage} className="flex items-center gap-2 p-4 border-t border-border">
          <Button type="button" variant="ghost" size="icon">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Input
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1"
          />
          <Button type="button" variant="ghost" size="icon">
            <Smile className="h-4 w-4" />
          </Button>
          <Button type="submit">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};
