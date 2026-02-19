import { useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui-neobrutalism/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui-neobrutalism/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui-neobrutalism/select";
import TextEditor from "@/components/ui-main/TextEditor";
import { AiOutlineEye } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";
import { CodePreviewCardProps } from "@/types/code-preview";

export default function CodePreview({
  title,
  code,
  codeNext,
  codeHtml,
  language = "tsx",
  preview,
  nameFile,
}: CodePreviewCardProps) {
  const [activeTab, setActiveTab] = useState<string>("preview");
  const [codeType, setCodeType] = useState<"react" | "next" | "html">("react");

  const currentCode =
    codeType === "react" ? code : codeType === "next" ? codeNext || code : codeHtml || code;
  const currentLanguage = codeType === "html" ? "html" : language;
  const currentFileName = codeType === "html" ? nameFile.replace(/\.tsx?$/, ".html") : nameFile;

  return (
    <Card className="w-full">
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex border-b-2 border-zinc-600 py-2">
            <CardTitle className="flex-1 py-6  items-center justify-center">{title}</CardTitle>
            <div className="flex items-center ">
              <TabsList className="grid w-full grid-cols-2 space-x-1">
                <TabsTrigger value="preview">
                  <AiOutlineEye className="w-5 h-5 mr-1 " />
                  View
                </TabsTrigger>
                <TabsTrigger value="code">
                  <FaCode className="w-5 h-5 mr-1" />
                  Code
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
          <TabsContent value="preview" className="mt-4">
            <div className="border rounded-md p-4 bg-white">{preview}</div>
          </TabsContent>
          <TabsContent value="code" className="mt-4">
            <TextEditor
              code={currentCode}
              language={currentLanguage}
              nameFile={currentFileName}
              headerAction={
                <Select
                  value={codeType}
                  onValueChange={(v: "react" | "next" | "html") => setCodeType(v)}
                >
                  <SelectTrigger className="w-[100px] h-8 bg-[#252526] text-white border-0 shadow-none focus:ring-0 focus:ring-offset-0 px-2 py-1 text-xs">
                    <SelectValue placeholder="Format" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#252526] text-white border-none shadow-xl">
                    <SelectItem
                      value="react"
                      className="text-white hover:bg-[#37373d] focus:bg-[#37373d]"
                    >
                      React
                    </SelectItem>
                    <SelectItem
                      value="next"
                      className="text-white hover:bg-[#37373d] focus:bg-[#37373d]"
                    >
                      Next.js
                    </SelectItem>
                    <SelectItem
                      value="html"
                      className="text-white hover:bg-[#37373d] focus:bg-[#37373d]"
                    >
                      HTML
                    </SelectItem>
                  </SelectContent>
                </Select>
              }
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
