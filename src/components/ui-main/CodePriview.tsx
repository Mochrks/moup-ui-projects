"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui-neobrutalism/card";
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
import { motion, AnimatePresence } from "framer-motion";

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
    <Card className="w-full border-2 border-black shadow-[4px_4px_0_0_#000] overflow-hidden bg-white">
      <CardContent className="p-0">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-b-2 border-black bg-zinc-50/50">
            <div className="px-5 py-4 flex items-center gap-3 border-b-2 sm:border-b-0 sm:border-r-2 border-black bg-white min-w-[180px]">
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
              <h4 className="font-black text-sm uppercase tracking-wider truncate">{title}</h4>
            </div>

            <div className="flex items-center p-2 gap-2 overflow-x-auto no-scrollbar">
              <TabsList className="bg-zinc-200/50 p-1 border-2 border-black rounded-lg h-10">
                <TabsTrigger
                  value="preview"
                  className="px-4 text-xs font-bold data-[state=active]:bg-black data-[state=active]:text-[#ffe135] transition-all"
                >
                  <AiOutlineEye className="w-4 h-4 mr-2" />
                  Preview
                </TabsTrigger>
                <TabsTrigger
                  value="code"
                  className="px-4 text-xs font-bold data-[state=active]:bg-black data-[state=active]:text-[#ffe135] transition-all"
                >
                  <FaCode className="w-4 h-4 mr-2" />
                  Code
                </TabsTrigger>
              </TabsList>
            </div>
          </div>

          {/* Content Area */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <TabsContent value="preview" className="m-0 focus-visible:ring-0 outline-none">
                <motion.div
                  key="preview"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 md:p-8 min-h-[300px] flex items-center justify-center bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] bg-zinc-50/30"
                >
                  <div className="w-full max-w-full overflow-x-auto py-2 flex justify-center">
                    <div className="w-full">{preview}</div>
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="code" className="m-0 focus-visible:ring-0 outline-none">
                <motion.div
                  key="code"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <TextEditor
                    code={currentCode}
                    language={currentLanguage}
                    nameFile={currentFileName}
                    headerAction={
                      <Select
                        value={codeType}
                        onValueChange={(v: "react" | "next" | "html") => setCodeType(v)}
                      >
                        <SelectTrigger className="w-[110px] h-8 bg-[#252526] text-white border-2 border-white/10 shadow-none focus:ring-0 focus:ring-offset-0 px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-md hover:bg-[#323233] transition-colors">
                          <SelectValue placeholder="Format" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#252526] text-white border-2 border-white/20 shadow-2xl rounded-xl">
                          <SelectItem
                            value="react"
                            className="text-[11px] font-bold py-2 focus:bg-white/10"
                          >
                            REACT / VITE
                          </SelectItem>
                          <SelectItem
                            value="next"
                            className="text-[11px] font-bold py-2 focus:bg-white/10"
                          >
                            NEXT.JS (APP)
                          </SelectItem>
                          <SelectItem
                            value="html"
                            className="text-[11px] font-bold py-2 focus:bg-white/10"
                          >
                            VANILLA HTML
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    }
                  />
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
}
