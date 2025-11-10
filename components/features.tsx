import { Card } from "@/components/ui/card"

export default function Features() {
  const features = [
    {
      title: "Prompt Engine",
      description: "Transform your image with AI-powered editing",
      items: ["Image to Image", "Text to Image"],
      icon: "🎯",
    },
    {
      title: "AI Model Selection",
      description: "Choose from multiple models for different needs",
      items: ["Nano Banana", "Nano Banana Pro"],
      icon: "🤖",
    },
    {
      title: "Batch Processing",
      description: "Enable batch mode to process multiple images at once",
      items: ["Pro Feature"],
      icon: "⚙️",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Started</h2>
          <p className="text-xl text-foreground/70">Try The AI Editor</p>
          <p className="text-foreground/60 mt-2">
            Experience the power of nano-banana's natural language image editing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="p-6 bg-white border-2 border-primary/20 hover:border-primary/50 transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-foreground/60 mb-4">{feature.description}</p>
              <div className="space-y-2">
                {feature.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm font-medium">
                    <span className="text-primary">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
