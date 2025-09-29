import { TrendingDown, Users, Shield, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "wouter";
import chemicalIcons from "@assets/generated_images/Chemical_product_category_icons_fa041956.png";

export default function AboutPage() {
  //todo: remove mock functionality
  const problemStats = [
    { category: "Acid Attacks", incidents: "1,483", trend: "+12%", description: "Annual reported cases in India" },
    { category: "Salphos Poisoning", incidents: "892", trend: "+8%", description: "Accidental & intentional cases" },
    { category: "Pesticide Suicides", incidents: "2,247", trend: "-5%", description: "Rural agricultural regions" },
    { category: "Chemical Accidents", incidents: "567", trend: "+15%", description: "Industrial & domestic misuse" }
  ];

  const impactMetrics = [
    { metric: "Risk Reduction", value: 89, unit: "%" },
    { metric: "Compliance Rate", value: 94, unit: "%" },
    { metric: "Response Time", value: 15, unit: "min" },
    { metric: "Transaction Accuracy", value: 99.8, unit: "%" }
  ];

  const workflowSteps = [
    {
      step: 1,
      title: "Vendor Registration",
      description: "Biometric eKYC verification with government database integration",
      features: ["Fingerprint scanning", "Facial recognition", "Document verification", "License validation"]
    },
    {
      step: 2,
      title: "Product Authentication",
      description: "QR/RFID scanning for chemical identification and tracking",
      features: ["Batch tracking", "Expiry monitoring", "Composition verification", "Source authentication"]
    },
    {
      step: 3,
      title: "Transaction Recording",
      description: "Immutable blockchain logging with cryptographic verification",
      features: ["Hash generation", "Distributed storage", "Real-time validation", "Audit trail creation"]
    },
    {
      step: 4,
      title: "AI Risk Analysis",
      description: "Machine learning algorithms assess transaction risk patterns",
      features: ["Pattern recognition", "Anomaly detection", "Risk scoring", "Predictive analytics"]
    },
    {
      step: 5,
      title: "Regulatory Action",
      description: "Automated alerts and enforcement recommendations",
      features: ["Instant notifications", "Compliance monitoring", "Investigation support", "Report generation"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-card border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About VishKavach
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Revolutionary platform addressing chemical safety through advanced technology, 
            preventing misuse while ensuring legitimate access for industrial and agricultural needs.
          </p>
          <div className="flex justify-center">
            <img 
              src={chemicalIcons} 
              alt="Chemical Categories" 
              className="w-full max-w-2xl h-48 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Chemical Safety Crisis
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Unregulated chemical sales contribute to thousands of preventable incidents annually. 
              VishKavach provides the solution through technology-driven oversight.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problemStats.map((stat, index) => (
              <Card key={index} className="text-center" data-testid={`card-problem-${index}`}>
                <CardHeader>
                  <CardTitle className="text-destructive text-2xl">{stat.incidents}</CardTitle>
                  <CardDescription className="font-semibold">{stat.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <TrendingDown className="h-4 w-4 text-destructive" />
                    <span className="text-sm text-destructive font-medium">{stat.trend}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              VishKavach Solution Framework
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end chemical transaction management with cutting-edge security and compliance features.
            </p>
          </div>

          <div className="space-y-8">
            {workflowSteps.map((step, index) => (
              <div 
                key={step.step} 
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                data-testid={`workflow-step-${step.step}`}
              >
                <div className="lg:w-1/2">
                  <Card className="hover-elevate">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                          {step.step}
                        </div>
                        <div>
                          <CardTitle>{step.title}</CardTitle>
                          <CardDescription className="mt-1">
                            {step.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2">
                        {step.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-3 w-3 text-primary" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="lg:w-1/2 text-center">
                  <div className="text-6xl font-bold text-primary/20 mb-4">
                    {step.step.toString().padStart(2, '0')}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Projected Impact Metrics
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Data-driven projections based on pilot implementations and regulatory studies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="text-center" data-testid={`card-impact-${index}`}>
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {metric.value}{metric.unit}
                  </div>
                  <div className="text-sm font-medium mb-3">{metric.metric}</div>
                  <Progress value={metric.value} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technology Architecture
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade technology stack ensuring scalability, security, and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-elevate">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Security Layer</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">256-bit Encryption</Badge>
                  <Badge variant="outline">Multi-factor Authentication</Badge>
                  <Badge variant="outline">Biometric Verification</Badge>
                  <Badge variant="outline">Zero-trust Architecture</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>AI & Analytics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">Machine Learning</Badge>
                  <Badge variant="outline">Pattern Recognition</Badge>
                  <Badge variant="outline">Predictive Analytics</Badge>
                  <Badge variant="outline">Risk Modeling</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ArrowRight className="h-5 w-5 text-primary" />
                  <span>Integration</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">Government APIs</Badge>
                  <Badge variant="outline">Banking Integration</Badge>
                  <Badge variant="outline">Mobile Applications</Badge>
                  <Badge variant="outline">IoT Sensors</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience VishKavach in Action
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Explore our interactive prototype demonstrating the complete chemical safety workflow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/vendor">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-primary hover:bg-gray-100 min-w-[200px]"
                data-testid="button-try-vendor"
              >
                Try Vendor Portal
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/regulator">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-primary hover:bg-gray-100 min-w-[200px]"
                data-testid="button-try-regulator"
              >
                View Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}