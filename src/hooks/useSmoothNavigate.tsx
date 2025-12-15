import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const useSmoothNavigate = () => {
    const navigate = useNavigate();
    const [isNavigating, setIsNavigating] = useState(false);

    const smoothNavigate = (to: string) => {
        if (isNavigating) return;

        setIsNavigating(true);
        const event = new CustomEvent('routeChangeStart', { detail: { to } });
        window.dispatchEvent(event);

        setTimeout(() => {
            navigate(to);

            setTimeout(() => {
                setIsNavigating(false);
                const eventEnd = new CustomEvent('routeChangeEnd');
                window.dispatchEvent(eventEnd);
            }, 300);
        }, 100);
    };

    return { smoothNavigate, isNavigating };
};
