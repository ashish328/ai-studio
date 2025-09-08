import type { GenerateImageResponse } from '../types'

// TODO: move the types to an interface and use them;
export async function generateImageRequest({
  imageDataUrl,
  prompt,
  style
}: {
  imageDataUrl: string
  prompt: string
  style: string
}): Promise<GenerateImageResponse> {
  const response = await fetch('https://ai-studio.free.beeceptor.com/generate-images', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ imageDataUrl, prompt, style })
  })

  if (!response.ok) {
    throw new Error('Failed to generate image')
  }
  const data: GenerateImageResponse = await response.json()
  return data
}
