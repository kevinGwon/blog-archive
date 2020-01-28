import React from 'react'

export const Img = ({ folder, name }) => {
  return <img src={`/images/${folder}/${name}`} alt={name.split('.')[0]} />
}
