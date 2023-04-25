##### :cactus: React_Tutorial_Part3


이제 url에 이동한 메뉴를 선택하면 예) /menu, /contact 등 해당 페이지를 보여주도록 하겠습니다. 

[Home.js]  
```js
import React from 'react'
import '../styles/Home.css'
function Home() {
  return (
    <div className='home'>
        <div className="headerContainer">
          <h1>Domino's Pizza</h1>
          <p>Pizza to fit any taste</p>
          <button>ORDER NOW</button>
        </div>
    </div>
  )
}
export default Home
```  
여기까지 실행되었다면 아래와같은 결과가 나올것입니다. 

<img width="300" alt="스크린샷 2023-04-25 오후 6 58 55" src="https://user-images.githubusercontent.com/48478079/234242951-ddd11210-b68c-457d-8664-c448eae89ab3.png">   
여기에서 'ORDER NOW'버튼을 클릭하면 해당 메뉴로 이동하도록 해야 합니다. 그러기위해 Links태그로 감싸주어야 합니다.  


[Home.js]  
```js
import {Link} from 'react-router-dom'  


<Link to="/menu"> 
   <button>ORDER NOW</button>
</Link>
```
버튼을 클릭해서  url에 'http://localhost:3000/menu'으로 이동하는지 확인합니다.  

3. 
스타일을 삽입해 보겠습니다. 기존내용을 조금 변경하도록 하겠습니다.   
[Home.js]   
```js
  <div className="headerContainer" style={{ fontSize:`16px`}}>
    글자사이즈를조정했습니다
<h1>Domino's Pizza</h1>

```  
개발자도구에서  위의 style의 내용이 아래와 같이 변경되어 있는지 확인합니다. 
<img width="400" alt="스크린샷 2023-04-25 오후 7 18 44" src="https://user-images.githubusercontent.com/48478079/234248018-62393380-390f-4bbb-b437-56dede4ecdf3.png">

4.
페이지에 배경에 이미지를 삽입하도록 하겠습니다. 사각형이 아닌 페이지전체이므로 스타일을 home 클래스있는 곳에 넣겠습니다. 
[Home.js]
```js
import React from 'react'
import '../styles/Home.css'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/pizza1.jpg' 
// 불러들인 이미지를 BannerImage 지정하고 이것을 아래에 삽입합니다

function Home() {
  return (
    <div className='home' style={{ backgroundImage:`url(${ BannerImage})`}}>
        <div className="headerContainer" >
          <h1>Domino's Pizza</h1>
          <p>Pizza to fit any taste</p>
          <Link to="/menu"> 
            <button>ORDER NOW</button>
          </Link>
        </div>
    </div>
  )
}
export default Home
```   
이미 스타일이 만들어져있기때문에 아래와 같이 보입니다.  
<img width="200" alt="스크린샷 2023-04-25 오후 7 28 59" src="https://user-images.githubusercontent.com/48478079/234250224-0fb2b9b7-9732-4c0d-80e5-d993afe29c6e.png"> <img width="300" alt="스크린샷 2023-04-25 오후 7 29 55" src="https://user-images.githubusercontent.com/48478079/234250470-5ba7334d-3701-4704-9abc-ca6e9ee76534.png">








