import { useTheme } from 'next-themes';
import { Toaster as SonnerToaster } from 'sonner';

export function Toaster() {
    const { theme } = useTheme();

    return (
        <SonnerToaster
            theme={theme as "light" | "dark" | "system"}
            className="toaster group"
            position="bottom-right"
            toastOptions={{
                classNames: {
                    toast:
                        "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                    description: "group-[.toast]:text-muted-foreground",
                    actionButton:
                        "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                    cancelButton:
                        "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
                },
            }}
            icons={{
                success: (
                    <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
                        <div className="h-2 w-2 bg-white rounded-full" />
                    </div>
                ),
                error: (
                    <div className="h-4 w-4 rounded-full bg-red-500 flex items-center justify-center">
                        <div className="h-1.5 w-1.5 bg-white rounded-full" />
                    </div>
                ),
                warning: (
                    <div className="h-4 w-4 rounded-full bg-yellow-500 flex items-center justify-center">
                        <div className="h-1.5 w-1.5 bg-white rounded-full" />
                    </div>
                ),
                info: (
                    <div className="h-4 w-4 rounded-full bg-blue-500 flex items-center justify-center">
                        <div className="h-1.5 w-1.5 bg-white rounded-full" />
                    </div>
                ),
            }}
        />
    );
}