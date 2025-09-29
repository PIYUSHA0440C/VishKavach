# VishKavach Design Guidelines

## Design Approach: Enterprise Design System
**Selected System**: Carbon Design System with hazard-themed customization
**Justification**: This regulatory platform requires information-dense displays, dashboard functionality, and enterprise-grade reliability. Carbon's data-focused components and government adoption make it ideal for VishKavach's compliance and monitoring needs.

## Core Design Elements

### A. Color Palette
**Primary Colors (Dark Mode):**
- Background: 220 15% 8% (deep charcoal)
- Surface: 220 15% 12% (elevated charcoal) 
- Primary Brand: 0 85% 45% (hazard red)
- Warning/Alert: 45 100% 55% (safety yellow)

**Primary Colors (Light Mode):**
- Background: 220 15% 98% (off-white)
- Surface: 0 0% 100% (pure white)
- Primary Brand: 0 75% 40% (professional red)
- Warning/Alert: 45 90% 45% (muted yellow)

**Semantic Colors:**
- Success: 140 65% 35% (forest green)
- High Risk: 0 85% 45% (danger red)
- Medium Risk: 35 85% 55% (amber)
- Low Risk: 140 40% 50% (safe green)

### B. Typography
**Primary Font**: IBM Plex Sans (Carbon system font)
**Secondary Font**: IBM Plex Mono (for blockchain hashes, transaction IDs)

**Hierarchy:**
- Hero Headlines: 3xl font-bold
- Section Titles: 2xl font-semibold  
- Body Text: base font-normal
- Captions/Meta: sm font-medium

### C. Layout System
**Spacing Units**: Tailwind 4, 6, 8, 12, 16 units
- Component padding: p-6
- Section spacing: mb-12
- Element gaps: gap-4
- Card spacing: p-8

### D. Component Library

**Navigation:**
- Top navigation bar with VishKavach logo and role-based menu
- Breadcrumb navigation for complex workflows
- Tab navigation for dashboard sections

**Data Displays:**
- Card-based transaction logs with blockchain hash display
- Interactive risk heatmap using color-coded regions
- Real-time metric cards with large numbers and trend indicators
- Alert panels with severity color-coding

**Forms:**
- Multi-step vendor registration with progress indicators
- Product scanning interface with camera simulation
- Risk assessment forms with AI flag displays

**Dashboard Components:**
- Live activity feeds with timestamp formatting
- Compliance metric grids with percentage displays
- Geographic risk visualization with hover states

### E. Animations
**Minimal Motion Design:**
- Subtle fade-ins for new alerts (300ms)
- Smooth transitions between dashboard tabs (200ms)
- Loading states for AI risk processing simulation
- No decorative animations to maintain professional authority

## Visual Identity

**Icons**: Heroicons for consistency with modern web standards
**Iconography Theme**: 
- Shield icons for security/protection
- Warning triangles for risk indicators
- Checkmarks for compliance status
- Chemical bottle symbols for product categories

**Data Visualization**: 
- Chart.js for interactive compliance metrics
- Color-coded heat maps for geographic risk analysis
- Progress bars for KYC completion status
- Timeline views for transaction history

## Content Strategy

**Professional Tone**: Authoritative but accessible language for both technical regulators and vendor users
**Information Hierarchy**: Critical alerts at top, detailed data accessible via drill-down
**Trust Indicators**: Blockchain verification badges, compliance certifications, security symbols

## Images

**Hero Section**: Large hero image featuring a digital shield overlaying chemical supply chain elements (bottles, delivery trucks, regulatory documents) with subtle blockchain network visualization in background - conveys protection and technology integration

**Dashboard Backgrounds**: Subtle geometric patterns or gradients that don't interfere with data readability

**About Page**: Infographic-style illustrations showing the end-to-end workflow from vendor scanning to regulator monitoring

**Chemical Category Icons**: Professional vector illustrations for acids, pesticides, rodenticides, and Salphos - placed throughout the interface for quick product identification

The design emphasizes trustworthiness and efficiency while incorporating the hazard theme through strategic color use rather than overwhelming visual elements.