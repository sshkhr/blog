import { ArrowRightIcon } from './icon'
import useSidebarStore from './store'

const Button = () => {
  const { sidebarOpen, toggleSidebar } = useSidebarStore()

  return (
    <div className="fixed bottom-8 left-6 z-50">
      <button
        onClick={toggleSidebar}
        className="flex items-center gap-2 rounded-full bg-gray-200 px-4 py-2 text-gray-500
          opacity-100 transition-colors hover:bg-gray-300
          dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
      >
        <span className="hidden sm:inline">Table of Contents</span>
        <ArrowRightIcon
          className={`h-5 w-5 transform transition-transform ${sidebarOpen ? 'rotate-180' : ''}`}
        />
      </button>
    </div>
  )
}

export default Button
