import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import type { ChangeEvent, DragEvent } from 'react'

export default function FileUpload() {
  const [isDragging, setIsDragging] = useState(false)
  const [files, setFiles] = useState<File[]>([])

  const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files) {
      setFiles(Array.from(e.dataTransfer.files))
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  return (
    <div className="mx-auto w-full max-w-2xl">
      <label
        htmlFor="file-upload"
        className={`flex h-64 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed transition ${isDragging ? 'border-blue-500 bg-blue-50 dark:bg-gray-700' : 'border-gray-400 bg-gray-100 dark:border-gray-600 dark:bg-gray-800'} `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {files.length === 0 ? (
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faCloudArrowUp}
              className="mb-3 text-4xl text-gray-500 dark:text-gray-300"
            />
            <p className="text-center text-gray-700 dark:text-gray-200">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">SVG, PNG, JPG or JPEG</p>
          </div>
        ) : (
          <div className="h-full w-full overflow-y-auto p-2">
            {files.map((file, index) => (
              <img
                key={index}
                src={URL.createObjectURL(file)}
                alt={file.name}
                className="h-full w-full rounded-lg object-cover"
              />
            ))}
          </div>
        )}

        <input
          id="file-upload"
          type="file"
          multiple
          className="hidden"
          accept="image/png, image/jpg, image/jpeg, image/svg"
          onChange={handleFileChange}
        />
      </label>
    </div>
  )
}
