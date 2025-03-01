"use client"

import * as React from "react"
import { Wifi, WifiOff } from 'lucide-react'
import { useNetworkStatus } from "@/hooks/useNetworkStatus"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { NetworkIndicatorProps } from "@/types/network-indicator"


export function NetworkIndicator({ className, ...props }: NetworkIndicatorProps) {
    const { online } = useNetworkStatus()
    const [show, setShow] = React.useState(false)

    React.useEffect(() => {
        // Show indicator when status changes
        setShow(true)

        // Set timer to hide after 3 seconds
        const timer = setTimeout(() => {
            setShow(false)
        }, 3000)

        // Cleanup timer
        return () => clearTimeout(timer)
    }, [online])

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed inset-x-0 top-4 flex justify-center z-50"
                >
                    <div
                        className={cn(
                            "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-lg",
                            online
                                ? "bg-green-500 text-white"
                                : "bg-red-500 text-white",
                            className
                        )}
                        {...props}
                    >
                        {online ? (
                            <>
                                <Wifi className="h-4 w-4" />
                                <span>Connection Available</span>
                            </>
                        ) : (
                            <>
                                <WifiOff className="h-4 w-4" />
                                <span>Connection Lost</span>
                            </>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}