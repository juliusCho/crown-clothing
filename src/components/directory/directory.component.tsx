import React, { useState } from 'react'
import { InitialSectionData } from '../../data/section.data'
import { SectionType } from '../../types/section.types'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

const Directory = () => {
  const [sections, setSections] = useState<SectionType[]>(InitialSectionData)

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  )
}

export default Directory
