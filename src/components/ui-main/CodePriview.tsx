import { useState } from 'react'
import { Card, CardContent, CardTitle } from "@/components/ui-neobrutalism/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui-neobrutalism/tabs"
import TextEditor from '@/components/ui-main/TextEditor';
import { AiOutlineEye } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";
import { CodePreviewCardProps } from '@/types/code-preview';


export default function CodePreview({ title, code, language = 'tsx', preview, nameFile }: CodePreviewCardProps) {
    const [activeTab, setActiveTab] = useState<string>('preview')

    return (
        <Card className="w-full">
            <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <div className='flex border-b-2 border-zinc-600 py-2'>
                        <CardTitle className='flex-1 py-6  items-center justify-center'>{title}</CardTitle>
                        <div className='flex items-center '>
                            <TabsList className="grid w-full grid-cols-2 space-x-1">
                                <TabsTrigger value="preview"><AiOutlineEye className='w-5 h-5 mr-1 ' />View</TabsTrigger>
                                <TabsTrigger value="code"><FaCode className='w-5 h-5 mr-1' />Code</TabsTrigger>
                            </TabsList>
                        </div>
                    </div>
                    <TabsContent value="preview" className="mt-4">
                        <div className="border rounded-md p-4 bg-white">
                            {preview}
                        </div>
                    </TabsContent>
                    <TabsContent value="code" className="mt-4">
                        <TextEditor code={code} language={language} nameFile={nameFile} />
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    )
}