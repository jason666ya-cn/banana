import { Card } from "@/components/ui/card"

export default function CaseStudies() {
  const cases = [
    {
      title: "Product Photography",
      description: "Transform product images with different backgrounds and lighting",
      category: "E-commerce",
      image: "🛍️",
    },
    {
      title: "Character Editing",
      description: "Consistent character modifications while preserving identity",
      category: "Gaming & Animation",
      image: "🎨",
    },
    {
      title: "Scene Preservation",
      description: "Edit specific elements while maintaining scene context",
      category: "Photography",
      image: "🌅",
    },
    {
      title: "Batch Editing",
      description: "Apply consistent edits across multiple images simultaneously",
      category: "Workflow Optimization",
      image: "📦",
    },
  ]

  return (
    <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Case Studies</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            See how businesses and creators are using Nano Banana to transform their workflows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((caseStudy, i) => (
            <Card
              key={i}
              className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/30 transition"
            >
              <div className="text-5xl mb-4">{caseStudy.image}</div>
              <div className="mb-2 inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                {caseStudy.category}
              </div>
              <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
              <p className="text-foreground/60">{caseStudy.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
