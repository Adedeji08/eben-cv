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
import { Slider } from './Slider';
import Loader from 'react-loaders';
import CV from "../../assets/images/myResume.pdf"
 import {NavLink} from 'react-router-dom'

export const Portfolio = () => {
  return (
   <>
   
   <main className='portfolio'>
            <Slider/>
            <div className='portClass'>
                <div className='port-picture'>
                    <h1>My Portfolio</h1>
                </div>
            <div className='port-flex'>
                        <div className='sider'>
                        <a href="https://github.com/Adedeji08/time-tracking-dashboard-main" className='linko'  target="_blank"   rel="noreferrer">
                        <h1 className='side-text'>Time Tracking App</h1>
                        <p className='side-text2'>This app tracks events of the week and the timing </p>
                        </a>
                        </div>
                      
                        <div className='sider'>
                        <a href="https://github.com/Adedeji08/ecommerce_product-page-main" className='linko'  target="_blank"   rel="noreferrer">
                            <h1 className='side-text'>E-commerce App</h1>
                            <p className='side-text2'>A single page e-commerce app with different <br/>features like Add to cart, delete button<br/> and display of images</p>
                            </a>
                        </div>
                        <div className='sider'> 
                        <a href="https://github.com/Adedeji08/sallyk-fashion_affairs" className='linko'  target="_blank"   rel="noreferrer">
                            <h1 className='side-text'>E-commerce App</h1>
                            <p className='side-text2'>An e-commerce app where you can shop for<br/> fashion items. This project is still in progress and it is <br/> aimed at enabling clients shop online<br/> instead of doing same physically</p>
                            </a>
                        </div>
                        <div className='sider'>
                        <a href="https://github.com/Adedeji08/ip-address-tracker-master" className='linko'  target="_blank"   rel="noreferrer">
                            <h1  className='side-text'>IP Address Tracker</h1>
                            <p  className='side-text2'>This app is to track Ip Address<br/> of public and private organisations </p>
                            </a>
                        </div>
                        <div className='sider'>
                        <a href="https://github.com/Adedeji08/rest-countries-api-with-color-theme-switcher-master-main" className='linko'  target="_blank"   rel="noreferrer">
                            <h1  className='side-text'>Country Search</h1>
                            <p className='side-text2'>This App is built to search<br/> and provide details about<br/>the selected country<br/>It also with theme feature</p>
                            </a>
                        </div>
                        <div className='sider'>
                        <a href="https://github.com/Adedeji08/notification-page-main" className='linko'  target="_blank"   rel="noreferrer">
                            <h1  className='side-text'>Notification Box</h1>
                            <p className='side-text2'>This is a app built to identify<br/> read and unread messages </p>
                            </a>
                        </div>
            </div> 
            <section className='port-section'>
                <div>
                  <h2 className='h-text'>Contact</h2>
                  <p className='p-text'>+234 810 281 4656</p>
                </div>
               
                <div>
                <h2 className='h-text'>Email</h2>
                            <NavLink
                    className="contact-lin"
                    to="/contact"
                    >
                <p className='p-text'>ebenoluwadamilola@gmail.com</p>
                </NavLink>
                </div>

                <div>
                <h2 className='h-text'>Curriculum Vitae</h2> 
                <div className='diva' style={{width: '35%', marginRight: 'auto', marginLeft: 'auto'}}>
                <a href={CV} download={CV}> <button className='btn' type='submit' download={CV} >Download</button></a>
                </div>
                </div>

                <div>
                <h2 className='h-text'>Github</h2> 
                
                        <a
                    href="https://github.com/Adedeji08"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-lin"
                >
                  <p className='p-text'>https://github.com/Adedeji08</p>
                </a>
                </div>
            </section>
            {/* <p className='copy'>Copyright ©2022 All rights reserved | damilolaadedeji.netlify.app</p> */}
            </div>
   </main>
   <Loader type="pacman" />
   </>
  )
}
