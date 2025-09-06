// src/components/Sidebar.tsx
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        ></div>
      )}

      <aside
        className={`fixed top-0 md:top-20 left-0 h-[calc(100vh-5rem)] w-64 bg-gray-100 dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 flex flex-col transform transition-transform z-50
          ${isOpen ? "top-0 translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="px-4 py-8 overflow-y-auto">

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mb-6">
            + New Chat
          </button>

          <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
            History
          </h2>

          <ul className="space-y-2 text-gray-800 dark:text-gray-200 overflow-y-auto">
            <li className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded">
              Lorem ipsum dolor
            </li>
            <li className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded">
              Sit amet consectetur
            </li>
            <li className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded">
              Adipiscing elit sed
            </li>
            <li className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded">
              Do eiusmod tempor
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
