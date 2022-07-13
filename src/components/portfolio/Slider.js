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
import imgg from "../../assets/images/random.jpg"
import imgg1 from "../../assets/images/eben.jpg"
import imgg2 from "../../assets/images/mine.jpeg"
  
   

    const fadeImages = [
        {
            url: imgg,
            caption: 'My Portfolio',
            caption1: 'Igniting the passion'
        },
        {
            url: imgg1,
            caption: 'My Portfolio',
            caption1: 'Engaging with new ideas'
        },
        {
            url: imgg2,
            caption: 'My Portfolio',
            caption1: 'Building the impossible'
        },
        {
            url: imgg,
            caption: 'My Portfolio',
            caption1: 'Rejuvinating the world of Tech'
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
                <img src={fadeImage.url} alt="show" />
              </div>
              <h2>{fadeImage.caption}</h2>
              <h2>{fadeImage.caption1}</h2>
            </div>
          ))}
        </Fade>
      </div>
    )
}
