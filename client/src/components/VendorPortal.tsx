import { useState } from "react";
import { Scan, User, Package, Upload, Clock, Wifi, WifiOff, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import RiskBadge from "./RiskBadge";
import TransactionCard from "./TransactionCard";

export default function VendorPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [offlineMode, setOfflineMode] = useState(false);
  const [scanData, setScanData] = useState("");
  const [buyerInfo, setBuyerInfo] = useState({ name: "", id: "", quantity: "" });
  const [isScanning, setIsScanning] = useState(false);
  const [riskAssessment, setRiskAssessment] = useState<"low" | "medium" | "high" | null>(null);

  //todo: remove mock functionality
  const mockTransactions = [
    {
      id: "0x7b8a9c2d",
      productName: "Sulfuric Acid 98%",
      buyerName: "Industrial Corp Ltd",
      quantity: "5 Liters",
      timestamp: "2025-01-15 14:30",
      risk: "low" as const,
      blockchainHash: "0x7b8a9c2d4f1e6h3k9l2m5n8p0q3r6s9t2v5w8x1z4a7b"
    },
    {
      id: "0x4f7e2a1b",
      productName: "Salphos 56EC",
      buyerName: "AgriTech Solutions",
      quantity: "2.5 Liters",
      timestamp: "2025-01-15 12:15",
      risk: "medium" as const,
      blockchainHash: "0x4f7e2a1b8c5d0g3h6i9j2k5l8m1n4o7p0q3r6s9t2u5v"
    },
    {
      id: "0x9e3c5d7f",
      productName: "Rodenticide Pellets",
      buyerName: "Pest Control Inc",
      quantity: "10 Kg",
      timestamp: "2025-01-15 10:45",
      risk: "high" as const,
      blockchainHash: "0x9e3c5d7f1a4b7c0d3e6f9g2h5i8j1k4l7m0n3o6p9q2r"
    }
  ];

  const handleLogin = () => {
    console.log("Biometric login simulation");
    setIsLoggedIn(true);
  };

  const handleScan = () => {
    setIsScanning(true);
    console.log("QR/RFID scan simulation");
    
    // Simulate scanning delay
    setTimeout(() => {
      setScanData("CHEM-H2SO4-98-500ML-LOT2025001");
      setIsScanning(false);
    }, 2000);
  };

  const handleSubmitTransaction = () => {
    console.log("Transaction submission:", { scanData, buyerInfo, offlineMode });
    
    // Simulate AI risk assessment
    const risks: ("low" | "medium" | "high")[] = ["low", "medium", "high"];
    const randomRisk = risks[Math.floor(Math.random() * risks.length)];
    setRiskAssessment(randomRisk);
    
    // Reset form
    setBuyerInfo({ name: "", id: "", quantity: "" });
    setScanData("");
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Vendor Portal Login</CardTitle>
            <CardDescription>
              Authenticate with biometric eKYC verification
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input 
                  id="username" 
                  placeholder="Enter vendor username" 
                  data-testid="input-username"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Enter password" 
                  data-testid="input-password"
                />
              </div>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <User className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Biometric Verification</span>
              </div>
              <p className="text-xs text-muted-foreground">
                In production, this would use fingerprint or facial recognition for secure vendor authentication.
              </p>
            </div>
            
            <Button 
              className="w-full" 
              onClick={handleLogin}
              data-testid="button-login"
            >
              Login with Mock Credentials
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 space-y-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Vendor Portal</h1>
            <p className="text-muted-foreground">Chemical transaction management & compliance</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {offlineMode ? <WifiOff className="h-4 w-4 text-destructive" /> : <Wifi className="h-4 w-4 text-primary" />}
              <Label htmlFor="offline-mode" className="text-sm">Offline Mode</Label>
              <Switch 
                id="offline-mode"
                checked={offlineMode} 
                onCheckedChange={setOfflineMode}
                data-testid="switch-offline-mode"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Product Scanning */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Scan className="h-5 w-5" />
                <span>Product Scanning</span>
              </CardTitle>
              <CardDescription>
                Scan QR codes or RFID tags to identify chemical products
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                {isScanning ? (
                  <div className="space-y-3">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                    <p className="text-sm text-muted-foreground">Scanning product...</p>
                  </div>
                ) : scanData ? (
                  <div className="space-y-3">
                    <CheckCircle className="h-8 w-8 text-primary mx-auto" />
                    <p className="font-mono text-sm bg-muted p-2 rounded">
                      {scanData}
                    </p>
                    <Badge variant="outline">Sulfuric Acid 98% - 500ml</Badge>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Package className="h-8 w-8 text-muted-foreground mx-auto" />
                    <p className="text-sm text-muted-foreground">
                      Click to simulate QR/RFID scan
                    </p>
                  </div>
                )}
              </div>
              
              <Button 
                className="w-full" 
                onClick={handleScan}
                disabled={isScanning}
                data-testid="button-scan-product"
              >
                {isScanning ? "Scanning..." : "Scan Product"}
              </Button>
            </CardContent>
          </Card>

          {/* Transaction Form */}
          <Card>
            <CardHeader>
              <CardTitle>Transaction Details</CardTitle>
              <CardDescription>
                Enter buyer information and transaction details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="buyer-name">Buyer Name</Label>
                <Input
                  id="buyer-name"
                  placeholder="Full name of purchaser"
                  value={buyerInfo.name}
                  onChange={(e) => setBuyerInfo({...buyerInfo, name: e.target.value})}
                  data-testid="input-buyer-name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="buyer-id">Buyer ID/License</Label>
                <Input
                  id="buyer-id"
                  placeholder="Government ID or license number"
                  value={buyerInfo.id}
                  onChange={(e) => setBuyerInfo({...buyerInfo, id: e.target.value})}
                  data-testid="input-buyer-id"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  placeholder="Amount being purchased"
                  value={buyerInfo.quantity}
                  onChange={(e) => setBuyerInfo({...buyerInfo, quantity: e.target.value})}
                  data-testid="input-quantity"
                />
              </div>

              {riskAssessment && (
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">AI Risk Assessment:</span>
                    <RiskBadge risk={riskAssessment} />
                  </div>
                </div>
              )}
              
              <Button 
                className="w-full" 
                onClick={handleSubmitTransaction}
                disabled={!scanData || !buyerInfo.name || !buyerInfo.id || !buyerInfo.quantity}
                data-testid="button-submit-transaction"
              >
                {offlineMode ? (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Submit Offline (Sync Later)
                  </>
                ) : (
                  "Submit Transaction"
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Transaction History */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Transaction History</span>
            </CardTitle>
            <CardDescription>
              Recent chemical sales with blockchain verification
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockTransactions.map((transaction) => (
                <TransactionCard key={transaction.id} transaction={transaction} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}