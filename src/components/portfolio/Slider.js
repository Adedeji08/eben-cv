/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 05/07/2022 - 09:35:14
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/07/2022
    * - Author          : 
    * - Modification    : 
**/
import React from 'react'
import { Fade } from 'react-slideshow-image';
import './Slider.scss'
import 'react-slideshow-image/dist/styles.css'
import imgg from "../../assets/images/image1.jpg"
import imgg1 from "../../assets/images/image2.jpg"
import imgg2 from "../../assets/images/image3.jpeg"
  
   

    const fadeImages = [
        {
            url: imgg,
            caption: 'Dynamic',
            caption1: 'Igniting the passion'
        },
        {
            url: imgg1,
            caption: 'Versatile',
            caption1: 'Engaging with new ideas'
        },
        {
            url: imgg2,
            caption: 'Team Work',
            caption1: 'Building the impossible',
        },
    ] ;


console.log("first",fadeImages[0].url);
export const Slider = () => {
    return (
        <div className="slide-container">
        <Fade>
          {fadeImages.map((fadeImage, index) => (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img className='imgggg' src={fadeImage.url} alt="show" />
              </div>
             <div className='phase0'>
             <h1 className='phase1'>{fadeImage.caption}</h1>
               <h2 className='phase2'>{fadeImage.caption1}</h2>
             </div>
              </div>
          ))}
        </Fade>
      </div>
    )
}
