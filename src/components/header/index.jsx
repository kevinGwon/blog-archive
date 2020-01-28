import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

export const Header = ({ title, location, rootPath }) => {
  const isRoot = location.pathname === '/blog'

  return (
    isRoot && (
      <h1 className="header">
        <Link to={`/`} className="link">
          {title}
        </Link>
      </h1>
    )
  )
}
