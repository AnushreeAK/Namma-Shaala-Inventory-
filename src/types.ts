export type AssetStatus = 'working' | 'repair' | 'broken' | 'missing';

export interface Asset {
  id: string;
  name: string;
  category: string;
  location: string;
  serialNumber: string;
  status: AssetStatus;
  imageUrl: string;
  lastChecked: string;
  assignedTo?: string;
  notes?: string;
}

export interface AuditSummary {
  totalAssets: number;
  needingRepair: number;
  broken: number;
  verificationProgress: number;
  verifiedCount: number;
}
