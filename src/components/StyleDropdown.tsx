interface StyleDropdownProps {
  value: string
  onChange: (val: string) => void
}

export default function StyleDropdown({ value, onChange }: StyleDropdownProps) {
  const styles = ['Photorealistic', 'Cartoon', '3D Render', 'Sketch']

  return (
    <div className="mt-4 flex flex-col space-y-2">
      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Style</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-gray-300 bg-white p-3 text-gray-800 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
      >
        {styles.map((style) => (
          <option key={style} value={style}>
            {style}
          </option>
        ))}
      </select>
    </div>
  )
}
