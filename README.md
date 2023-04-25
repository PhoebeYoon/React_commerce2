##### :cactus: React_Tutorial_Part3

- Link: 클릭 시 지정한 URL로 이동하는 링크를 생성합니다   
Link로 Home, Menu, About, Contact 4개의 메뉴를 만듭니다. 
1. 
[Navbar.js]    
```js
import React from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'

function Navar() {
  return (
    <div>
       <div className='navbar'>
      <div className="leftSide">
        <img src={Logo} />
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
    </div>
  )
}
export default Navar
```    
아래와 같은 결과화면이 나옵니다.   
<img width="230" alt="스크린샷 2023-04-25 오후 5 41 27" src="https://user-images.githubusercontent.com/48478079/234222952-6ff0081c-0d10-45e0-9424-1903c1ea18fd.png">

2. 
📁styles안에 Navbar.css 생성합니다. 이제 해당 css파일을 [ Navbar.js ] 안에 import 해야 합니다.  
(첨부된 파일을 다운로드하여 사용합니다 ) 
```js
import '../styles/Navbar.css'
```   
결과는 아래와 같습니다.   
<img width="460" alt="스크린샷 2023-04-25 오후 5 48 48" src="https://user-images.githubusercontent.com/48478079/234224746-d9ae781b-d5df-4841-be9a-3d383868a8bc.png">



