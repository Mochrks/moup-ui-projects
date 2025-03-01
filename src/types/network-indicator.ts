
export interface NetworkIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly className?: string;
    onlineStatus?: boolean;
}