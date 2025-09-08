import type { HTMLAttributes } from 'react'

interface PromptInputProps extends HTMLAttributes<HTMLDivElement> {
  value: string
  onValueChange: (val: string) => void
}
export default function PromptInput({ value, onValueChange, ...props }: PromptInputProps) {
  return (
    <div className="flex flex-col space-y-2" {...props}>
      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Prompt</label>
      <textarea
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        placeholder="e.g., A majestic lion wearing a crown, cinematic lighting, highly detailed"
        className="h-32 w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
        aria-label="prompt input"
      />
    </div>
  )
}
