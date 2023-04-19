import React from 'react'
import { ItemListContainerComponent } from '../components'
import { BannerContainer } from '../components/BannerContainer/BannerContainer'


export const Inicio = () => {
  return (
    <div>
      <BannerContainer/>
      <ItemListContainerComponent></ItemListContainerComponent>
    </div>
  )
}
