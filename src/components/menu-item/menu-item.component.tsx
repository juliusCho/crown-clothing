import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { SizeEnum } from '../../types/section.types'
import './menu-item.styles.scss'

type Props = {
  title: string
  imageUrl: string
  size?: SizeEnum
  linkUrl: string
}

export default withRouter(function MenuItem({
  title,
  imageUrl,
  size,
  linkUrl,
  history,
  match,
}: Props & RouteComponentProps) {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
})
