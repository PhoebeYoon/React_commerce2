##### :cactus: React_Tutorial_Part3
1. 
:file_folder: components 
[Footer.js] 를 생성합니다. 

```js
import React from 'react'

function Footer() {
  return (
    <div>
     <p> &copy; 2023 Domino's Pizza</p>
    </div>
  )
}
export default Footer
```  
[ App.js ]의 내용을 아래와 같이 변경합니다.   
위의 import 문에서 BrowserRouter as Router라고 되어 있다면 as Router를 삭제 후 BrowserRouter 로 삽입해 봅니다.



```js
중략
<div className="App">
        <BrowserRouter>
            <Navbar />
            <Routes>
              <Route  path="/" element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
```  
결과를 브라우저에서 확인합니다.  

2.
소셜미디어아이콘을 삽입하도록 하겠습니다 이전에 설치했던 ui아이콘으로 인해 따로 뭔가를 설치할 필요없습니다.  
Footer.css 로 삽입합니다.  

```js
import React from 'react'
import { Instagram ,Facebook , Twitter, LinkedIn} from '@mui/icons-material'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="socialMedia">
        <Instagram />
        <Facebook />
        <Twitter />
        <LinkedIn />
      </div>
      <p>&copy; 2023 Domino's Pizza</p>
    </div>
  )
}
export default Footer
```   

<img width="400" alt="스크린샷 2023-04-25 오후 7 47 03" src="https://user-images.githubusercontent.com/48478079/234254364-38d1f2f1-f1b3-4242-9f72-40350f069243.png">


