import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink } from "lucide-react";
import RiskBadge from "./RiskBadge";

interface Transaction {
  id: string;
  productName: string;
  buyerName: string;
  quantity: string;
  timestamp: string;
  risk: "low" | "medium" | "high";
  blockchainHash: string;
}

interface TransactionCardProps {
  transaction: Transaction;
}

export default function TransactionCard({ transaction }: TransactionCardProps) {
  //todo: remove mock functionality
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    console.log("Copied to clipboard:", text);
  };

  const viewOnBlockchain = () => {
    console.log("View transaction on blockchain:", transaction.blockchainHash);
  };

  return (
    <Card className="hover-elevate transition-all duration-200" data-testid={`card-transaction-${transaction.id}`}>
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="flex-1 space-y-2">
            <div className="flex items-center space-x-3">
              <Badge variant="outline" className="font-mono text-xs">
                {transaction.id}
              </Badge>
              <RiskBadge risk={transaction.risk} />
            </div>
            
            <div>
              <h4 className="font-semibold text-sm">{transaction.productName}</h4>
              <p className="text-sm text-muted-foreground">
                Buyer: {transaction.buyerName} • {transaction.quantity}
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <span>{transaction.timestamp}</span>
              <span>•</span>
              <span className="font-mono truncate max-w-[200px]">
                {transaction.blockchainHash}
              </span>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard(transaction.blockchainHash)}
              data-testid={`button-copy-hash-${transaction.id}`}
            >
              <Copy className="h-3 w-3" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={viewOnBlockchain}
              data-testid={`button-view-blockchain-${transaction.id}`}
            >
              <ExternalLink className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}