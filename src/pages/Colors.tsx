

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui-shadcn/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui-shadcn/select"
import { Slider } from "@/components/ui-shadcn/slider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui-neobrutalism/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui-shadcn/tabs"
import { Label } from "@/components/ui-shadcn/label"
import { Copy, Plus } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui-shadcn/tooltip"
import { christmasColors, coffeeColors, coldColors, creamColors, cyberpunkColors, galaxyColors, goldColors, halloweenColors, initialTailwindColors, kidsColors, neonColors, pastelColors, rainbowColors, ramadhanColors, retroColors, seaColors, skyColors, spaceXColors, summerColors, sunsetColors, vintageColors, warmColors, weddingColors } from '@/utils/color'
import { Navbar } from '@/components/ui-main/Navbar'
import ScrollToTopButton from '@/components/ui-main/ScrollToTopButton'

function hslToRgb(h: number, s: number, l: number) {
    s /= 100
    l /= 100
    const k = (n: number) => (n + h / 30) % 12
    const a = s * Math.min(l, 1 - l)
    const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
    return [255 * f(0), 255 * f(8), 255 * f(4)].map(Math.round)
}

function rgbToHex(r: number, g: number, b: number) {
    return "#" + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')
}

function hexToRgb(hex: string): [number, number, number] {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    if (!result) {
        throw new Error(`Invalid hex color: ${hex}`)
    }
    return [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ]
}

function rgbToHsl(r: number, g: number, b: number) {
    r /= 255
    g /= 255
    b /= 255
    const max = Math.max(r, g, b), min = Math.min(r, g, b)
    let h: number = 0;
    let s
    const l = (max + min) / 2

    if (max === min) {
        h = s = 0
    } else {
        const d = max - min
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break
            case g: h = (b - r) / d + 2; break
            case b: h = (r - g) / d + 4; break
        }
        h /= 6
    }

    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)]
}


function generateGradation(hex: string) {
    const rgb = hexToRgb(hex)
    if (!rgb) return []
    const [h, s, l] = rgbToHsl(...rgb)
    return [
        { h, s, l: Math.max(0, l - 30) },
        { h, s, l: Math.max(0, l - 15) },
        { h, s, l },
        { h, s, l: Math.min(100, l + 15) },
        { h, s, l: Math.min(100, l + 30) },
    ]
}

function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
}

