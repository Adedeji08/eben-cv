/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 27/06/2022 - 17:55:10
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/06/2022
    * - Author          : 
    * - Modification    : 
**/
import {useState, useEffect} from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../animatedLetters/AnimatedLetters'
import LogoTitle from '../../assets/images/dammy.png'
import { Logo } from './logo/Logo'



export const Home = () => {

        const [letterClass, setLetterClass] = useState('text-animate')
        const [timeout, setTimeout] = useState()
      
        const nameArray = ['D', 'A', 'M', 'I', 'L', 'O', 'L', 'A','', 'A', 'D', 'E','D', 'E', 'J', 'I']
       const jobArray = [
            'w',
            'e',
            'b',
            ' ',
            'd',
            'e',
            'v',
            'e',
            'l',
            'o',
            'p',
            'e',
            'r',
            '.',
  ]
        useEffect(() => {
          return setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 4000)
        }, [])

  return (
    <>
      <div className="container home-page">
        <div className='image-circle'>
           <img src={LogoTitle} alt="..." className='circle' />
        </div>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
           &nbsp;
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / React JavaScript Expert</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
       <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}
