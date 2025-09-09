interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div
          className="bg-opacity-50 fixed inset-0 z-40 bg-black md:hidden"
          onClick={onClose}
        ></div>
      )}

      <aside
        className={`fixed top-0 left-0 z-50 flex h-[calc(100vh-5rem)] w-64 transform flex-col border-r border-gray-300 bg-gray-100 transition-transform md:top-20 dark:border-gray-700 dark:bg-gray-900 ${isOpen ? 'top-0 translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <div className="overflow-y-auto px-4 py-8">
          <button className="btn mb-6 w-full rounded-lg">+ New Chat</button>

          <h2 className="mb-2 text-sm font-semibold text-gray-600 dark:text-gray-400">History</h2>

          <ul className="space-y-2 overflow-y-auto text-gray-800 dark:text-gray-200">
            <li className="cursor-pointer rounded p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
              Lorem ipsum dolor
            </li>
            <li className="cursor-pointer rounded p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
              Sit amet consectetur
            </li>
            <li className="cursor-pointer rounded p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
              Adipiscing elit sed
            </li>
            <li className="cursor-pointer rounded p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
              Do eiusmod tempor
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}
