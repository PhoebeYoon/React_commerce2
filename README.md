##### :cactus: React_Tutorial_Part3

###### 💔 해당 게시물을 무단으로 도용하지 마세요    

:file_folder:pages 안에 About.js 파일을 생성합니다.

[About.js]   

```js
import React from 'react'
import MultiplePizzas from "../assets/pizza10.jpg";
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage:`url( ${MultiplePizzas})`}}></div>
      <div className="aboutBottom">
       <h1>About us</h1>
        <p>Lorem ipsum  </p>
      </div>
    </div>
  )
}
export default About

```

[App.js]  

```js
import './App.css';
import Navbar from './components/Navar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'


import  { BrowserRouter, Routes , Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar />
            <Routes>
              <Route  path="/" element={<Home />} />
              <Route  path="/menu" element={<Menu />} />
              <Route  path="/about" element={<About />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  );
}
export default App;

```

<img width="350" alt="스크린샷 2023-04-25 오후 9 27 43" src="https://user-images.githubusercontent.com/48478079/234275966-eb79179b-812a-4c97-b1bc-57c4e2cf896c.png">

