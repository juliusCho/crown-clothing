import React, { useState } from 'react'
import { InitialSectionData } from '../../data/section.data'
import { SectionType } from '../../types/section.types'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

const Directory = () => {
  const [sections, setSections] = useState<SectionType[]>(InitialSectionData)

  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  )
}

export default Directory
