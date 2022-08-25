/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 18/06/2022 - 16:14:26
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/06/2022
    * - Author          : 
    * - Modification    : 
**/

import './App.scss';
import { Layout } from './components/Layout/Layout'
import {Routes, Route} from 'react-router-dom'
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Portfolio } from './components/portfolio/Portfolio';

function App() {
  // const path = require('path')
  // app.use(express.static(path.join(__dirname, './public')));
  return (
   <Routes>
     <Route path="/" element={<Layout/>}>
     <Route index  element={<Home />} /> 
     <Route path="about"  element={<About />} /> 
     <Route path="contact"  element={<Contact />} /> 
     <Route path="portfolio"  element={<Portfolio />} /> 
     </Route>
   </Routes>
  );
}

export default App;
