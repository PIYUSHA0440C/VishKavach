import RiskBadge from '../RiskBadge'

export default function RiskBadgeExample() {
  return (
    <div className="p-8 space-y-4">
      <h2 className="text-xl font-semibold">Risk Badge Examples</h2>
      <div className="flex space-x-4">
        <RiskBadge risk="low" />
        <RiskBadge risk="medium" />
        <RiskBadge risk="high" />
      </div>
    </div>
  )
}