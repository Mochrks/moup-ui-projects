import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Highlight, themes, type Language } from 'prism-react-renderer'

interface VSCodeEditorProps {
    code: string
    language?: Language
}

export default function VSCodeEditor({ code, language = 'tsx' }: VSCodeEditorProps) {
    const [isCopied, setIsCopied] = useState(false)

    const handleCopyCode = () => {
        navigator.clipboard.writeText(code).then(() => {
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 2000)
        })
    }

    return (
        <div className="border rounded-md overflow-hidden bg-[#1E1E1E] text-[#D4D4D4]">
            <div className="flex justify-between items-center p-2 bg-[#252526]">
                <span className="text-sm font-mono ml-3">{language}</span>
                <Button
                    variant="neutral"
                    size="sm"
                    onClick={handleCopyCode}
                    className="text-black hover:text-black"
                >
                    {isCopied ? (
                        <Check className="h-4 w-4" />
                    ) : (
                        <Copy className="h-4 w-4" />
                    )}
                </Button>
            </div>
            <ScrollArea className="h-[300px] w-full">
                <div className="min-w-full inline-block">
                    <Highlight theme={themes.vsDark} code={code} language={language}>
                        {({ className, style, tokens, getLineProps, getTokenProps }) => (
                            <pre className={`${className} p-4 font-mono text-sm`} style={style}>
                                {tokens.map((line, i) => (
                                    <div key={i} {...getLineProps({ line, key: i })} className="table-row">
                                        <span className="table-cell text-right pr-4 select-none opacity-50 w-[1%] whitespace-nowrap">
                                            {i + 1}
                                        </span>
                                        <span className="table-cell whitespace-pre">
                                            {line.map((token, key) => (
                                                <span key={key} {...getTokenProps({ token, key })} />
                                            ))}
                                        </span>
                                    </div>
                                ))}
                            </pre>
                        )}
                    </Highlight>
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    )
}