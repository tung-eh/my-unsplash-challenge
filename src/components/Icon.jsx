import React, { cloneElement } from 'react'

const Icon = ({ name, ...props }) => {
  const svg = SVG_MAP[name]

  return cloneElement(svg, { width: '1em', height: '1em', ...props })
}

// From Hero icons -> https://heroicons.com
const SVG_MAP = {
  search: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  ),
}

export default Icon
