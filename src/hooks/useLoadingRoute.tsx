import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function useLoadingRoute() {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        // Simulasi minimum loading time untuk menghindari flash
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [location]);

    return isLoading;
}