export interface ReportSummary {
  currentInventory: number;
  lowStock: number;
  stockMovements: number;
  categories: number;
}

export interface ReportTransactionItem {
  id: number;
  date: Date | null;
  sku: string;
  product: string;
  transactionType: string;
  quantity: number;
  employee: string;
  remarks: string | null;
}

export interface ReportsResponse {
  summary: ReportSummary;

  recentTransactions: {
    items: ReportTransactionItem[];
    pagination: {
      page: number;
      pageSize: number;
      totalItems: number;
      totalPages: number;
    };
  };
}