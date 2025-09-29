import { Shield, Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = saved === "dark" || (!saved && prefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newIsDark);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/vendor", label: "Vendor Portal" },
    { href: "/regulator", label: "Regulator Dashboard" },
    { href: "/about", label: "About" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 hover-elevate" data-testid="link-home">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">VishKavach</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} data-testid={`link-nav-${item.label.toLowerCase().replace(' ', '-')}`}>
                  <Button
                    variant={location === item.href ? "default" : "ghost"}
                    className="text-sm font-medium"
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </nav>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                data-testid="button-theme-toggle"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant={location === item.href ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-semibold">VishKavach – SIH 2025 Prototype</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Team HexaBinary | Digital Platform for Safe Chemical Sales
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}