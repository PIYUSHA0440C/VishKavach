import TransactionCard from '../TransactionCard'

export default function TransactionCardExample() {
  const mockTransaction = {
    id: "0x7b8a9c2d",
    productName: "Sulfuric Acid 98%",
    buyerName: "Industrial Corp Ltd",
    quantity: "5 Liters",
    timestamp: "2025-01-15 14:30",
    risk: "low" as const,
    blockchainHash: "0x7b8a9c2d4f1e6h3k9l2m5n8p0q3r6s9t2v5w8x1z4a7b"
  }

  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold mb-4">Transaction Card Example</h2>
      <TransactionCard transaction={mockTransaction} />
    </div>
  )
}