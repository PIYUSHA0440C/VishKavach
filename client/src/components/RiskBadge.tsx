import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Shield, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface RiskBadgeProps {
  risk: "low" | "medium" | "high";
  className?: string;
}

export default function RiskBadge({ risk, className }: RiskBadgeProps) {
  const getRiskConfig = () => {
    switch (risk) {
      case "low":
        return {
          icon: <Shield className="h-3 w-3" />,
          text: "Low Risk",
          className: "bg-risk-low/20 text-risk-low border-risk-low/50 hover:bg-risk-low/30"
        };
      case "medium":
        return {
          icon: <AlertCircle className="h-3 w-3" />,
          text: "Medium Risk",
          className: "bg-risk-medium/20 text-risk-medium border-risk-medium/50 hover:bg-risk-medium/30"
        };
      case "high":
        return {
          icon: <AlertTriangle className="h-3 w-3" />,
          text: "High Risk",
          className: "bg-risk-high/20 text-risk-high border-risk-high/50 hover:bg-risk-high/30"
        };
    }
  };

  const config = getRiskConfig();

  return (
    <Badge 
      variant="outline" 
      className={cn(config.className, "flex items-center space-x-1 font-medium", className)}
      data-testid={`badge-risk-${risk}`}
    >
      {config.icon}
      <span>{config.text}</span>
    </Badge>
  );
}