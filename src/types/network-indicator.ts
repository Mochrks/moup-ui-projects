export interface NetworkIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly className?: string;
  onlineStatus?: boolean;
}

export interface NetworkStatus {
  online: boolean;
  type?: string;
  downlink?: number;
  rtt?: number;
  className?: string;
}

export interface NetworkIndicatorProps {
  className?: string;
  showDetails?: boolean;
}