export default function Colors() {
    const [color, setColor] = useState({ h: 180, s: 50, l: 50 })
    const [format, setFormat] = useState<'hsl' | 'rgb' | 'hex'>('hex')
    const [tailwindColors, setTailwindColors] = useState(initialTailwindColors)
    const [colorPalettes, setColorPalettes] = useState<{ h: number, s: number, l: number }[][]>([])

    useEffect(() => {
        generateColorPalettes()
    }, [])

    const generateColorPalettes = () => {
        const newPalettes = Object.values(tailwindColors).map(hex => generateGradation(hex))
        setColorPalettes(newPalettes)
    }

    const addNewColor = () => {
        const newColor = generateRandomColor()
        const newColorName = `Custom ${Object.keys(tailwindColors).length + 1}`
        setTailwindColors(prev => ({ ...prev, [newColorName]: newColor }))
        setColorPalettes(prev => [...prev, generateGradation(newColor)])
    }

    const getColorString = (h: number, s: number, l: number, format: 'hsl' | 'rgb' | 'hex' = 'hsl') => {
        const rgb = hslToRgb(h, s, l)
        const [r, g, b] = rgb;
        const hex = rgbToHex(r, g, b);
        switch (format) {
            case 'hsl':
                return `hsl(${h}, ${s}%, ${l}%)`
            case 'rgb':
                return `rgb(${rgb.join(', ')})`
            case 'hex':
                return hex
        }
    }

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
    }

    const renderColorPalette = (colors: Record<string, string>, title: string) => (
        <Card className="mt-8 bg-white py-5">
            <CardHeader>
                <CardTitle>{title} Color Palette</CardTitle>
                <CardDescription>A selection of {title.toLowerCase()} colors</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {Object.entries(colors).map(([name, hex], index) => {
                        const gradation = generateGradation(hex)
                        return (
                            <div key={index} className="space-y-2">
                                <h3 className="text-lg font-semibold">{name}</h3>
                                <div className="grid grid-cols-5 gap-2">
                                    {gradation.map((color, colorIndex) => (
                                        <TooltipProvider key={colorIndex}>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <div className="space-y-1">
                                                        <div
                                                            className="h-12 rounded-md shadow-md cursor-pointer"
                                                            style={{ backgroundColor: getColorString(color.h, color.s, color.l, 'hex') }}
                                                        ></div>
                                                        <div className="text-xs text-center font-mono">
                                                            {getColorString(color.h, color.s, color.l, format)}
                                                        </div>
                                                    </div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>HEX: {getColorString(color.h, color.s, color.l, 'hex')}</p>
                                                    <p>RGB: {getColorString(color.h, color.s, color.l, 'rgb')}</p>
                                                    <p>HSL: {getColorString(color.h, color.s, color.l, 'hsl')}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </CardContent>
        </Card>
    )

    return (
        <div className="min-h-screen flex flex-col">
            {/* navbar */}
            <header>
                <Navbar />
            </header>
            <div className="flex flex-1 py-6">
                {/* Content */}
                <main className="flex-1 ml-1 py-4 px-7 pt-20 overflow-auto">
                    <div className="container mx-auto space-y-8 pt-20 ">
                        <Card className='bg-white'>
                            <CardHeader>
                                <CardTitle>Color Generator</CardTitle>
                                <CardDescription>Generate and explore colors in different formats</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-4">
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="w-24 h-24 rounded-md shadow-md"
                                            style={{ backgroundColor: getColorString(color.h, color.s, color.l) }}
                                        ></div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <span className="font-mono">{getColorString(color.h, color.s, color.l, format)}</span>
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    onClick={() => copyToClipboard(getColorString(color.h, color.s, color.l, format))}
                                                >
                                                    <Copy className="h-4 w-4" />
                                                </Button>
                                            </div>
                                            <Select value={format} onValueChange={(value: 'hsl' | 'rgb' | 'hex') => setFormat(value)}>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Color format" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="hsl">HSL</SelectItem>
                                                    <SelectItem value="rgb">RGB</SelectItem>
                                                    <SelectItem value="hex">HEX</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="grid gap-2">
                                            <Label>Hue</Label>
                                            <Slider
                                                min={0}
                                                max={360}
                                                step={1}
                                                value={[color.h]}
                                                onValueChange={(value) => setColor({ ...color, h: value[0] })}
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label>Saturation</Label>
                                            <Slider
                                                min={0}
                                                max={100}
                                                step={1}
                                                value={[color.s]}
                                                onValueChange={(value) => setColor({ ...color, s: value[0] })}
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label>Lightness</Label>
                                            <Slider
                                                min={0}
                                                max={100}
                                                step={1}
                                                value={[color.l]}
                                                onValueChange={(value) => setColor({ ...color, l: value[0] })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className='bg-white'>
                            <CardHeader>
                                <CardTitle>Theme Preview</CardTitle>
                                <CardDescription>Preview generated colors in a theme</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Tabs defaultValue="light" className="w-full">
                                    <TabsList className="grid w-full grid-cols-2">
                                        <TabsTrigger value="light">Light</TabsTrigger>
                                        <TabsTrigger value="dark">Dark</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="light">
                                        <div className="p-4 space-y-4" style={{ backgroundColor: `hsl(${color.h}, ${color.s}%, 95%)` }}>
                                            <h2 className="text-2xl font-bold" style={{ color: `hsl(${color.h}, ${color.s}%, 20%)` }}>Light Theme</h2>
                                            <p style={{ color: `hsl(${color.h}, ${color.s}%, 30%)` }}>This is how your theme might look in light mode.</p>
                                            <Button style={{ backgroundColor: `hsl(${color.h}, ${color.s}%, 50%)`, color: 'white' }}>
                                                Sample Button
                                            </Button>
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="dark">
                                        <div className="p-4 space-y-4" style={{ backgroundColor: `hsl(${color.h}, ${color.s}%, 20%)` }}>
                                            <h2 className="text-2xl font-bold" style={{ color: `hsl(${color.h}, ${color.s}%, 90%)` }}>Dark Theme</h2>
                                            <p style={{ color: `hsl(${color.h}, ${color.s}%, 80%)` }}>This is how your theme might look in dark mode.</p>
                                            <Button style={{ backgroundColor: `hsl(${color.h}, ${color.s}%, 60%)`, color: 'black' }}>
                                                Sample Button
                                            </Button>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </CardContent>
                        </Card>

                        <Card className='bg-white'>
                            <CardHeader>
                                <CardTitle>Tailwind Color Palettes</CardTitle>
                                <CardDescription>Color palettes based on Tailwind CSS colors with 5 gradations each</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    {Object.entries(tailwindColors).map(([name], paletteIndex) => (
                                        <div key={paletteIndex} className="space-y-2">
                                            <h3 className="text-lg font-semibold">{name}</h3>
                                            <div className="grid grid-cols-5 gap-2">
                                                {colorPalettes[paletteIndex]?.map((color, colorIndex) => (
                                                    <TooltipProvider key={colorIndex}>
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <div className="space-y-1">
                                                                    <div
                                                                        className="h-12 rounded-md shadow-md cursor-pointer"
                                                                        style={{ backgroundColor: getColorString(color.h, color.s, color.l, 'hex') }}
                                                                    ></div>
                                                                    <div className="text-xs text-center font-mono">
                                                                        {getColorString(color.h, color.s, color.l, format)}
                                                                    </div>
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p>HEX: {getColorString(color.h, color.s, color.l, 'hex')}</p>
                                                                <p>RGB: {getColorString(color.h, color.s, color.l, 'rgb')}</p>
                                                                <p>HSL: {getColorString(color.h, color.s, color.l, 'hsl')}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <div className="space-x-2">
                                        <Button onClick={addNewColor}>
                                            <Plus className="w-4 h-4 mr-2" />
                                            Add New Color
                                        </Button>
                                    </div>
                                    <Select value={format} onValueChange={(value: 'hsl' | 'rgb' | 'hex') => setFormat(value)}>
                                        <SelectTrigger className="w-[120px]">
                                            <SelectValue placeholder="Color format" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="hsl">HSL</SelectItem>
                                            <SelectItem value="rgb">RGB</SelectItem>
                                            <SelectItem value="hex">HEX</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </CardContent>
                        </Card>

                        {renderColorPalette(pastelColors, 'Pastel')}
                        {renderColorPalette(retroColors, 'Retro')}
                        {renderColorPalette(vintageColors, 'Vintage')}
                        {renderColorPalette(neonColors, 'Neon')}
                        {renderColorPalette(goldColors, 'Gold')}
                        {renderColorPalette(warmColors, 'Warm')}
                        {renderColorPalette(coldColors, 'Cold')}
                        {renderColorPalette(summerColors, 'Summer')}
                        {renderColorPalette(sunsetColors, 'Sunset')}
                        {renderColorPalette(skyColors, 'Sky')}
                        {renderColorPalette(seaColors, 'Sea')}
                        {renderColorPalette(coffeeColors, 'Coffee')}
                        {renderColorPalette(creamColors, 'Cream')}
                        {renderColorPalette(kidsColors, 'Kids')}
                        {renderColorPalette(rainbowColors, 'Rainbow')}
                        {renderColorPalette(spaceXColors, 'Space')}
                        {renderColorPalette(galaxyColors, 'Galaxy')}
                        {renderColorPalette(cyberpunkColors, 'Cyberpunk')}
                        {renderColorPalette(weddingColors, 'Wedding')}
                        {renderColorPalette(halloweenColors, 'Halloween')}
                        {renderColorPalette(christmasColors, 'Christmas')}
                        {renderColorPalette(ramadhanColors, 'Ramadhan')}

                    </div>
                </main>

            </div>
            <footer className="text-black py-1">
                <div className="mx-auto px-4">
                    <div className="text-end text-xs">
                        © 2024 MoupUI . All rights reserved.
                    </div>
                </div>
            </footer>
            <ScrollToTopButton />
        </div>
    )
}