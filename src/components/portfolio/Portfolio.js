/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 01/07/2022 - 16:07:15
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/07/2022
    * - Author          : 
    * - Modification    : 
**/
import React from 'react'
import './Portfolio.scss'
import { Slider } from './Slider'
import Loader from 'react-loaders'

export const Portfolio = () => {
  return (
   <>
   
   <main className='portfolio'>
            <Slider/>
                <div className='port-picture'>
                    <h1>My Portfolio</h1>
                </div>
            <div className='port-flex'>
                        <div className='sider'>
                        <h1 className='side-text'>Time Tracking App</h1>
                        <p className='side-text2'>This app tracks events of the week and the timing  </p>
                        </div>
                        <div className='sider'>
                            <h1 className='side-text'>E-commerce App</h1>
                            <p className='side-text2'>A single page e-commerce app with different <br/>features like Add to cart, delete button<br/> and display of images</p>
                        </div>
                        <div className='sider'> 
                            <h1 className='side-text'>E-commerce App</h1>
                            <p className='side-text2'>An e-commerce app where you can shop for<br/> fashion items. This is still building to ease the tension of<br/> clients going manually to purchase <br/>goods </p>
                        </div>
                        <div className='sider'>
                            <h1  className='side-text'>IP Address Tracker</h1>
                            <p  className='side-text2'>This app is to track Ip Address<br/> of public and private organization </p>
                        </div>
                        <div className='sider'>
                            <h1  className='side-text'>Country Search</h1>
                            <p className='side-text2'>This app is to search for <br/> and find all the details about<br/>the selected country<br/>Also with theme feature</p>
                        </div>
                        <div className='sider'>
                            <h1  className='side-text'>Navigation</h1>
                            <p className='side-text2'>This is a app built to navigate<br/> through pages with dynamic images </p>
                        </div>
            </div> 
   </main>
   <Loader type="pacman" />
   </>
  )
}
