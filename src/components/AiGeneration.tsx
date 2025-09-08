import { useEffect, useRef, useState } from 'react'

import type { GenerateImageResponse } from '../types'
import { generateImageRequest } from '../utils/api'
import FileUpload from './FileUpload'
import LoadingModel from './LoadingModel'
import PromptInput from './PromptInput'
import StyleDropdown from './StyleDropdown'

export default function AiGeneration() {
  const [fileUrl, setFileUrl] = useState<string | null>(null)
  const [prompt, setPrompt] = useState('')
  const [style, setStyle] = useState('Photorealistic')
  const [error, setError] = useState<string | null>(null)
  const [state, setState] = useState<'loading' | 'error'>('loading')
  const [modalOpen, setModalOpen] = useState(false)
  const [fileUploadkey, setFileUploadKey] = useState<number>(0)

  const errorTimer = useRef<number | null>(null)

  useEffect(() => {
    if (errorTimer.current) {
      clearTimeout(errorTimer.current)
    }
    if (error) {
      errorTimer.current = setTimeout(() => {
        setError(null)
      }, 2000)
    }
  }, [error])

  const resetFields = () => {
    setFileUrl('')
    setPrompt('')
    setStyle('Photorealistic')
    setFileUploadKey((prev) => prev + 1)
  }

  /**
   * TODO:: we can move to the new UI to display the image we have given
   * for generation and the image generated into a chat UI or any other UI
   */
  const handleGenerate = async () => {
    if (!fileUrl || !prompt) {
      setError('Please upload an image and enter a prompt before generating.')
      return
    }

    let response: GenerateImageResponse | undefined = undefined
    try {
      setModalOpen(true)
      setState('loading')
      response = await generateImageRequest({
        imageDataUrl: fileUrl,
        prompt,
        style
      })
      resetFields()
    } catch (err) {
      console.error(err)
    } finally {
      setModalOpen(false)
      setState('loading')
      if (response) {
        console.log(response)
      }
    }
  }

  const onSelectFile = (file: File) => {
    setFileUrl(URL.createObjectURL(file))
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
          <FileUpload key={fileUploadkey} onSelectFile={onSelectFile} />

          <div>
            <StyleDropdown value={style} onValueChange={setStyle} />
            <PromptInput className="mt-6" value={prompt} onValueChange={setPrompt} />
          </div>
        </div>

        <div className="mt-8 text-center">
          <button onClick={handleGenerate} className="btn">
            ✨ Generate
          </button>
          {error && (
            <p
              className="mt-3 text-center text-sm font-medium text-red-600 dark:text-red-400"
              role="alert"
            >
              {error}
            </p>
          )}
        </div>

        <LoadingModel
          isOpen={modalOpen}
          state={state}
          attempt={2}
          maxAttempts={3}
          onAbort={() => setModalOpen(false)}
        />
      </div>
    </div>
  )
}
