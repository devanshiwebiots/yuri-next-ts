export interface RecentOrderTypes {
  id: number;
  orderId: string;
  image: string;
  name: string;
  product: string;
  amount: string;
  vendor: string;
  statusColor: string;
  statusText: string;
  ratingValue: number;
  ratingText: string;
}

export interface CustomComponentProps {
  src?: string;
  name?: string;
  span?: string;
  value?: number;
  color?: string;
  spanClass?: string;
}

export interface StockReportTypes {
  id: number;
  orderId: string;
  item: string;
  amount: string;
  date: string;
  statusColor: string;
  statusText: string;
  quantity: string;
}
