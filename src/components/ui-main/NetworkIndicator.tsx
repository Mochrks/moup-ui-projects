'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, WifiOff, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { useNetworkStatus } from '@/hooks/useNetworkStatus';
import { NetworkIndicatorProps } from '@/types/network-indicator';

export function NetworkIndicator({
    className,
    showDetails = false,
    autoHide = true,
    hideDuration = 5000
}: NetworkIndicatorProps & { autoHide?: boolean; hideDuration?: number }) {
    const status = useNetworkStatus();
    const [expanded, setExpanded] = useState(false);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        if (autoHide && status.online) {
            const timer = setTimeout(() => {
                setVisible(false);
            }, hideDuration);

            return () => clearTimeout(timer);
        } else {
            setVisible(true);
        }
    }, [status.online, autoHide, hideDuration]);

    useEffect(() => {
        setVisible(true);
    }, [status.online]);

    if (!status.online) {
        return (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-x-0 top-4 z-50 flex justify-center"
            >
                <div
                    className={cn(
                        "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-lg",
                        "bg-red-500 text-white animate-pulse",
                        className
                    )}
                >
                    <WifiOff className="h-4 w-4" />
                    <span>No Internet Connection</span>
                </div>
            </motion.div>
        );
    }

    if (!showDetails || !visible) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-4 z-50 flex justify-center"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => {
                if (autoHide) {
                    setTimeout(() => setVisible(false), 1000);
                }
            }}
        >
            <div
                className={cn(
                    "flex flex-col rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden",
                    "animate-in slide-in-from-top duration-300",
                    className
                )}
            >
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="flex items-center justify-between gap-2 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                    <div className="flex items-center gap-2">
                        <Wifi className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium">Connected</span>
                        {status.type && (
                            <span className="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                                {status.type.toUpperCase()}
                            </span>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        {status.downlink && (
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                {status.downlink} Mbps
                            </span>
                        )}
                        <ChevronDown className={cn(
                            "h-4 w-4 transition-transform",
                            expanded && "rotate-180"
                        )} />
                    </div>
                </button>

                <AnimatePresence>
                    {expanded && status.type && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 text-xs space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-500 dark:text-gray-400">Network Type:</span>
                                    <span className="font-medium">{status.type.toUpperCase()}</span>
                                </div>
                                {status.downlink && (
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500 dark:text-gray-400">Speed:</span>
                                        <span className="font-medium">{status.downlink} Mbps</span>
                                    </div>
                                )}
                                {status.rtt && (
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500 dark:text-gray-400">Latency:</span>
                                        <span className="font-medium">{status.rtt} ms</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}