import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": "https://nano-banana.vercel.app", // Your site URL
    "X-Title": "Nano Banana AI Image Editor", // Your site title
  },
});

export async function POST(request: NextRequest) {
  try {
    const { image, prompt } = await request.json();

    if (!image || !prompt) {
      return NextResponse.json(
        { error: 'Image and prompt are required' },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "google/gemini-2.5-flash-image",
      messages: [
        {
          "role": "user",
          "content": [
            {
              "type": "text",
              "text": `Generate a new image based on this image with the following modifications: ${prompt}`
            },
            {
              "type": "image_url",
              "image_url": {
                "url": image
              }
            }
          ]
        }
      ],
      modalities: ["text", "image"],
      max_tokens: 1000,
    });

    console.log('API Response:', JSON.stringify(completion.choices[0], null, 2));

    const result = completion.choices[0]?.message?.content;
    const images = completion.choices[0]?.message?.images;

    console.log('Images array:', JSON.stringify(images, null, 2));

    // Check if we have generated images
    if (images && images.length > 0) {
      // Extract the actual base64 URL from the nested structure
      const imageData = images[0];
      const imageUrl = imageData.image_url?.url || imageData.url || imageData;

      return NextResponse.json({
        result: imageUrl, // This should be the actual base64 data URL
        type: 'image'
      });
    }

    // Fallback to text response if no images were generated
    return NextResponse.json({
      result: result || 'No image was generated',
      type: 'text'
    });

  } catch (error) {
    console.error('Error processing image edit:', error);
    return NextResponse.json(
      { error: 'Failed to process image edit' },
      { status: 500 }
    );
  }
}