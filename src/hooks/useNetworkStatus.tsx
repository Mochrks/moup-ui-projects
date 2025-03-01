"use client"

import * as React from "react"

interface NetworkStatus {
    online: boolean
    lastChanged: Date | null
    since: Date | null
}

export function useNetworkStatus() {
    const [status, setStatus] = React.useState<NetworkStatus>({
        online: typeof window !== 'undefined' ? navigator.onLine : true,
        lastChanged: null,
        since: null,
    })

    React.useEffect(() => {
        const handleOnline = () => {
            setStatus(prev => ({
                online: true,
                lastChanged: new Date(),
                since: prev.since || new Date(),
            }))
        }

        const handleOffline = () => {
            setStatus(prev => ({
                online: false,
                lastChanged: new Date(),
                since: prev.since || new Date(),
            }))
        }

        if (typeof window !== 'undefined') {
            window.addEventListener('online', handleOnline)
            window.addEventListener('offline', handleOffline)

            // Initial check
            setStatus(prev => ({
                online: navigator.onLine,
                lastChanged: null,
                since: prev.since || new Date(),
            }))
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('online', handleOnline)
                window.removeEventListener('offline', handleOffline)
            }
        }
    }, [])

    return status
}