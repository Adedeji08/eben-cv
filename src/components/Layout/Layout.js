/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 18/06/2022 - 16:37:13
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/06/2022
    * - Author          : 
    * - Modification    : 
**/
import React from 'react'
import { Sidebar } from '../sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import './Layout.scss';

export const Layout = () => {
  return (
    <div>
    <Sidebar />
    <div className="page">

        <Outlet />
      
       
      </div>
    </div>
  )
}
