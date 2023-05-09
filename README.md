##### :cactus: React_Tutorial_Part3

###### 💔 해당 게시물을 무단으로 도용하지 마세요   

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

3. 
Before-start 브랜치에 소개되어 있는 사이트, https://mui.com/material-ui/material-icons/ 에 접속해서 왼쪽메뉴 중 'Getting started' > 'Installation' 를 따라 설치합니다.  아이콘부분을 찾아 설치합니다.   
``` npm install @mui/material @emotion/react @emotion/styled  ```

<img width="500" alt="스크린샷 2023-04-25 오후 6 14 26" src="https://user-images.githubusercontent.com/48478079/234231735-8cf3a0ee-b978-48d9-8723-f791a61cdadc.png">   

코드를 복사해서 Navbar.js에 붙여넣기합니다. 
[Navbar.js]   
```js
import React from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

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
        <MenuIcon />

      </div>
    </div>
    </div>
  )
}
export default Navar
```   
navbar의 색상때문에 잘 안 보일수 있으나 삽입되어 있습니다. 
여기까지 따라오셨다면 버튼태그로 
```
<button> <MenuIcon /> </button>
```   
다운받았던 styles이 적용되어 있는 상태이므로 브라우저의 사이즈를 줄이면 아이콘 모양이 선명하게 보일것입니다.  

<img width="300" alt="스크린샷 2023-04-25 오후 6 23 04" src="https://user-images.githubusercontent.com/48478079/234233580-da3b7958-0117-4895-89b1-2f13ac8a5cc9.png">




