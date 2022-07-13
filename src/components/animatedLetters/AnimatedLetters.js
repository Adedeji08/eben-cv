/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 27/06/2022 - 21:47:40
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/06/2022
    * - Author          : 
    * - Modification    : 
**/
import './AnimatedLetters.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        
      <span>
        {strArray.map((char, i) => (
          <span key={char + i} className={`${letterClass} _${i + idx}`}>
            {char}
          </span>
        ))}
      </span>
    )

  }
  
  export default AnimatedLetters