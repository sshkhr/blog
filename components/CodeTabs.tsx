'use client'

import React, { useState, Children } from 'react'

type CodeTabsProps = {
  tabs: string[]
  children: React.ReactNode
}

export default function CodeTabs({ tabs, children }: CodeTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  // Simply convert all children to an array (assuming each is a code block).
  const codeBlocks = Children.toArray(children)

  return (
    <div className="my-4 rounded-md border border-gray-200">
      {/* Tabs */}
      <div className="flex border-b border-gray-200 bg-gray-50">
        {tabs.map((label, idx) => {
          const isActive = idx === activeIndex
          return (
            <button
              key={label}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2 text-sm font-medium ${
                isActive
                  ? 'border-b-1 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {label}
            </button>
          )
        })}
      </div>

      {/* Show the active code block */}
      <div className="p-4">{codeBlocks[activeIndex] || null}</div>
    </div>
  )
}
