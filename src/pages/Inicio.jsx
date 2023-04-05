import React from 'react'
import { ItemListContainerComponent } from '../components'
import { BannerContainer } from '../components/BannerContainer/BannerContainer'
import { BannerFooter } from '../components/BannerFooter/BannerFooter'

export const Inicio = () => {
  return (
    <div>
      <BannerContainer/>
      <ItemListContainerComponent></ItemListContainerComponent>
      <BannerFooter/>
    </div>
  )
}
