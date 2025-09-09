export interface GenerateImageResponse {
  id: string
  imageUrl: string
  prompt: string
  style: string
  createdAt: string
}

export interface GenerateImageRequest {
  imageDataUrl: string
  prompt: string
  style: string
}
