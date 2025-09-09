import { useHistory } from '../contexts/HistoryContext'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { history } = useHistory()

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
            {history.length === 0 ? (
              <li className="text-gray-400">No history yet</li>
            ) : (
              history.map((item) => (
                <li key={item.id}>
                  <button
                    className="flex w-full items-center space-x-2 rounded-lg p-2 text-left hover:bg-gray-100 focus:inset-ring-2 focus:inset-ring-blue-400 focus:outline-none dark:hover:bg-gray-800"
                    aria-label={`Load history: ${item.prompt}, style ${item.style}`}
                  >
                    <img src={item.imageUrl} alt="" className="h-10 w-10 rounded object-cover" />
                    <div className="flex-1">
                      <p className="truncate text-gray-800 dark:text-gray-200">
                        {item.prompt.length > 14
                          ? `${item.prompt.substring(0, 14)}...`
                          : item.prompt}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{item.style}</p>
                    </div>
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </aside>
    </>
  )
}
