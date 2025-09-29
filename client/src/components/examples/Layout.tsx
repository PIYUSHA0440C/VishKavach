import Layout from '../Layout'

export default function LayoutExample() {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-2xl font-bold">Sample Content</h1>
        <p className="text-muted-foreground mt-2">This demonstrates the layout component with navigation and theme toggle.</p>
      </div>
    </Layout>
  )
}