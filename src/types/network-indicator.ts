export interface NetworkIndicatorProps {
  className?: string;
  onlineStatus?: boolean;
  showDetails?: boolean;
}

export interface NetworkStatus {
  online: boolean;
  type?: string;
  downlink?: number;
  rtt?: number;
  className?: string;
}
