import { useState } from 'react'

import FileUpload from './FileUpload'
import PromptInput from './PromptInput'
import StyleDropdown from './StyleDropdown'

export default function AiGeneration() {
  const [prompt, setPrompt] = useState('')
  const [style, setStyle] = useState('Photorealistic')

  const handleGenerate = () => {
    console.log('Generating with:', { prompt, style })
  }

  return (
    <div className="flex min-h-[calc(100vh-6rem)] items-center justify-center">
      <div className="mx-auto max-w-5xl p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            AI Generation with Chat Refinement
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Upload an image, provide a prompt, and refine your creation through conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <FileUpload />

          <div>
            <PromptInput value={prompt} onChange={setPrompt} />
            <StyleDropdown value={style} onChange={setStyle} />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button onClick={handleGenerate} className="btn rounded-full">
            ✨ Generate
          </button>
        </div>
      </div>
    </div>
  )
}
