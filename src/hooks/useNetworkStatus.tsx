import { NetworkStatus } from '@/types/network-indicator';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export function useNetworkStatus() {
    const [status, setStatus] = useState<NetworkStatus>({
        online: navigator.onLine
    });

    const [prevOnline, setPrevOnline] = useState<boolean | null>(null);

    useEffect(() => {
        const handleOnline = () => {
            const connection = (navigator as any).connection;
            const newStatus: NetworkStatus = {
                online: true,
                type: connection?.effectiveType,
                downlink: connection?.downlink,
                rtt: connection?.rtt,
            };

            setStatus(newStatus);


            if (prevOnline === false) {
                toast.success('Connection Restored', {
                    description: 'You are back online and connected to the internet.',
                    duration: 4000,
                    icon: '✅',
                    className: 'bg-green-50 border-green-200 text-green-900 dark:bg-green-900/20 dark:border-green-800 dark:text-green-100',
                });
            }

            setPrevOnline(true);
        };

        const handleOffline = () => {
            setStatus({ online: false });

            toast.error('Connection Lost', {
                description: 'You are currently offline. Please check your internet connection.',
                duration: 6000,
                icon: '❌',
                className: 'bg-red-50 border-red-200 text-red-900 dark:bg-red-900/20 dark:border-red-800 dark:text-red-100',
                action: {
                    label: 'Retry',
                    onClick: () => {
                        if (navigator.onLine) {
                            toast.success('Reconnected', {
                                description: 'Connection restored after retry.',
                                duration: 3000,
                            });
                        } else {
                            toast.error('Still Offline', {
                                description: 'Unable to connect. Check network settings.',
                                duration: 4000,
                            });
                        }
                    }
                }
            });

            setPrevOnline(false);
        };

        const handleConnectionChange = () => {
            const connection = (navigator as any).connection;
            if (connection) {
                const newStatus: NetworkStatus = {
                    online: navigator.onLine,
                    type: connection.effectiveType,
                    downlink: connection.downlink,
                    rtt: connection.rtt,
                };

                setStatus(newStatus);

                if (navigator.onLine && status.type !== connection.effectiveType) {
                    toast.info('Network Changed', {
                        description: `Switched to ${connection.effectiveType.toUpperCase()} network`,
                        duration: 3000,
                    });
                }
            }
        };
        setPrevOnline(navigator.onLine);

        if (!navigator.onLine && prevOnline !== false) {
            handleOffline();
        }

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        const connection = (navigator as any).connection;
        if (connection) {
            connection.addEventListener('change', handleConnectionChange);
        }

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);

            if (connection) {
                connection.removeEventListener('change', handleConnectionChange);
            }
        };
    }, [prevOnline]);

    return status;
}