import { useState } from "react";
import { TrendingUp, AlertTriangle, Shield, MapPin, Activity, FileText, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import RiskBadge from "./RiskBadge";
import TransactionCard from "./TransactionCard";

export default function RegulatorDashboard() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  //todo: remove mock functionality
  const metrics = {
    totalVendors: 1247,
    compliantVendors: 94.2,
    totalTransactions: 8932,
    highRiskFlagged: 12.8,
    totalSKUs: 3456
  };

  const alerts = [
    {
      id: "ALT-001",
      type: "High Risk Transaction",
      description: "Bulk pesticide purchase exceeding threshold limits",
      vendor: "AgriSupply Mumbai",
      timestamp: "2025-01-15 15:45",
      severity: "high" as const
    },
    {
      id: "ALT-002", 
      type: "Compliance Violation",
      description: "Missing buyer verification documentation",
      vendor: "ChemCorp Delhi",
      timestamp: "2025-01-15 14:22",
      severity: "medium" as const
    },
    {
      id: "ALT-003",
      type: "Suspicious Pattern",
      description: "Repeated acid purchases from same location",
      vendor: "Industrial Solutions Pune",
      timestamp: "2025-01-15 13:10",
      severity: "high" as const
    }
  ];

  const recentTransactions = [
    {
      id: "0x9f2e8b1a",
      productName: "Hydrochloric Acid 37%",
      buyerName: "Metal Processing Ltd",
      quantity: "25 Liters",
      timestamp: "2025-01-15 15:30",
      risk: "medium" as const,
      blockchainHash: "0x9f2e8b1a3c6d9e2f5g8h1i4j7k0l3m6n9o2p5q8r1s4t"
    },
    {
      id: "0x3a7b4c8d",
      productName: "Pesticide Concentrate",
      buyerName: "Farm Solutions Inc",
      quantity: "10 Liters",
      timestamp: "2025-01-15 15:15",
      risk: "high" as const,
      blockchainHash: "0x3a7b4c8d1e4f7g0h3i6j9k2l5m8n1o4p7q0r3s6t9u2v"
    },
    {
      id: "0x8e5f2c9b",
      productName: "Salphos 56EC",
      buyerName: "Crop Care Services",
      quantity: "5 Liters",
      timestamp: "2025-01-15 14:50",
      risk: "low" as const,
      blockchainHash: "0x8e5f2c9b6d3a0g7h4i1j8k5l2m9n6o3p0q7r4s1t8u5v"
    }
  ];

  const regionData = [
    { name: "Mumbai", risk: "high", transactions: 1543, alerts: 8 },
    { name: "Delhi", risk: "medium", transactions: 1234, alerts: 4 },
    { name: "Bangalore", risk: "low", transactions: 987, alerts: 1 },
    { name: "Chennai", risk: "medium", transactions: 876, alerts: 3 },
    { name: "Pune", risk: "high", transactions: 743, alerts: 6 }
  ];

  const downloadReport = () => {
    console.log("Downloading compliance report...");
    // Simulate report download
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Regulator Dashboard</h1>
            <p className="text-muted-foreground">Real-time monitoring & compliance oversight</p>
          </div>
          
          <Button onClick={downloadReport} data-testid="button-download-report">
            <Download className="mr-2 h-4 w-4" />
            Download Report
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card data-testid="card-metric-vendors">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Total Vendors</span>
              </div>
              <div className="text-2xl font-bold mt-2">{metrics.totalVendors.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">Registered vendors</div>
            </CardContent>
          </Card>

          <Card data-testid="card-metric-compliance">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">Compliance</span>
              </div>
              <div className="text-2xl font-bold mt-2 text-green-600">{metrics.compliantVendors}%</div>
              <Progress value={metrics.compliantVendors} className="mt-2 h-2" />
            </CardContent>
          </Card>

          <Card data-testid="card-metric-transactions">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Activity className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium">Transactions</span>
              </div>
              <div className="text-2xl font-bold mt-2">{metrics.totalTransactions.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">This month</div>
            </CardContent>
          </Card>

          <Card data-testid="card-metric-risk">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <span className="text-sm font-medium">High Risk</span>
              </div>
              <div className="text-2xl font-bold mt-2 text-yellow-600">{metrics.highRiskFlagged}%</div>
              <div className="text-xs text-muted-foreground">Flagged transactions</div>
            </CardContent>
          </Card>

          <Card data-testid="card-metric-skus">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium">Total SKUs</span>
              </div>
              <div className="text-2xl font-bold mt-2">{metrics.totalSKUs.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">Chemical products</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Risk Heatmap */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Regional Risk Heatmap</span>
              </CardTitle>
              <CardDescription>
                Transaction volumes and risk levels by region
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {regionData.map((region) => (
                  <div 
                    key={region.name}
                    className={`p-4 rounded-lg border cursor-pointer transition-all hover-elevate ${
                      selectedRegion === region.name ? 'border-primary bg-primary/5' : 'border-border'
                    }`}
                    onClick={() => setSelectedRegion(region.name)}
                    data-testid={`region-${region.name.toLowerCase()}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="font-medium">{region.name}</span>
                        <RiskBadge risk={region.risk as "low" | "medium" | "high"} />
                      </div>
                      <div className="text-right text-sm">
                        <div className="font-semibold">{region.transactions}</div>
                        <div className="text-muted-foreground">transactions</div>
                      </div>
                    </div>
                    {region.alerts > 0 && (
                      <div className="mt-2 text-sm text-destructive">
                        {region.alerts} active alerts
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Active Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5" />
                <span>Active Alerts</span>
              </CardTitle>
              <CardDescription>
                Flagged transactions requiring attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div 
                    key={alert.id} 
                    className="p-3 border border-border rounded-lg"
                    data-testid={`alert-${alert.id}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {alert.id}
                      </Badge>
                      <RiskBadge risk={alert.severity} />
                    </div>
                    
                    <h4 className="font-semibold text-sm mb-1">{alert.type}</h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      {alert.description}
                    </p>
                    
                    <div className="text-xs text-muted-foreground">
                      <div>Vendor: {alert.vendor}</div>
                      <div>Time: {alert.timestamp}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5" />
              <span>Live Transaction Feed</span>
            </CardTitle>
            <CardDescription>
              Real-time chemical transaction monitoring with blockchain verification
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <TransactionCard key={transaction.id} transaction={transaction} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}