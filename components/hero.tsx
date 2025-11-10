"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import ImageUpload from "@/components/image-upload"
import { useState } from "react"

export default function Hero() {
  const [showEditor, setShowEditor] = useState(false)

  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Decorative Bananas */}
      <div className="absolute left-4 top-40 text-6xl opacity-30 animate-bounce" style={{ animationDelay: "0s" }}>
        🍌
      </div>
      <div className="absolute right-4 top-64 text-6xl opacity-30 animate-bounce" style={{ animationDelay: "0.5s" }}>
        🍌
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Announcement Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            <span className="text-primary font-semibold">✨</span>
            <span className="text-sm font-medium">The AI model that outperforms Flux Context.</span>
            <span className="text-primary font-semibold ml-2">→</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">Nano Banana</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8 text-balance">
            Transform any image with simple text prompts. Nano-banana's advanced model delivers consistent character
            editing and scene preservation that surpasses Flux Context. Experience the future of AI image editing.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 rounded-full"
            onClick={() => setShowEditor(true)}
          >
            Start Editing
          </Button>
          <Button variant="outline" size="lg" className="px-8 rounded-full bg-transparent">
            View Examples
          </Button>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {[
            { icon: "✨", text: "One-shot editing" },
            { icon: "⚡", text: "Multi-image support" },
            { icon: "🗣️", text: "Natural language" },
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-sm font-medium">
              <span>{feature.icon}</span>
              {feature.text}
            </div>
          ))}
        </div>

        {/* Editor Preview */}
        {showEditor ? (
          <Card className="p-6 bg-white border border-border shadow-lg">
            <ImageUpload />
          </Card>
        ) : (
          <Card className="p-12 bg-gradient-to-b from-secondary to-background border border-border">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-4xl">📸</span>
              </div>
              <p className="text-foreground/60 text-center">
                Click "Start Editing" to upload an image and transform it with AI
              </p>
            </div>
          </Card>
        )}
      </div>
    </section>
  )
}
