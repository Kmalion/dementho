import React from 'react'
import { NavBarComponent } from '../components'
import { ItemListContainerComponent} from '../components'




export const MainLayout = ({children}) => {

    return (
    <div>
        <NavBarComponent />
        {children}
        <ItemListContainerComponent />
        </div>
  )
}
