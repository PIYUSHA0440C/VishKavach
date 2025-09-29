import { Shield, Database, Brain, Link as LinkIcon, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import heroBackground from "@assets/generated_images/Hero_background_chemical_tech_04cc6a24.png";
import shieldLogo from "@assets/generated_images/VishKavach_security_shield_logo_1afc7200.png";
import blockchainIllustration from "@assets/generated_images/Blockchain_network_illustration_3901a521.png";

export default function HomePage() {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Biometric eKYC",
      description: "Advanced biometric verification ensuring secure vendor authentication and compliance tracking."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Risk Engine",
      description: "Machine learning algorithms analyze transaction patterns to identify high-risk chemical sales."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Blockchain Logging",
      description: "Immutable transaction records with cryptographic hashes for complete audit trails."
    },
    {
      icon: <LinkIcon className="h-8 w-8" />,
      title: "Multi-hazard Coverage",
      description: "Comprehensive monitoring of acids, Salphos, pesticides, and rodenticides."
    }
  ];

  const stats = [
    { value: "99.8%", label: "Transaction Accuracy" },
    { value: "15ms", label: "Risk Assessment Time" },
    { value: "24/7", label: "Monitoring Coverage" },
    { value: "256-bit", label: "Encryption Security" }
  ];

  //todo: remove mock functionality
  const handleDemoClick = (type: string) => {
    console.log(`${type} demo clicked`);
  };

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section 
        className="relative min-h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center space-y-8 relative z-10">
          <div className="flex justify-center mb-6">
            <img src={shieldLogo} alt="VishKavach Shield" className="h-24 w-24" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold">
            VishKavach
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Digital Platform for Safe Chemical Sales & Traceable Transactions
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Badge variant="outline" className="bg-white/10 border-white/20 text-white px-4 py-2">
              Biometric eKYC
            </Badge>
            <Badge variant="outline" className="bg-white/10 border-white/20 text-white px-4 py-2">
              AI Risk Engine
            </Badge>
            <Badge variant="outline" className="bg-white/10 border-white/20 text-white px-4 py-2">
              Blockchain Logging
            </Badge>
            <Badge variant="outline" className="bg-white/10 border-white/20 text-white px-4 py-2">
              Multi-hazard Coverage
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link href="/vendor">
              <Button 
                size="lg" 
                className="bg-primary/90 hover:bg-primary text-primary-foreground min-w-[200px]"
                data-testid="button-vendor-demo"
                onClick={() => handleDemoClick('Vendor Portal')}
              >
                Vendor Portal Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/regulator">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 min-w-[200px]"
                data-testid="button-regulator-demo"
                onClick={() => handleDemoClick('Regulator Dashboard')}
              >
                Regulator Dashboard Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/[\s\/]/g, '-')}`}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Chemical Safety Technology
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive platform ensuring secure chemical transactions through cutting-edge technology and regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-elevate transition-all duration-200" data-testid={`card-feature-${index}`}>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg text-primary w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Blockchain-Powered Security
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every chemical transaction is recorded on an immutable blockchain ledger, providing complete transparency and enabling real-time tracking of hazardous materials from vendor to end-user.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Cryptographic transaction verification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Real-time risk assessment alerts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Regulatory compliance automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Offline transaction synchronization</span>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/about">
                  <Button variant="outline" data-testid="button-learn-more">
                    Learn More About VishKavach
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={blockchainIllustration} 
                alt="Blockchain Network Visualization" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}