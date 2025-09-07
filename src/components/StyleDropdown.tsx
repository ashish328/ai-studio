interface StyleDropdownProps {
  value: string;
  onChange: (val: string) => void;
}

export default function StyleDropdown({ value, onChange }: StyleDropdownProps) {
  const styles = ["Photorealistic", "Cartoon", "3D Render", "Sketch"];

  return (
    <div className="flex flex-col space-y-2 mt-4">
      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
        Style
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
      >
        {styles.map((style) => (
          <option key={style} value={style}>
            {style}
          </option>
        ))}
      </select>
    </div>
  );
}
