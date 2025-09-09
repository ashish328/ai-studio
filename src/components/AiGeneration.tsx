import { useEffect, useState } from 'react'

import { useError } from '../hooks/useError'
import { useGenerateImage } from '../hooks/useGenerateImage'
import FileUpload from './FileUpload'
import LoadingModel from './LoadingModel'
import PromptInput from './PromptInput'
import StyleDropdown from './StyleDropdown'

export default function AiGeneration() {
  const [fileUrl, setFileUrl] = useState<string | null>(null)
  const [fileUploadkey, setFileUploadKey] = useState<number>(0)

  const [prompt, setPrompt] = useState('')
  const [style, setStyle] = useState('Photorealistic')

  const { error: validationError, setError: setValidationError } = useError()

  const [modalOpen, setModalOpen] = useState(false)
  const { generate, abort, state, error: apiError, attempt, result } = useGenerateImage(3)

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
  const handleGenerate = () => {
    if (!fileUrl || !prompt) {
      setValidationError('Please upload an image and enter a prompt before generating.')
      return
    }
    setModalOpen(true)
    generate({
      imageDataUrl: fileUrl,
      prompt,
      style
    })
  }

  const onSelectFile = (url: string) => {
    setFileUrl(url)
  }

  useEffect(() => {
    if (result && modalOpen) {
      setModalOpen(false)
      resetFields()
    }
  }, [result, modalOpen])

  useEffect(() => {
    if (attempt && attempt > 3) {
      setModalOpen(false)
    }
  }, [attempt])

  return (
    <div className="flex min-h-[calc(100vh-6rem)] items-center justify-center">
      <div className="mx-auto w-3/4 p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            AI Generation with Chat Refinement
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Upload an image, provide a prompt, and refine your creation through conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <FileUpload key={fileUploadkey} onUpload={onSelectFile} />

          <div>
            <StyleDropdown value={style} onValueChange={setStyle} />
            <PromptInput className="mt-6" value={prompt} onValueChange={setPrompt} />
          </div>
        </div>

        <div className="mt-8 text-center">
          <button onClick={handleGenerate} className="btn w-full md:w-1/2 lg:w-1/3">
            ✨ Generate
          </button>
          {(validationError || apiError) && (
            <p
              className="mt-3 text-center text-sm font-medium text-red-600 dark:text-red-400"
              role="alert"
            >
              {validationError || apiError}
            </p>
          )}
        </div>

        <LoadingModel
          isOpen={modalOpen}
          state={state}
          attempt={attempt}
          maxAttempts={3}
          onAbort={() => {
            abort()
            setModalOpen(false)
          }}
        />
      </div>
    </div>
  )
}
