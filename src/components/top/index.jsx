import React from 'react'
import { Link } from 'gatsby'
import { GitHubIcon } from '../social-share/github-icon'
import { Layout } from '../../layout'

import './index.scss'

export const Top = ({ title, location, rootPath }) => {
  const isRoot = location.pathname === rootPath
  return (
    <div className="top">
      <nav className="top-nav">
        <h1 className="a11y">KevinGwon Navigator</h1>
        <ul>
          <li>
            <Link to={`/`} className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to={`/blog`} className="link">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <GitHubIcon />
    </div>
  )
}
