import type { HTMLAttributes } from 'react'

interface StyleDropdownProps extends HTMLAttributes<HTMLDivElement> {
  value: string
  onValueChange: (val: string) => void
}

export default function StyleDropdown({ value, onValueChange, ...props }: StyleDropdownProps) {
  // TODO:: Move styles to props so and change it type to array of object [{name, value}] to make it more reusable.
  const styles = ['Editorial', 'Streetwear', 'Vintage']

  return (
    <div className="flex flex-col space-y-2" {...props}>
      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Style</label>
      <select
        id="style dropdown"
        aria-label="select generation style"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        className="rounded-lg border border-gray-300 bg-white p-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
      >
        <option value="" disabled hidden>
          Select an option
        </option>
        {styles.map((style) => (
          <option key={style} value={style}>
            {style}
          </option>
        ))}
      </select>
    </div>
  )
}
