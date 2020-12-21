import React from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import SHOP_DATA from '../../data/shop.data'
import { ShopType } from '../../types/shop.types'

export default function ShopPage() {
  const [collections, setCollections] = React.useState<ShopType[]>(SHOP_DATA)

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}
