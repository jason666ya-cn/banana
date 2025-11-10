import { Card } from "@/components/ui/card"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Designer",
      company: "TechStart Inc",
      avatar: "👩‍💼",
      text: "Nano Banana has completely transformed our design workflow. What used to take hours now takes minutes.",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Creative Director",
      company: "Studio Bold",
      avatar: "👨‍🎨",
      text: "The quality of the AI-generated edits is incredible. Our clients are amazed by the consistency.",
      rating: 5,
    },
    {
      name: "Elena Rodriguez",
      role: "E-commerce Manager",
      company: "ShopHub",
      avatar: "👩‍💻",
      text: "We've cut our product photography costs in half. The batch processing feature is a game-changer.",
      rating: 5,
    },
    {
      name: "David Park",
      role: "Content Creator",
      company: "YouTube Creator",
      avatar: "👨‍🎬",
      text: "Finally, an AI tool that understands context. My character edits look natural and professional.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">User Reviews</h2>
          <p className="text-foreground/70">What our users say about Nano Banana</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="p-6 bg-white border border-border hover:shadow-lg transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  <p className="text-xs text-foreground/40">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-primary">
                      ⭐
                    </span>
                  ))}
              </div>
              <p className="text-foreground/70 italic">"{testimonial.text}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
