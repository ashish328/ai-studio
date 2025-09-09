import type { GenerateImageRequest, GenerateImageResponse } from '../types'

interface RequestParams extends GenerateImageRequest {
  signal: AbortSignal
}

export async function generateImageRequest({
  imageDataUrl,
  prompt,
  style,
  signal
}: RequestParams): Promise<GenerateImageResponse> {
  const randValue = Math.random()
  if (randValue < 0.2) {
    // Simulate error 20% of the time
    console.log('simulated error', Date.now())
    await new Promise((res) => setTimeout(res, 1500))
    throw new Error('Simulated network error')
  }

  const response = await fetch('https://ai-studio.free.beeceptor.com/generate-images', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ imageDataUrl, prompt, style }),
    signal
  })

  if (!response.ok) {
    throw new Error('Failed to generate image')
  }
  const data: GenerateImageResponse = await response.json()
  return data
}
