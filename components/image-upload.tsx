"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Upload, Loader2 } from "lucide-react"

export default function ImageUpload() {
  const [image, setImage] = useState<string | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [prompt, setPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const result = event.target?.result as string
        setImage(result)
        setPreview(result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleEdit = async () => {
    if (!image || !prompt.trim()) return

    setIsLoading(true)
    setError(null)
    setGeneratedImage(null)

    try {
      const response = await fetch('/api/edit-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: image,
          prompt: prompt.trim(),
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to process image edit')
      }

      const data = await response.json()

      if (data.error) {
        throw new Error(data.error)
      }

      // For now, we'll assume the API returns text response
      // In a real implementation, this might be a base64 image or URL
      if (data.type === 'image') {
        setGeneratedImage(data.result)
      } else {
        setGeneratedImage(data.result || 'Image processing completed')
      }

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      console.error('Error editing image:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Upload Image</h3>

          {preview ? (
            <div className="relative group">
              <img
                src={preview || "/placeholder.svg"}
                alt="Preview"
                className="w-full h-64 object-cover rounded-lg border-2 border-primary/20"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-lg"
              >
                <span className="text-white text-sm font-semibold">Change Image</span>
              </button>
            </div>
          ) : (
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full h-64 border-2 border-dashed border-primary/30 rounded-lg flex flex-col items-center justify-center gap-3 hover:border-primary/60 hover:bg-primary/5 transition"
            >
              <Upload size={40} className="text-primary/60" />
              <div className="text-center">
                <p className="font-semibold text-foreground">Click to upload</p>
                <p className="text-sm text-foreground/60">or drag and drop</p>
                <p className="text-xs text-foreground/40 mt-1">PNG, JPG, WebP up to 50MB</p>
              </div>
            </button>
          )}

          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageSelect} className="hidden" />

          <div className="text-sm text-foreground/60">Max 50MB. Best results with high-quality images.</div>
        </div>

        {/* Output Section */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Generated Result</h3>

          <div className="w-full h-64 border-2 border-primary/20 rounded-lg bg-secondary flex items-center justify-center">
            {isLoading ? (
              <div className="flex flex-col items-center gap-3">
                <Loader2 size={40} className="text-primary animate-spin" />
                <p className="text-sm text-foreground/60">Processing your image...</p>
              </div>
            ) : error ? (
              <div className="text-center text-red-500 p-4">
                <p className="text-lg">⚠️</p>
                <p className="text-sm">{error}</p>
              </div>
            ) : generatedImage ? (
              <div className="w-full h-full p-4 overflow-auto">
                {/* Check if the result is a base64 image */}
                {typeof generatedImage === 'string' && generatedImage.startsWith('data:image/') ? (
                  <img
                    src={generatedImage}
                    alt="Generated result"
                    className="w-full h-full object-contain rounded"
                  />
                ) : (
                  <div className="text-center">
                    <p className="text-lg">✅</p>
                    <p className="text-sm text-foreground/80 whitespace-pre-wrap">
                      {typeof generatedImage === 'string' ? generatedImage : JSON.stringify(generatedImage, null, 2)}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center text-foreground/40">
                <p className="text-lg">📸</p>
                <p className="text-sm">Your edited image will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Prompt Section */}
      {image && (
        <div className="space-y-4">
          <div>
            <label className="block font-semibold mb-2">Edit Prompt</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe how you want to edit the image... e.g., 'Change the background to a sunset beach with warm golden light'"
              className="w-full h-24 p-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none bg-white"
            />
            <p className="text-xs text-foreground/60 mt-2">Be specific and descriptive for better results</p>
          </div>

          <Button
            onClick={handleEdit}
            disabled={isLoading || !prompt.trim()}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
          >
            {isLoading ? (
              <>
                <Loader2 size={18} className="mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              "Generate Edited Image"
            )}
          </Button>
        </div>
      )}
    </div>
  )
}
