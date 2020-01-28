import React from 'react'
import { Img } from '../img'
import './index.scss'

export const Skill = props => {
  return (
    <ul className="skill-list">
      {props.list.map(item => (
        <li key={item}>
          <Img folder={'skill'} name={item} />
          <small>{item.split('.')[0]}</small>
        </li>
      ))}
    </ul>
  )
}
