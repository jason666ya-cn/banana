"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What makes Nano Banana different from other AI image editors?",
      answer:
        "Nano Banana uses advanced neural networks that excel at character consistency and scene preservation. Our model outperforms Flux Context with better character editing while maintaining natural scene context.",
    },
    {
      question: "What file formats are supported?",
      answer:
        "We support JPG, PNG, WebP, and AVIF formats. Images can be up to 50MB in size. We recommend high-quality images for best results.",
    },
    {
      question: "How many images can I edit per month?",
      answer:
        "Free tier includes 10 edits per month. Pro members get unlimited edits. All edits are processed in real-time with no queue.",
    },
    {
      question: "Can I use edited images commercially?",
      answer:
        "Yes! All images created with Nano Banana are yours to use commercially. No attribution is required, though we'd love if you shared your creations!",
    },
    {
      question: "How do I write effective prompts?",
      answer:
        'Be specific and descriptive. Instead of "change background," try "change background to a serene beach at sunset with warm golden light." The more detail, the better the results.',
    },
    {
      question: "What about privacy and data?",
      answer:
        "Your images are processed securely and deleted after editing unless you save them. We never train on user images or share data with third parties.",
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-foreground/70">Everything you need to know about Nano Banana</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="border border-border hover:border-primary/50 transition cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="p-6 flex items-center justify-between">
                <h3 className="font-semibold text-lg">{faq.question}</h3>
                <ChevronDown
                  size={24}
                  className={`text-primary transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </div>

              {openIndex === index && (
                <div className="px-6 pb-6 text-foreground/70 border-t border-border pt-4">{faq.answer}</div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
