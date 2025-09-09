import type { GenerateImageResponse as HistoryItem } from '../types'

interface HistoryPreviewProps {
  item: HistoryItem
  onClose: () => void
  onGenerateNew: () => void
}

export default function HistoryPreview({ item, onClose, onGenerateNew }: HistoryPreviewProps) {
  return (
    <div className="flex h-full min-h-[calc(100vh-6rem)] w-full flex-col items-center justify-center p-6">
      <div className="flex flex-col gap-6">
        <div className="w-full max-w-md">
          <img
            src={item.imageUrl}
            alt={item.prompt}
            className="w-full rounded-2xl object-cover shadow-lg"
          />
        </div>

        <div className="space-y-2 text-left">
          <div>
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300">Prompt</h3>
            <p className="text-lg font-medium text-gray-800 dark:text-gray-100">{item.prompt}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300">Style</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.style}</p>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="btn border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            Close
          </button>
          <button onClick={onGenerateNew} className="btn">
            Generate New
          </button>
        </div>
      </div>
    </div>
  )
}
